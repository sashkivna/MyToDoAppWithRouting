angular.module('app.module')
    .config(function ($stateProvider, $urlRouterProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);

        let loginState = {
            name: 'login',
        };


        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/register-template.html',
                controller: 'loginController'
            })
            .state('users', {
                abstract: true,
                url: '/users',
                template: '<ui-view></ui-view>',
                controller: 'usersCntr'

            })
            .state('users.list', {
                url: '/list',
                templateUrl: 'users-todo/users-todo.template.html'
            })
            .state('users.detail', {
                url: '/:id',
                template: '<label>Add your todo here:</label>\n' +
                    '<todo tasks="tasks" on-change="onTasksChange()" is-disabled="isDisabled"></todo>',
                controller: 'mainController'
            });

    });