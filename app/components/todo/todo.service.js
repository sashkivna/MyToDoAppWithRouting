angular.module('app.module')
    .factory('todoService', function (userService) {
        var users = JSON.parse(localStorage.getItem('users')) || [],
            currentUser = null;

        function updateTasks(tasks) {
            cauurentUser = userService.getCurrentUser();

            if (tasks.length !== 0) {
                for (var i = 0; i < tasks.length; i++) {
                    if (!tasks[i].email) {
                        tasks[i].email = cauurentUser.email;
                    }
                    if (document.getElementById("che" + i)!== null && document.getElementById("che" + i).checked ) {
                        tasks[i].status.task.done = true;
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                    }
                }
                localStorage.setItem('tasks', JSON.stringify(tasks));

            }
        }

        return {
            users: users,
            updateTasks: updateTasks
        }
    });