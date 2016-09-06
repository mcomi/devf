(function () {
	'use strict';

	angular
		.module('sw')
		.factory('apiStarWars', apiStarWars);

	apiStarWars.$inject = ['$resource'];
	function apiStarWars ($resource, apiName) {
		var baseUrl = 'http://swapi.co/api/';
		var apiName = apiName;
		return $resource(baseUrl+apiName);
	}

})()