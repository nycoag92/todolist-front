angular.module('todoListApp').controller('DeleteTodoModalCtrl', [
    '$scope', '$uibModalInstance',
    function($scope, $uibModalInstance) {
        $scope.message = '¿Desea eliminar la tarea?';

        $scope.ok = () => {
            $uibModalInstance.close();
        }

        $scope.cancel = () => {
            $uibModalInstance.dismiss('cancel');
        }
    }
]);
