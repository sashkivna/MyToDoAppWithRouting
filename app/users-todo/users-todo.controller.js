angular.module('app.module')
    .controller('usersCntr', function ($scope, $state) {
        $scope.users = JSON.parse(localStorage.getItem('users')) || [];

        $scope.showTodo = function () {
            //alert("hello from todo");
            debugger;
            $state.go('main');
        }
    });