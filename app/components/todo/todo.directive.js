angular.module('todo.module')
    .directive('todo', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/todo/todo.template.html',

            scope: {
                tasks: '='
            },

            link: function ($scope) {

                $scope.tasks = [];
                $scope.add = function (title) {
                        if(title === undefined || title.length === 0) {
                            alert("You tried to add empty task, pls type some description");
                        }
                        else {
                            $scope.tasks.push({task: $scope.title});
                            $scope.title = "";
                        }
                };

                $scope.delete = function () {
                    $scope.tasks.splice(this.$index, 1);
                }
            }
        };
    });
