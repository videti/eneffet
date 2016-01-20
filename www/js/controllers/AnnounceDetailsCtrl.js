launcher.controller('AnnounceDetailsCtrl', function($stateParams,$scope,$http, $localStorage) {

$scope.announceDetailsId = $stateParams.announceDetailsId;

    $scope.AppCtrl= function(){
        $http({
            url: "https://indeed-indeed.p.mashape.com/apigetjobs?publisher=3105410935549133&format=json&jobkeys="+$scope.announceDetailsId+"&v=2",
            method: 'GET',
            headers: {"Accept": "application/json", "X-Mashape-Key":"HJQm5Ayye8mshX6ZsA7MFHsX0elap1xxJV1jsn1m03hnhZ425J"}
        }).success(function(response) {
            $scope.announces=response.results;
            console.log($scope.announces);
        });
    }
   $scope.favorite = $localStorage.favorites;
    $scope.AppCtrl();
})

