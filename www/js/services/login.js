/**
 * Created by hafid on 04/11/15.
 */
angular.module('starter.services', [])
.service('LoginService', function($q) {
    return {
        loginUser: function(name, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'hafid' && password == 'secret') {
                deferred.resolve('Bienvenu ' + name + '!');
            } else {
                deferred.reject('Mauvais mot de passe');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})