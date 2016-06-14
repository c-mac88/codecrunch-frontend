(function() {
    'use strict';

    angular
        .module('app')
        .controller('BootcampModuleController', BootcampModuleController);

    BootcampModuleController.$inject = ['dataHolderService', 'moduleFactory', '$stateParams', 'toastr'];

    /* @ngInject */
    function BootcampModuleController(dataHolderService, moduleFactory, $stateParams, toastr) {
        var vm = this;
        vm.title = 'BootcampModuleController';
        vm.module = {};
        //vm.availableTags = ["C#", ".NET", "JavaScript"];
        vm.Show = "";
        vm.newModule = { moduleName: "", moduleDescription: "" };
        vm.addNewModule = false;


        getModules();

        function getModules() {
            moduleFactory.getAll()
                .then(function(response) {
                        vm.modules = response;
                        //vm.bootcamp.tags = [];
                        console.log(vm.modules);
                    },
                    function(error) {
                        toastr.error('There has been an error');
                    });
        }

        vm.showChapter = function(chapter) {
            console.log('almost there');
            vm.Show = chapter.chapterId;
        };

        // vm.getBootCamp = function() {
        //     bootcampFactory.getById($stateParams.bootcampId)
        //         .then(function(response) {
        //                 vm.bootcamp = response;
        //                 dataHolderService.modules = response.modules;
        //                 vm.modules = dataHolderService.modules;
        //             },
        //             function(error) {
        //                 toastr.error('There has been an error');
        //             });
        // };


        vm.addModule = function() {
            moduleFactory.create(vm.newModule)
                .then(function(response) {
                        vm.module.push(data);
                        console.log(vm.modules);
                        vm.newModule = { moduleName: "", moduleDescription: "" };
                        vm.addNewModule = false;
                        $state.go($state.current, {}, {reload:true})
                    },
                    function(error) {
                        toastr.error('There has been an error');
                    });
        };

        // vm.deleteBootCamp = function(bootcamp) {
        //     moduleFactory.remove(bootcamp)
        //         .then(function(response) {
        //                 var index = vm.bootcamps.indexOf(bootcamp);
        //                 vm.tracks.splice(index, 1);
        //             },
        //             function(error) {
        //                 toastr.error('There has been an error');
        //             });
        // };


        // vm.updateBootCamp = function(bootcamp) {
        //     moduleFactory.update(bootcamp.bootcampId, bootcamp)
        //         .then(function(response) {
        //                 //add code here when db is up to date
        //             },
        //             function(error) {
        //                 toastr.error('There has been an error');
        //             });
        // };
    }
})();
