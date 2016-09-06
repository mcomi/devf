(function () {
	'use strict';

	angular
		.module('marvel')
		.factory('apiMarvel', apiMarvel);

		apiMarvel.$inject = ['$resource'];
		function apiMarvel ($resource) {
			var apikey = 'd1036518906dbf1807b4d73b2777a3c4';
			var hash = '8bc7fd76f6e096af608c67fb1a540604';
			return $resource('http://gateway.marvel.com/v1/public/characters?ts=1&apikey='+ apikey +'&hash='+ hash);
		}
})();