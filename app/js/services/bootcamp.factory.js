(function() {
    'use strict';

    angular
        .module('app')
        .factory('bootcampFactory', bootcampFactory);

    bootcampFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function bootcampFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'bootcamps/profile', 'bootcamp');
    }
})();
