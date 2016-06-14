(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentsController', StudentsController);

    StudentsController.$inject = [];

    /* @ngInject */
    function StudentsController() {
        var vm = this;
        vm.title = 'StudentsController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();