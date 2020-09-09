angular.module('todoListApp').controller('TodoCtrl', [
    '$scope', '$rootScope', '$uibModal', 'TodoFct', 
    function($scope, $rootScope, $uibModal, TodoFct) {
        $rootScope.getList = () => {
            TodoFct.getTodoList().then(todoList => {
                $scope.today = [];
                $scope.list = [];

                angular.forEach(todoList, todo => {
                    if (todo.expiration && isToday(todo.expiration)) {
                        $scope.today.push(todo);
                        return;
                    }

                    $scope.list.push(todo);
                });
            });
        }

        $rootScope.getList();

        $scope.addTodo = () => {
            const modalInstance = $uibModal.open({
                templateUrl: 'js/organisms/addTodoModal/addTodoModal.tpl.html',
                controller: 'AddTodoModalCtrl',
                size: 'md',
                resolve: {
                    todo: () => {
                        return null;
                    }
                }
            });

            modalInstance.result.then(() => {
                $rootScope.getList();
            });
        }

        function isToday(date) {
            let now = new Date();
            date = new Date(date);

            return  date.getDate() == now.getDate() &&
                    date.getMonth() == now.getMonth() &&
                    date.getFullYear() == now.getFullYear();
        }
    }
]);