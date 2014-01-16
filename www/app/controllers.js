var weegoinControllers = angular.module('weegoinApp.controllers', []);

weegoinControllers.controller('MainMenuCtrl',

	['$scope', '$http', '$location', 'userService',

	function($scope, $http, $location, $user) {

		$scope.selectedIndex = 0;

		$scope.items = [

			{n: 0, label: "Estabelecimentos", value: "places"},
			{n: 1, label: "Calendário", value: "calendar"},
			{n: 2, label: "Perfil", value: "profile"},
			{n: 3, label: "Configurações", value: "settings"},
			{n: 4, label: "Contato", value: "contact"},
		]

		$scope.state = function(s) {
			return s == $scope.selectedIndex ? 'current' : '';
		}

		$scope.goto = function(path) {

			for(var i = 0; i < $scope.items.length; i++) {
				if($scope.items[i].value == path)
					$scope.selectedIndex = $scope.items[i].n
			}

			$location.path(path);
		}
	}
])

weegoinControllers.controller('HomeCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('PlaceCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('PlaceEventCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('PublicEventCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('PrivateEventCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('ContactCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])