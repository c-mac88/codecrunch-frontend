(function() {
    'use strict';

    angular
        .module('app')
        .controller('BootcampStudentsController', BootcampStudentsController);

    BootcampStudentsController.$inject = [];

    /* @ngInject */
    function BootcampStudentsController() {
        var vm = this;
        vm.title = 'BootcampStudentsController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();