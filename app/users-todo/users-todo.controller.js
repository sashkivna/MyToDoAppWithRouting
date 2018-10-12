angular.module('app.module')
    .controller('usersCntr', function ($rootScope, $scope, appCasheService, $state) {
        $scope.usersFromCashe = appCasheService.getUsersFromCashe();

        $scope.showTodo = function () {
            $state.go('main');
        }
    });