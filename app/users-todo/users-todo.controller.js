angular.module('app.module')
    .controller('usersCntr', function ($scope, $state, userService) {
        $scope.users = JSON.parse(localStorage.getItem('users')) || [];

        $scope.showTodo = function () {
            $state.go('main');
        };

        $scope.logout = function () {
            userService.currentUser = null;
            $state.go('login');
        }
    });