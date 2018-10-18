angular.module('app.module')
    .controller('usersCntr', function ($scope, $state, userService) {
        $scope.users = userService.getUsers();

        $scope.logout = function () {
            userService.currentUser = null;
            $state.go('login');
        };
    });