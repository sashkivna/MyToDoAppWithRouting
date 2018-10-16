angular.module('app.module')
    .controller('usersCntr', function ($scope, $state) {
        $scope.users = JSON.parse(localStorage.getItem('users')) || [];

        $scope.showTodo = function () {
            $state.go('main');
        }
    });