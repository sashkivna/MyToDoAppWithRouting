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
                        $scope.tasks.push({task: $scope.title, cteatedAt: datetime, /*user: currentUser,*/ checked: false});
                        $scope.title = "";
                    }
                };

                $scope.delete = function ($index) {
                    $scope.tasks.splice($index, 1);
                };

                $scope.showDetails = function ($index) {
                    if(document.getElementById("che"+$index).checked === true) {
                        $scope.tasks[$index].checked = !$scope.tasks[$index].checked;
                    }
                    return $index;
                }
            }
        };
    });
