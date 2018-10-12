angular.module('app.module').factory('sessionService', function (userService) {
    return {
        isValid: function () {
            return userService.getCurrentUser();
        }
    }
});
