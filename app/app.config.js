angular.module('app.module')
    .config(function ($stateProvider) {
        let mainState = {
            name: 'main',
            url: '/main',
            template: '<label>Add your todo here:</label>\n' +
                '<todo tasks="tasks"></todo>'
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