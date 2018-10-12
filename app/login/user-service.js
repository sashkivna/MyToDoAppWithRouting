angular.module('app.module')
    .factory('userService', function ($q, $timeout) {
        var users = [],
            currentUser = null;

        function getCurrentUser() {
            return currentUser;
        }

        function registerUser(email, password) {
            return $q(function (resolve, reject) {
                $timeout(function () {
                    var isUserEmailExist = users.some(function (user) {
                        return user.email === email;
                    });

                    if (isUserEmailExist) {
                        reject();
                    } else {
                        users.push({
                            email: email,
                            password: password
                        });

                        resolve();
                    }

                }, 1000);
            });

        }

        function loginUser(email, password) {
            return $q(function (resolve, reject) {
                $timeout(function () {
                    var isCredentialsValid = users.some(function (user) {
                        return user.email === email;
                    });

                    if (isCredentialsValid) {
                        currentUser = {
                            email: email,
                            password: password
                        };


                        resolve();

                        console.log("current user from service " + currentUser);
                    } else {
                        console.log("Pls enter correct data for loggining");

                        reject();
                    }

                }, 1000);
            });
        }

        return {
            users: users,
            getCurrentUser: getCurrentUser,
            registerUser: registerUser,
            loginUser: loginUser
        }
    });