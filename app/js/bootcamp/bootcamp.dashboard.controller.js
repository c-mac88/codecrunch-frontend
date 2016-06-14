(function() {
    'use strict';

    angular
        .module('app')
        .controller('BootcampDashboardController', BootcampDashboardController);

    BootcampDashboardController.$inject = [];

    /* @ngInject */
    function BootcampDashboardController() {
        var vm = this;
        vm.title = 'BootcampDashboardController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();