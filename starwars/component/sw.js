(function () {
	'use strict';

	var swApi = {
		templateUrl: './component/sw.html',
		controller: swCtrl
	}

	angular
		.module('sw')
		.component('swApi', swApi);

	swCtrl.$inject = ['apiStarWars'];

	function swCtrl (apiStarWars) {

		var sw = this;
		var name = 'people';
		sw.apiName;
		sw.apiData = null;
		sw.getApi = getApi;

		function getApi () {
			console.log('entro a getApi');
			name = sw.apiName;
			apiStarWars.get(name)
				.$promise.then(function (response) {
					apiData = response;
				}) 
		}
	}
})()