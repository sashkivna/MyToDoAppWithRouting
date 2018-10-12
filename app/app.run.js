angular.module('app.module')
    .run(function ($rootScope, $state, sessionService) {
        $rootScope.$on('$viewContentLoading', function () {
            if (sessionService.isValid()) {
                $state.go('main');
            } else {
                $state.go('login');
            }
        });
    });