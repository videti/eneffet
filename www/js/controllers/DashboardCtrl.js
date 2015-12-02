angular.module('starter.controllers', []);

launcher.controller('DashboardCtrl', function($scope,$http) {
    angular.module('App', ['ngResource']);

   $scope.AppCtrl= function(){
        $http({
            url: "https://indeed-indeed.p.mashape.com/apisearch?publisher=3105410935549133&callback=<required>&chnl=<required>&co=<required>&filter=<required>&format=json&fromage=<required>&highlight=<required>&jt=<required>&l=TX&latlong=<required>&limit=1000000&q=java&radius=25&sort=date&st=<required>&start=0&useragent=<required>&userip=<required>&v=2",
            method: 'GET',
            headers: {"Accept": "application/json", "X-Mashape-Key":"HJQm5Ayye8mshX6ZsA7MFHsX0elap1xxJV1jsn1m03hnhZ425J"}
        }).success(function(response) {
            $scope.announces=response.results;
            console.log($scope.announces);
        });
}
    $scope.AppCtrl();
})
