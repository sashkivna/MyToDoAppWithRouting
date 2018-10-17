angular.module('app.module')
    .factory('todoService', function (userService) {
        var users = JSON.parse(localStorage.getItem('users')) || [];

        function updateTasks(tasks) {
            if (tasks.length) {
                tasks.forEach(function (task) {
                    if (!task.email) {
                        task.email = userService.getCurrentUser().email;
                    }
                });

                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }

        return {
            users: users,
            updateTasks: updateTasks
        }
    });