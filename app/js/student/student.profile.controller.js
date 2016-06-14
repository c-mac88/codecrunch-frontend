(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentProfileController', StudentProfileController);

    StudentProfileController.$inject = [];

    /* @ngInject */
    function StudentProfileController() {
        var vm = this;
        vm.title = 'StudentProfileController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();