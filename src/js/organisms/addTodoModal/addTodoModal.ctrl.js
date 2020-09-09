angular.module('todoListApp').controller('AddTodoModalCtrl', [
    '$scope', '$uibModalInstance', 'TodoFct', 'todo',
    function($scope, $uibModalInstance, TodoFct, todo) {
        if (todo) {
            $scope.todo = todo;
        } else {
            $scope.todo = {
                title: '',
                description: '',
                expiration: null
            }
        }

        $scope.ok = () => {
            if ($scope.loading) {
                return;
            }


            if (!$scope.todo.title) {
                $scope.errorTitle = true;
                return;
            }

            $scope.loading = true;
            if ($scope.todo._id) {
                TodoFct.updateTodo($scope.todo).then(
                    () => {
                        $scope.loading = false;
                        $uibModalInstance.close();
                    },
                    () => {
                        $scope.loading = false;
                        $uibModalInstance.dismiss('error');
                    }
                );
            } else {
                TodoFct.postTodo($scope.todo).then(
                    () => {
                        $scope.loading = false;
                        $uibModalInstance.close();
                    },
                    () => {
                        $scope.loading = false;
                        $uibModalInstance.dismiss('error');
                    }
                );
            }
        }

        $scope.cancel = () => {
            $uibModalInstance.dismiss('cancel');
        }
    }
]);
