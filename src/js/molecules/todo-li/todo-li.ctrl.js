angular.module('todoListApp').component('todoLi', {
    templateUrl: 'js/molecules/todo-li/todo-li.tpl.html',
    bindings: {
        todo: '<'
    },
    controller: ['$scope', '$uibModal', '$rootScope', 'TodoFct', function($scope, $uibModal, $rootScope, TodoFct) {
        $scope.expanded = false;
        
        this.$onChanges = function(e) {
            $scope.todo = this.todo;
        }

        $scope.toggleExpandCard = () => {
            $scope.expanded = !$scope.expanded;
        }

        $scope.completeTodo = () => {
            if ($scope.loading) {
                return;
            }

            $scope.loading = true;

            const modalInstance = $uibModal.open({
                templateUrl: 'js/organisms/completeTodoModal/completeTodoModal.tpl.html',
                controller: 'CompleteTodoModalCtrl',
                size: 'sm',
                resolve: {
                    complete: () => {
                        return !$scope.todo.completed;
                    }
                }
            });

            modalInstance.result.then(
                () => {
                    $scope.todo.completed = $scope.todo.completed ? undefined : new Date();

                    TodoFct.updateTodo($scope.todo).then(
                        () => {
                            $scope.loading = false;
                        },
                        () => {
                            if ($scope.todo.completed) {
                                $scope.todo.completed = undefined;
                            }
                            $scope.loading = false;
                        }
                    );
                },
                () => {
                    $scope.loading = false;
                }
            );
        }

        $scope.deleteTodo = () => {
            if ($scope.loading) {
                return;
            }

            $scope.loading = true;

            const modalInstance = $uibModal.open({
                templateUrl: 'js/organisms/deleteTodoModal/deleteTodoModal.tpl.html',
                controller: 'DeleteTodoModalCtrl',
                size: 'sm'
            });

            modalInstance.result.then(
                () => {
                    TodoFct.deleteTodo($scope.todo).then(
                        () => {
                            $rootScope.getList();
                            $scope.loading = false;
                        },
                        () => {
                            $scope.loading = false;
                        }
                    );
                },
                () => {
                    $scope.loading = false;
                }
            );
        }

        $scope.editTodo = () => {
            if ($scope.loading) {
                return;
            }

            $scope.loading = true;

            const modalInstance = $uibModal.open({
                templateUrl: 'js/organisms/addTodoModal/addTodoModal.tpl.html',
                controller: 'AddTodoModalCtrl',
                size: 'md',
                resolve: {
                    todo: () => {
                        return $scope.todo;
                    }
                }
            });

            modalInstance.result.then(
                () => {
                    $rootScope.getList();
                    $scope.loading = false;
                }, 
                () => {
                    $scope.loading = false;
                }
            );
            
        }
    }]
});
