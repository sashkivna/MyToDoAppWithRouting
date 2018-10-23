angular.module('app.module')
    .controller('loginController', function ($scope, $state, userService) {
        $scope.register = function (email, password) {
            debugger;
            $scope.isRegisterButtonDisabled = true;

            userService.registerUser(email, password)
                .catch(function () {
                    console.log('user already exists')
                })
                .finally(function () {
                    $scope.isRegisterButtonDisabled = false;
                });
        };

        $scope.login = function (email, pass) {
            userService.loginUser(email, pass)
                .then(function () {
                    $scope.user = userService.getCurrentUser();

                    $state.go('users.list');
                })
        };
    });