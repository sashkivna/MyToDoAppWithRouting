angular.module('app.module')
    .controller('usersCntr', ['$rootScope', '$scope', 'appCasheService', '$state', function ($rootScope, $scope, appCasheService, $state) {
        $rootScope.currentUser = 'vasya';
        $scope.usersFromCashe = appCasheService.getUsersFromCashe();
        $scope.showTodo = function () {
            $state.go('main');
        }
    }]);