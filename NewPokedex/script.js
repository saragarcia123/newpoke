var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("PokeListado",function($scope,$rootScope,$http){
	$scope.PokeData = [];

	for (var x = 1; x <800; x++) {
		$http({
			method : "GET",
			url : "https://pokeapi.co/api/v2/pokemon/" + x
		}).then(function(snapshot){
			$scope.PokeData.push(snapshot);
			console.log(snapshot);
		})		
		console.log($scope.PokeData);
	}
})