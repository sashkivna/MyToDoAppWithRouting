angular.module('app.module')
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event) {
            if ($rootScope.currentUser) {
                $state.go('main');
                //Maximum call stack size exceeded in this if-else, as well event.preventDefault(); didnt help to solve this issue
            } else {
                $state.go('login');
            }
        });
    });