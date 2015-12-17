var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives','UserInfoModule','MyCSSModule'
]);

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).when('/form',{
        templateUrl:'tpls/form.html',
        controller:'UserInfoCtrl'
    }).when('/testcss',{
        templateUrl:'tpls/testCss.html',
        controller:'CSSCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
