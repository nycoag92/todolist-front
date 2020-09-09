angular.module('todoListApp').config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/todo-list', {
                templateUrl: 'js/pages/todo-list/todo-list.tpl.html',
                controller: 'TodoCtrl',
            })
            .otherwise({redirectTo: '/todo-list'});
    }
]);
