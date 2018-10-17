angular.module('app.module')
    .controller('usersCntr', function ($scope, $state, userService) {
        $scope.users = userService.getUsers();

        $scope.showTodo = function () {
            $state.go('main');
        };

        $scope.logout = function () {
            userService.currentUser = null;
            $state.go('login');
        }
    });