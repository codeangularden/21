app.config(function ($routeProvider) {
    $routeProvider
     .when('/Add', {
         templateUrl: '/Views/Add.html',
         controller: 'studCtrl'

     })
    $routeProvider
     .when('/List', {
         templateUrl: '/Views/List.html',
         controller: 'listCtrl'
     })

     .when('/Add/:sid', {
         templateUrl: '/Views/Add.html',
         controller: 'studCtrl'
     })
     .otherwise({
         redirectTo: '/Add'
     });
});