angular.module('app.module')
    .controller('mainController', function ($scope, $stateParams, todoService, userService) {
        $scope.tasks = todoService.getTasks($stateParams.id);

        $scope.onTasksChange = function () {
            todoService.updateTasks($scope.tasks);
        };

        $scope.isDisabled = userService.getCurrentUser().id !== Number($stateParams.id);
    });
