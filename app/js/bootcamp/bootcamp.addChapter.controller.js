(function() {
    'use strict';

    angular
        .module('app')
        .controller('BootcampAddChapterController', BootcampAddChapterController);

    BootcampAddChapterController.$inject = [];

    /* @ngInject */
    function BootcampAddChapterController() {
        var vm = this;
        vm.preview = false;

    }
})();
