angular.module('app.module')
    .controller('mainController', function ($scope, todoService) {
        $scope.tasks = userService.getTasks();

        $scope.$watchCollection('tasks', function (tasks) {
            todoService.updateTasks(tasks);
        });
    });
