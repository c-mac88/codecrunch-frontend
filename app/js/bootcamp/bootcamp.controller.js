(function() {
    'use strict';

    angular
        .module('app')
        .controller('BootcampController', BootcampController);

    BootcampController.$inject = [];

    /* @ngInject */
    function BootcampController() {
        var vm = this;
        vm.title = 'BootcampController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();