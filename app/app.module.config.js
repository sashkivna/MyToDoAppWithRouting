angular.module('app.module')
    .config(function ($stateProvider) {
        let mainState = {
            name: 'main',
            url: '/main',
            template: '<label>Add your todo here:</label>\n' +
                '<todo tasks="tasks"></todo>',
            controller: ''
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
        };

        $stateProvider.state(mainState);
        $stateProvider.state(loginState);
        $stateProvider.state(usersState);
    })
    .run(function ($rootScope, $location) {
        $rootScope.$on('$stateChangeStart',
            function (evt, next) {
                if (!$rootScope.currentUser) {
                    $location.path('/login');
                } else {
                    $location.path('/main');
                }

            });
    });