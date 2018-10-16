angular.module('app.module')
    .controller('mainController', function ($scope, todoService) {
        $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        $scope.$watchCollection('tasks', function (tasks) {
            todoService.updateTasks(tasks);
        });
    });
