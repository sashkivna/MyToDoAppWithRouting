angular.module('todo.module')
    .directive('todo', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/todo/todo.template.html',

            scope: {
                tasks: '=',
                onChange: '&',
                isDisabled: '<?'
            },

            controller: function ($scope) {
                $scope.add = function (title) {
                    if (!title) {
                        alert("You tried to add empty task, pls type some description");
                    } else {
                        $scope.tasks.push({
                            title: $scope.title,
                            date: new Date(),
                            isChecked: false
                        });

                        $scope.title = "";
                    }

                    $scope.onChange();
                };

                $scope.delete = function ($index) {
                    $scope.tasks.splice($index, 1);

                    $scope.onChange();
                };
            }
        };
    });
