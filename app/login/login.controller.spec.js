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

    afterEach(function () {
        element.remove();
        $rootScope.$destroy();
    });

    it('should register user and log in after registration', function () {
        spyOn(userService, 'registerUser').and.returnValue($q.resolve());
        spyOn(userService, 'loginUser').and.returnValue($q.resolve());

        expect(userService.registerUser).not.toHaveBeenCalled();
        $('.register-form .email-field input').val(mockedNewRegisteredUser.email).trigger('change');
        $('.register-form .password-field input').val(mockedNewRegisteredUser.password).trigger('change');
        $('.register-form button').trigger('click');

        expect(userService.registerUser).toHaveBeenCalled();

        $('.login-form .email-field input').val(mockedNewRegisteredUser.email).trigger('change');
        $('.login-form .password-field input').val(mockedNewRegisteredUser.password).trigger('change');
        $('.login-form button').trigger('click');

        expect(userService.loginUser).toHaveBeenCalled();
    });

    it('should not register user if user email already exists', function () {
        spyOn(userService, 'registerUser').and.returnValue($q.reject());

        $('.register-form .email-field input').val(mockedUsers[0].email).trigger('change');
        $('.register-form .password-field input').val(mockedUsers[0].password).trigger('change');
        $('.register-form button').trigger('click');

        expect(userService.registerUser).toHaveBeenCalledWith(mockedUsers[0].email, mockedUsers[0].password);
    });

    it('should login user', function () {
        spyOn(userService, 'loginUser').and.returnValue($q.resolve());

        expect(userService.getCurrentUser()).toBe(null);
        $('.login-form .email-field input').val(mockedUsers[0].email).trigger('change');
        $('.login-form .password-field input').val(mockedUsers[0].password).trigger('change');
        $('.login-form button').trigger('click');

        expect(userService.loginUser).toHaveBeenCalledWith(mockedUsers[0].email, mockedUsers[0].email);
    });
});
