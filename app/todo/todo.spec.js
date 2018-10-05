/*
describe('c-dropdown directive', function () {
    var element,
        $rootScope;

    beforeEach(module('c-dropdown.module', 'foo'));

    beforeEach(inject(function ($compile, _$rootScope_) {
        $rootScope = _$rootScope_;

        $rootScope.cars = [
            {
                v: 'm',
                n: 'BMW'
            },
            {
                v: 'm',
                n: 'Ford'
            },
            {
                v: 'm',
                n: 'Lanborgini'
            }
        ];

        $rootScope.selectedCar = $rootScope.cars[0].n;
        element = $compile('<c-dropdown ng-model="selectedCar" options="cars"></c-dropdown>')($rootScope);
        $('body').append(element);
        $rootScope.$apply();
    }));

    function toggleDropdown() {
        element.find('.btn-info').click();
    }

    afterEach(function () {
        element.remove();
        $rootScope.$destroy();
    });

    it('should open and close list', function () {
        debugger;
        toggleDropdown();

        expect(element.find('li').length).toBe($rootScope.cars.length);

        toggleDropdown();

        expect(element.find('ul').length).toBe(0);
    });

    it('should render drop fields', function () {
        toggleDropdown();
        expect(element.find('li').length).toBe($rootScope.cars.length);
        expect(element.find('a')[0].text).toBe($rootScope.selectedCar);
    });

    it('should close dropdown after clicking out of dropdown', function () {
        toggleDropdown();
        expect(element.find('ul').length).toBe(1);
        $('body').click();
        expect(element.find('ul').length).toBe(0);
    });
});*/
