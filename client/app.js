angular.module('heroku', ['ngRoute', 'ngResource', 'heroku.controllers'])
.config(['$routeProvider', function($routeProvider){
$routeProvider
.when('/', {
    templateUrl: 'views/home.html', 
    controller: 'HomeController'
})

.otherwise({
    redirectTo: '/'
});
}]);