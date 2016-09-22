angular.module('alurapic')
.factory('tokenInterceptor', function($q, $window, $location) {
	var interceptor = {};
	interceptor.request = function(config){
		config.headers = config.headers || {};
		if($window.sessionStorage.token) {
			console.log('Token enviado em cada request');
			config.headers['x-access-token'] = $window.sessionStorage.token;
		}
		return config;
	};
	interceptor.response = function(response){
		var token = response.headers('x-access-token');
		if(token != null) {
			$window.sessionStorage.token = token;
			console.log('Token no session storage');
		}
		return response;
	};
	interceptor.responseError = function(rejection){
		if(rejection != null && rejection.status === 401){
			console.log('Removendo token da sessão');
			delete $window.sessionStorage.token;
			$location.path('/login');
		}
		return $q.reject(rejection);
	};
	return interceptor;
});