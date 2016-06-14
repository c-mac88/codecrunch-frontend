(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentViewChapterController', StudentViewChapterController);

    StudentViewChapterController.$inject = [''];

    /* @ngInject */
    function StudentViewChapterController() {
        var vm = this;
        vm.title = 'StudentViewChapterController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();