describe('usersCntr', function () {
    var element,
        $rootScope,
        mockedUsers,
        userService,
        mockedCurrentUser,
        usersCntr;

    beforeEach(module('app.module', 'foo'));

    beforeEach(inject(function ($compile, $controller, _$rootScope_, $state, $templateCache, _userService_) {
        $rootScope = _$rootScope_;
        userService = _userService_;

        mockedUsers = [
            {
                email: 'petya'
            },
            {
                email: 'anna'
            },
            {
                email: 'goga'
            },
        ];

        mockedCurrentUser = {
            email: 'Alice'
        };

        usersCntr = $controller('usersCntr', {
            $scope: $rootScope,
            userService: userService,
            $state: $state
        });

        spyOn(userService, 'getUsers').and.returnValue(mockedUsers);

        element = $compile($templateCache.get('users-todo/users-todo.template.html'))($rootScope);

        $('body').append(element);

        $rootScope.$apply();
    }));

    afterEach(function () {
        element.remove();
        $rootScope.$destroy();
    });

    it('should show registered users', function () {
        expect(userService.getUsers).toHaveBeenCalled();

        expect(element.find('li').length).toBe(mockedUsers.length);
    });

    it('should logout', inject(function ($state) {
        spyOn($state, 'go');
        userService.currentUser = mockedCurrentUser;

        expect(userService.currentUser).toBe(mockedCurrentUser);

        $('button').trigger('click');

        expect(userService.currentUser).toBe(null);
        expect($state.go).toHaveBeenCalledWith('login');
    }));
});
