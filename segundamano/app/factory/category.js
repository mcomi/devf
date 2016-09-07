(function(){
    'use strict';

    angular
        .module('myApp')
        .factory("apiCategory", apiCategory);

    apiCategory.$inject = ["$resource"];
    function apiCategory($resource){
        return $resource("./server/categories.json");
    }

})();