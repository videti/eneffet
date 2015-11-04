
launcher.controller('LoginCtrl', function($scope,$state,LoginService,$ionicPopup) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dashboard');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Mot de passe incorrect!',
                template: 'Vérifiez que vous utilisez bien le mot de passe de votre compte FEJOBS!'
            });
        });
    }
})
