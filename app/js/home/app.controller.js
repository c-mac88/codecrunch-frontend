(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['authService', '$state', 'toastr'];

    /* @ngInject */
    function AppController(authService, $state, toastr) {
        var vm = this;

        vm.isLoggedIn = function() {
            return authService.state.loggedIn;
        };


        vm.loginUser = function() {
            console.log("hello world");
            authService.login(vm.loginForm).then(
                function(response) {
                    toastr.success('Login successful!');
                    $state.go('bootcamp.profile', { bootcampId: response.userID });
                },
                function(error) {
                    toastr.error("Error: " + error.data.error_description);
                    console.log("Error: " + error.data.error_descritpion + " error.status");
                }
            );
        };

        vm.registerUser = function() {
            authService.register(vm.registerForm).then(
                function(response) {
                    // console.log(response);
                    toastr.success('Registration successful!');
                    /*$state.go('/login');*/
                },
                function(error) {
                    if (error.status == 400) {
                        var errString = "";
                        for (var i in error.data.modelState) {
                            errString += "\n";
                            errString += error.data.modelState[i][0];
                            console.log(i);
                        };
                        toastr.error(error.data.message + errString);
                        console.log(error.data.modelState);
                    } else {
                        toastr.error("Error: " + error.data.error_description);
                        console.log("Error: " + error.data.error_description + ". error status:" + error.status);
                    };
                });
        };

        vm.logoutUser = function() {
            authService.logout();
            toastr.success('Logout successful!');


        };
    }
})();
