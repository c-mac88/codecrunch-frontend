(function() {
    'use strict';

    angular
        .module('app')
        .factory('moduleFactory', moduleFactory);

    moduleFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function moduleFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'modules/CurrentUser', 'modules');
    }
})();
