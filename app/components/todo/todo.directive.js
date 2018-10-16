angular.module('todo.module')
    .directive('todo', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/todo/todo.template.html',

            scope: {
                tasks: '='
            },

            controller: function () {
            },

            link: function ($scope) {
                $scope.add = function (title) {
                    if (title === undefined || title.length === 0) {
                        alert("You tried to add empty task, pls type some description");
                    } else {
                        let currentdate = new Date();
                        let datetime = currentdate.getDate() + "/"
                            + (currentdate.getMonth() + 1) + "/"
                            + currentdate.getFullYear() + " @ "
                            + currentdate.getHours() + ":"
                            + currentdate.getMinutes() + ":"
                            + currentdate.getSeconds();
                        $scope.tasks.push({task: $scope.title, cteated: datetime, done: false});
                        console.log($scope.tasks);
                        $scope.title = "";
                    }
                };

                $scope.delete = function ($index) {
                    $scope.tasks.splice($index, 1);
                };
            }
        };
    });
