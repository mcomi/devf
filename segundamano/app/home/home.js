(function(){
    'use strict';

    var home = {
        templateUrl: './app/home/home.html',
        controller: homeCtrl
    };

    angular
        .module("myApp")
        .component("home",home);


    function homeCtrl() {
        var home = this;

    }

})();