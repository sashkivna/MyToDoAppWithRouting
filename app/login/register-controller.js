angular.module('app.module')
    .controller('loginController', function ($scope, userService) {
        $scope.register = function (email, password) {
            $scope.isRegisterButtonDisabled = true;

            userService.registerUser(email, password)
                .finally(function () {
                    $scope.isRegisterButtonDisabled = false;
                });
        };

        $scope.login = function (email, pass) {
            userService.loginUser(email, pass)
                .then(function () {
                    $scope.user = userService.getCurrentUser();

                    console.log("current user from promise" + $scope.user);
                })
                .catch(function () {

                })
        };
    });