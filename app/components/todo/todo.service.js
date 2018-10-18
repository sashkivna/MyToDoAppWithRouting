angular.module('app.module')
    .factory('todoService', function (userService) {
        var users = JSON.parse(localStorage.getItem('users')) || [];

        function updateTasks(updatedTasks) {
            var currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];

            if (updatedTasks.length) {
                updatedTasks.forEach(function (task) {
                    if (!task.email) {
                        task.email = userService.getCurrentUser().email;
                    }
                });
            }

            var notUpdatedTasks = currentTasks.filter(function (currentTask) {
                return currentTask.email !== userService.getCurrentUser().email
            });

            localStorage.setItem('tasks', JSON.stringify(notUpdatedTasks.concat(updatedTasks)));
        }

        function getTasks(userId) {
            var allTasks = JSON.parse(localStorage.getItem('tasks')) || [];

            var user = userService.getUsers().filter(function (user) {
                return user.id === Number(userId)
            })[0] || {};

            return allTasks.filter(function (task) {
                return task.email === user.email;
            });
        }

        return {
            users: users,
            updateTasks: updateTasks,
            getTasks: getTasks
        }
    });