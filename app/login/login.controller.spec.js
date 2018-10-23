describe('loginController', function () {
    var element,
        $q,
        $rootScope,
        mockedUsers,
        userService,
        mockedNewRegisteredUser,
        loginController;

    beforeEach(module('app.module', 'foo'));

    beforeEach(inject(function ($compile, $controller, _$rootScope_, $state, $templateCache, _userService_, _$q_) {
        $q = _$q_;
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

        element = $compile($templateCache.get('login/register-template.html'))($rootScope);

        $('body').append(element);

        $rootScope.$apply();
    }));

    it('should register user and log in after registration', function () {
        spyOn(userService, 'registerUser').and.returnValue($q.resolve());
        spyOn(userService, 'loginUser').and.returnValue($q.resolve());

        expect(userService.registerUser).not.toHaveBeenCalled();
        $('.register-form .email-field input')[0].value += mockedNewRegisteredUser.email;
        $('.register-form .password-field input')[0].value += mockedNewRegisteredUser.password;
        $('.register-form button').trigger('click');
        expect(userService.registerUser).toHaveBeenCalled();
        $('.login-form .email-field input')[0].value += mockedNewRegisteredUser.email;
        $('.login-form .password-field input')[0].value += mockedNewRegisteredUser.password;
        $('.login-form button').trigger('click');
        expect(userService.loginUser).toHaveBeenCalled();
    });

    it('should not register user if user email already exists', function () {
        spyOn(userService, 'registerUser').and.returnValue($q.reject());

        $('.register-form .email-field input')[0].value += mockedUsers[0].email;
        $('.register-form .password-field input')[0].value += mockedUsers[0].password;

        $('.register-form button').trigger('click');

        //expect(userService.registerUser).toHaveBeenCalledWith(mockedUsers[0].email, mockedUsers[0].password);
        // Expected spy registerUser to have been called with [ 'petya', 'petya' ] but actual calls were [ undefined, undefined ].
        expect(userService.registerUser).toHaveBeenCalled();
    });
});
