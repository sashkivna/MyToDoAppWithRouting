angular.module('app.module')
    .config(function ($stateProvider) {
        let mainState = {
            name: 'main',
            url: '/main',
            template: '<label ng-controller="mainController">Add your todo here:</label>\n' +
                '<todo tasks="tasks" on-change="onTasksChange()"></todo>',
            controller: 'mainController'
        };

        let usersState = {
            name: 'users',
            url: '/users',
            templateUrl: 'users-todo/users-todo.template.html',
            controller: 'usersCntr'
        };

        let loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'login/register-template.html',
            controller: 'loginController'
        };

        $stateProvider.state(mainState);
        $stateProvider.state(loginState);
        $stateProvider.state(usersState);
    });