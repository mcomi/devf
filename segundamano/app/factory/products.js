(function(){
    'use strict';

    angular
        .module('myApp')
        .factory("apiProducts", apiProducts);

    apiProducts.$inject = ["$resource"];
    function apiProducts($resource){
        return $resource("./server/myproducts.json");
        console.log($resource);
    }

})();