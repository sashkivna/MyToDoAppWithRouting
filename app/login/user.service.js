angular.module('app.module')
    .factory('userService', function ($q, $timeout) {
        var users = JSON.parse(localStorage.getItem('users')) || [],
            currentUser = JSON.parse(localStorage.getItem('currentUser'));

        function getCurrentUser() {
            return currentUser;
        }

        function registerUser(email, password) {
            debugger;
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
                            password: password,
                            id: Math.floor(Math.random() * 100) + 1
                        });

                        localStorage.setItem('users', JSON.stringify(users));

                        resolve();
                    }

                }, 1000);
            });

        }

        function loginUser(email, password) {
            return $q(function (resolve, reject) {
                $timeout(function () {
                    currentUser = users.find(function (user) {
                        return user.email === email;
                    });

                    if (currentUser && password === currentUser.password) {
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));

                        resolve();

                        console.log("current user from service " + currentUser.email);
                    } else {
                        console.log("Pls enter correct data for loggining");

                        reject();
                    }

                }, 1000);
            });
        }

        function getUsers() {
            return JSON.parse(localStorage.getItem('users')) || [];
        }

        return {
            users: users,
            getCurrentUser: getCurrentUser,
            registerUser: registerUser,
            loginUser: loginUser,
            getUsers: getUsers
        }
    });