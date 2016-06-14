(function() {
    'use strict';

    angular
        .module('app')
        .controller('BrowseTracksController', BrowseTracksController);

    BrowseTracksController.$inject = ['trackFactory', 'moduleFactory', 'toastr'];

    /* @ngInject */
    function BrowseTracksController(trackFactory, moduleFactory, toastr) {
        var vm = this;
        vm.title = 'BrowseTracksController';

        ////////////////

        vm.getTracksByLanguage = function() {
            trackFactory.getAll().then(function(response) {
                vm.tracks = response.data;
                /* console.log($scope.items);*/
            }, function(error) {
                toastr.error('There has been an error');
            })
        };

        vm.getModules = function() {
            moduleFactory.getAll().then(function(response) {
                vm.modules = response.data;
                /* console.log($scope.items);*/
            }, function(error) {
                toastr.error('There has been an error');
            })
        };

        vm.updateModule = function(module) {
            module.likeCount += 1;
            moduleFactory.update(module.moduleId, module).then(function(response) {}, function(error) {
                toastr.error('There has been an error');
            })
        };

        vm.updateModule = function(module) {
            module.likeCount += 1;
            moduleFactory.update(module.moduleId, module).then(function(response) {}, function(error) {
                toastr.error('There has been an error');
            })
        };

        vm.tracks = [

            "Track 1",
            "   Track 2",
            "   Track 3",
            "   Track 4",
            "   Track 5",
            "   Track 6",
            "   Track 7",
            "   Track 8",
            "   Track 9",
            "   Track 10",
            "   Track 11",
            "   Track 12",
            "   Track 13",
            "   Track 14",
            "   Track 15"

        ];

        vm.modules = [

            "Module 1",
            "  Module 2",
            "  Module 3",
            "  Module 4",
            "  Module 5",
            "  Module 6",
            "  Module 7",
            "  Module 8",
            "  Module 9",
            "  Module 10",
            "  Module 11",
            "  Module 12",
            "  Module 13",
            "  Module 14",
            "  Module 15"

        ];

    }

})();