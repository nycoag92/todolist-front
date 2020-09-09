angular.module('todoListApp').component('cardTodo', {
    templateUrl: 'js/organisms/card-todo/card-todo.tpl.html',
    bindings: {
        title: '@',
        todoList: '<'
    },
    controller: ['$scope', function($scope) {
        this.$onChanges = function(e) {
            $scope.title = this.title;
            $scope.todoList = this.todoList;
        }
    }]
});
