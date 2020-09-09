angular.module('todoListApp', [
    'ngAnimate',
	'ngRoute',
    'ngTouch',
    'ui.bootstrap'
]).config(['$qProvider', function($qProvider)  {
    $qProvider.errorOnUnhandledRejections(false);
}]);
