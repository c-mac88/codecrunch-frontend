(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentProgressController', StudentProgressController);

    StudentProgressController.$inject = [];

    /* @ngInject */
    function StudentProgressController() {
        var vm = this;
        vm.title = 'StudentProgressController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();