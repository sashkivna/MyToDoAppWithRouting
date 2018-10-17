angular.module('app.module')
    .controller('mainController', function ($scope, todoService, userService) {
        $scope.tasks = userService.getTasks();

        $scope.onTasksChange = function () {
            todoService.updateTasks($scope.tasks);
        }
    });
