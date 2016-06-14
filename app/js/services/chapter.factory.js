(function() {
    'use strict';

    angular
        .module('app')
        .factory('chapterFactory', chapterFactory);

    chapterFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function chapterFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'chapters', 'chapter');
    }
})();
