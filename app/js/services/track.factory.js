(function() {
    'use strict';

    angular
        .module('app')
        .factory('trackFactory', trackFactory);

    trackFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function trackFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'bootcamps/tracks', 'tracks');
    }
})();
