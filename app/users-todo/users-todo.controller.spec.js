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
        userService.currentUser = mockedCurrentUser;
        spyOn(userService, 'getCurrentUser').and.returnValue(mockedCurrentUser);
        //spyOn($rootScope, 'logout').and.returnValue(mockedCurrentUser);
        spyOn($rootScope, 'logout').and.callThrough();
        spyOn($state, 'go');


        element = $compile($templateCache.get('users-todo/users-todo.template.html'))($rootScope);

        $('body').append(element);

        $rootScope.$apply();
    }));

    it('should render all users', function () {
        expect(userService.getUsers).toHaveBeenCalled();

        expect(element.find('li').length).toBe(mockedUsers.length);
    });

    it('should logout user', inject(function ($state) {
        //expect(userService.getCurrentUser).toHaveBeenCalled();
        // mock current user name
        expect(userService.currentUser).toBe(mockedCurrentUser);
        // find button logout and click
        $('button').trigger('click');
        //$rootScope.logout();
        expect($rootScope.logout).toHaveBeenCalled();
        // check if current user name is null
        expect(userService.currentUser).toBe(null);
        // check if state go have been called with 'login'
        expect($state.go).toHaveBeenCalledWith('login');

    }));
});
