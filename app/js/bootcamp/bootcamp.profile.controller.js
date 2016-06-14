(function() {
    'use strict';

    angular
        .module('app')
        .controller('BootcampProfileController', BootcampProfileController);

    BootcampProfileController.$inject = ['$state', 'bootcampFactory', '$stateParams', 'toastr', 'dataHolderService'];

    /* @ngInject */
    function BootcampProfileController($state, bootcampFactory, $stateParams, toastr, dataHolderService) {
        var vm = this;
        vm.title = 'BootCampProfileController';
        vm.bootcamps = [];
        vm.bootcamp = {};
        vm.editingName = false;

        vm.getBootCamp = function() {
            bootcampFactory.getAll($stateParams.bootcampId)
                .then(function(response) {
                        vm.bootcamp = response;
                        console.log(vm.bootcamp);
                        // dataHolderService.modules = response.modules;
                        // vm.modules = dataHolderService.modules;
                    },
                    function(error) {
                        toastr.error('There has been an error');
                    });
        };

        vm.getBootCamp();


        vm.addBootCamp = function(bootcamp) {
            bootcampFactory.create(bootcamp)
                .then(function(response) {
                        vm.bootcamps.push(data);
                        console.log(data);
                    },
                    function(error) {
                        toastr.error('There has been an error');
                    });
        };

        vm.deleteBootCamp = function(bootcamp) {
            bootcampFactory.remove(bootcamp)
                .then(function(response) {
                        var index = vm.bootcamps.indexOf(bootcamp);
                        vm.tracks.splice(index, 1);
                    },
                    function(error) {
                        toastr.error('There has been an error');
                    });
        };




        vm.updateBootCamp = function() {
            bootcampFactory.update($stateParams.bootcampId, vm.bootcamp)
                .then(function(response) {
                        $state.go($state.current, {}, { reload: true });
                    },
                    function(error) {
                        toastr.error('There has been an error');
                    });

        };
    }
})();
