app.controller('myCtrl', function($scope){
	$scope.field = {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };

	$scope.winTemplates = {
		1: {1: true, 2: true, 3: true, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false },
		2: {1: false, 2: false, 3: false, 4: true, 5: true, 6: true, 7: false, 8: false, 9: false },
		3: {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: true, 8: true, 9: true },
		4: {1: true, 2: false, 3: false, 4: true, 5: false, 6: false, 7: true, 8: false, 9: false },
		5: {1: false, 2: true, 3: false, 4: false, 5: true, 6: false, 7: false, 8: true, 9: false },
		6: {1: false, 2: false, 3: true, 4: false, 5: false, 6: true, 7: false, 8: false, 9: true },
		7: {1: true, 2: false, 3: false, 4: false, 5: true, 6: false, 7: false, 8: false, 9: true },
		8: {1: false, 2: false, 3: true, 4: false, 5: true, 6: false, 7: true, 8: false, 9: false }
	};

	$scope.greenTurn = true;  
	$scope.winScreen = false;
	$scope.winText = '';
	$scope.greenScore = 0;
	$scope.yellowScore = 0;
	$scope.allTurns = 0;


	$scope.cellClick = function(cellKey){
// fill in cell and turn next player
		if ($scope.field[cellKey] == '' && !$scope.winScreen) {
			$scope.field[cellKey] = ($scope.greenTurn ? 'green': 'yellow');
			$scope.greenTurn = !$scope.greenTurn;
			$scope.allTurns++;
		};

// winning watcher
		for (tamplateKey in $scope.winTemplates){
			for (pointKey in $scope.winTemplates[tamplateKey]){
				if(($scope.field[pointKey] === 'green') && ($scope.winTemplates[tamplateKey][pointKey] === true)){
					$scope.greenScore++;
				}
				if(($scope.field[pointKey]=== 'yellow') && ($scope.winTemplates[tamplateKey][pointKey] === true)){
					$scope.yellowScore++;
				}
				if($scope.greenScore == 3 || $scope.yellowScore == 3){
					$scope.winText = ($scope.greenScore > $scope.yellowScore ? 'Green Player' : 'Yellow Player') + ' WON!';
					$scope.winScreen = true;
				}
			};
			$scope.greenScore = 0;
			$scope.yellowScore = 0;
		}
		if (!$scope.winScreen && $scope.allTurns == 9) {
			$scope.winScreen = true;
			$scope.winText = 'Round Draw';
		}
	};

	// new game start!
	$scope.newGame = function(){
		$scope.greenScore = 0;
		$scope.yellowScore = 0;
		$scope.field = {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
		$scope.greenTurn = true;
		$scope.winScreen = false;
		$scope.allTurns = 0;
	}
});
