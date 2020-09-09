angular.module('todoListApp').controller('CompleteTodoModalCtrl', [
    '$scope', '$uibModalInstance', 'complete',
    function($scope, $uibModalInstance, complete) {
        if (complete) {
            $scope.message = '¿Desea marcar la tarea como completa?';
        } else {
            $scope.message = '¿Desea desmarcar la tarea como completa?';
        }

        $scope.ok = () => {
            $uibModalInstance.close();
        }

        $scope.cancel = () => {
            $uibModalInstance.dismiss('cancel');
        }
    }
]);
