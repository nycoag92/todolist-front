angular.module('todoListApp').factory('TodoFct', ['$q', '$http', 'API_ENDPOINT', 
    function($q, $http, API_ENDPOINT) {
        return {
            getTodoList: () => {
                var deferred = $q.defer();

                $http.get([
                    API_ENDPOINT.URL,
                    'todos'
                ].join('/')).then(
                    function(res) {
                        if (res.status === 200) {
                            deferred.resolve(res.data);
                        } else {
                            deferred.reject(res);
                        }
                    }, function(res) {
                        deferred.reject(res);
                    }
                );
                
                return deferred.promise;
            },
            updateTodo: todo => {
                var deferred = $q.defer();

                $http.put([
                    API_ENDPOINT.URL,
                    'todos',
                    todo._id
                ].join('/'), todo).then(
                    function(res) {
                        if (res.status === 200) {
                            deferred.resolve(res.data);
                        } else {
                            deferred.reject(res);
                        }
                    }, function(res) {
                        deferred.reject(res);
                    }
                );
                
                return deferred.promise;
            },
            deleteTodo: todo => {
                var deferred = $q.defer();

                $http.delete([
                    API_ENDPOINT.URL,
                    'todos',
                    todo._id
                ].join('/'), todo).then(
                    function(res) {
                        if (res.status === 204) {
                            deferred.resolve(res.data);
                        } else {
                            deferred.reject(res);
                        }
                    }, function(res) {
                        deferred.reject(res);
                    }
                );
                
                return deferred.promise;
            },
            postTodo: todo => {
                var deferred = $q.defer();

                $http.post([
                    API_ENDPOINT.URL,
                    'todos'
                ].join('/'), todo).then(
                    function(res) {
                        if (res.status === 201) {
                            deferred.resolve(res.data);
                        } else {
                            deferred.reject(res);
                        }
                    }, function(res) {
                        deferred.reject(res);
                    }
                );
                
                return deferred.promise;
            }
        }
    }
]);
