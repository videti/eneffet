launcher.controller('ProfileCtrl', function($scope, $localStorage) {
    $scope.update_profile = {};
    $scope.update_profile.name = $localStorage.informations.name;
    $scope.update_profile.first_name = $localStorage.informations.first_name;
    $scope.update_profile.email = $localStorage.informations.email;
    $scope.update_profile.address = $localStorage.informations.address;
    $scope.update_profile.number = $localStorage.informations.number;
    $scope.updateInformations= function(update_profile){
        $localStorage.informations = {};
        $localStorage.informations.name = update_profile.name;
        $localStorage.informations.first_name = update_profile.first_name;
        $localStorage.informations.email = update_profile.email;
        $localStorage.informations.address = update_profile.address;
        $localStorage.informations.number = update_profile.number;
        console.log($localStorage);
    }
    console.log($localStorage);
})
