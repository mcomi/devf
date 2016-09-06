(function () {
	'use strict';
	var card = {
		templateUrl : './partials/card.html',
		controller : firstCtrl
	}

	angular
		.module('ejercicio', [])
		.component('card', card)

	function firstCtrl () {
		var texto = this;
	}

})();