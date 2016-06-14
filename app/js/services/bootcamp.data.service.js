(function() {
    'use strict';

    angular
        .module('app')
        .service('dataHolderService', dataHolderService);

    dataHolderService.$inject = [];

    /* @ngInject */
    function dataHolderService() {
    	this.modules = [];
    }
})();
