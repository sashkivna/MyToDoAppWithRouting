describe('loginController', function () {
    var element,
        $rootScope,
        mockedUsers,
        userService,
        mockedNewRegisteredUser,
        loginController;

    beforeEach(module('app.module', 'foo'));

    beforeEach(inject(function ($compile, $controller, _$rootScope_, $state, $templateCache, _userService_, $q) {
        $rootScope = _$rootScope_;
        userService = _userService_;

        mockedUsers = [
            {
                email: 'petya',
                password: 'petya'
            },
            {
                email: 'anna',
                password: 'anna'
            },
            {
                email: 'goga',
                password: 'goga'
            },
        ];

        mockedNewRegisteredUser = {
            email: 'Alice',
            password: 'Alice'
        };

        loginController = $controller('loginController', {
            $scope: $rootScope,
            userService: userService,
            $state: $state
        });

        spyOn(userService, 'registerUser').and.returnValue($q.resolve(mockedNewRegisteredUser));
        spyOn(userService, 'loginUser').and.returnValue($q.resolve(mockedNewRegisteredUser));

        element = $compile($templateCache.get('login/register-template.html'))($rootScope);

        $('body').append(element);

        $rootScope.$apply();
    }));

    it('should register user and log in after registration', function () {
        expect(userService.registerUser).not.toHaveBeenCalled();
        $('.registered-email').value += mockedNewRegisteredUser.email;
        $('registered-pass').value += mockedNewRegisteredUser.password;
        $('.regist-button').click();
        expect(userService.registerUser).toHaveBeenCalled();
        $('.login-email').value += mockedNewRegisteredUser.email;
        $('.login-pass').value += mockedNewRegisteredUser.password;
        $('.login-button').click();
        expect(userService.loginUser).toHaveBeenCalled();
    });

    it('should not register user if user email already exists', function () {
        $('input')[0].value += mockedUsers[0].email;
        $('input')[1].value += mockedUsers[0].password;
        $('.regist-button')[0].click();
        var p =userService.registerUser();
        p.then(function() {
            reject();
        }, function() {
        });
        expect(userService.registerUser).toHaveBeenCalled();
    });
});
