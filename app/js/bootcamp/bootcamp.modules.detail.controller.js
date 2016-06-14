(function() {
    'use strict';

    angular
        .module('app')
        .controller('BootcampModuleDetailController', BootcampModuleDetailController);

    BootcampModuleDetailController.$inject = [];

    /* @ngInject */
    function BootcampModuleDetailController() {
        var vm = this;
        vm.title = 'BootcampModuleDetailController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();