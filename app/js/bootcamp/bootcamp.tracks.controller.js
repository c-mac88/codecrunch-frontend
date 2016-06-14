(function() {
    'use strict';
    angular
        .module('app')
        .controller('BootcampTracksController', BootcampTracksController);

    BootcampTracksController.$inject = ['trackFactory', 'toastr'];

    function BootcampTracksController(trackFactory, toastr) {
        var vm = this;

        vm.getTracks = function() {
            trackFactory.getAll().then(
                function(response) {
                    vm.tracks = response.data;
                    /* console.log($scope.items);*/
                },
                function(error) {
                    toastr.error('There has been an error');
                });
        };

        vm.getTracks();

        vm.addTrack = function(track) {
            trackFactory.create(track).then(
                function(response) {
                    vm.tracks.push(response.data);
                    vm.track = {};
                },
                function(error) {
                    toastr.error('There has been an error');
                });
        };

        vm.deleteTrack = function(track) {
            trackFactory.remove(track.trackId).then(
                function(response) {
                    var index = vm.tracks.indexOf(track);
                    vm.tracks.splice(index, 1);
                },
                function(error) {
                    toastr.error('There has been an error');
                });
        };

        vm.updatetrack = function(track) {
            trackFactory.update(track.trackId, track).then(
                function(response) {

                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };
    }
})();
