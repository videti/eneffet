angular.module('starter.controllers', []);

launcher.controller('DashboardCtrl', function($scope,$http,$ionicModal, $localStorage) {
    angular.module('App', ['ngResource']);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.$apply(function(){
                $scope.position = position;
            });
        });
    }


    $scope.city ="<required>";
    $scope.field_selected = "<required>";
    $scope.country_selected = "<required>";
    $scope.contract_selected = "";
    $scope.city_selected = "";
    $scope.date = "<required>";
    $scope.distance =0;

    $scope.AddToFavorite= function(favorite_annonce){

        var value = [favorite_annonce]
        localStorage.setItem("favorite", JSON.stringify(value));
        console.log($localStorage);
    }



   $scope.Update= function(){
        $http({
            url: "https://indeed-indeed.p.mashape.com/apisearch?publisher=3105410935549133&callback=<required>&chnl=<required>&co="+$scope.country_selected+"&filter=<required>&format=json&fromage=<required>&highlight=<required>&jt="+$scope.contract_selected+"&l="+$scope.city_selected+"&latlong=1&limit=1000000&q=java&radius=25&sort=date&st=<required>&start=0&useragent=<required>&userip=<required>&v=2",
            method: 'GET',
            headers: {"Accept": "application/json", "X-Mashape-Key":"HJQm5Ayye8mshX6ZsA7MFHsX0elap1xxJV1jsn1m03hnhZ425J"}
        }).success(function(response) {
            //$scope.announces = response.results;

            $scope.anounces = [];
            $scope.getDistanceFromLatLonInKm= function(anounce,lat2,lon2){
                var lat1 = anounce.latitude;
                var lon1 = anounce.longitude;
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2-lat1);  // deg2rad below
                var dLon = deg2rad(lon2-lon1);
                var a =
                        Math.sin(dLat/2) * Math.sin(dLat/2) +
                        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                        Math.sin(dLon/2) * Math.sin(dLon/2)
                    ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c; // Distance in km

                //$scope.distance = d;
                anounce.distance = Math.round(d);
                $scope.counter ++;
                console.log("counter = " + $scope.counter + " sur " + allAnounces.length + " d = " + d);
                if($scope.counter == allAnounces.length) {
                    $scope.announces = allAnounces;
                    console.log("END ", $scope.anounces);
                }
                //console.log(d);
            }

            $scope.counter = 0;
            var allAnounces = response.results;

            for(var obj in allAnounces)
            {
                $scope.getDistanceFromLatLonInKm(allAnounces[obj], $scope.position.coords.latitude, $scope.position.coords.longitude);
            }
/*
            angular.forEach($scope.announces, function(announce, key) {
                $scope.announcesList = [];
                $scope.latitude = announce.latitude;
                $scope.longitude = announce.longitude;
                $scope.announcesList.push({ma_longitude: $scope.position.coords.longitude, ma_latitude:  $scope.position.coords.latitude, latitude_job:$scope.latitude,longitude_job: $scope.longitude});
                console.log($scope.announcesList);
                angular.forEach($scope.announcesList, function(announce, key) {
                     var announce_distance = $scope.getDistanceFromLatLonInKm(announce,announce.ma_latitude,announce.ma_longitude);
                    $scope.announce_distance = announce_distance;
                    console.log($scope.announce_distance);
                });



            });
*/


            function deg2rad(deg) {
                return deg * (Math.PI/180)
            }
        });
}
    $scope.Update();

    $scope.search= function(){
        $ionicModal.fromTemplateUrl('tpl/modals/search.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });

        $scope.contractTypes = [];
        $scope.contractTypes.push({value: "fulltime", name: "CDI"});
        $scope.contractTypes.push({value: "temporary", name: "CDD"});
        $scope.contractTypes.push({value: "parttime", name: "Temps partiel"});
        $scope.contractTypes.push({value: "internship", name: "Stage"});


        $scope.countries = [];
        $scope.countries.push({value: "US", name: "USA"});
        $scope.countries.push({value: "FR", name: "France"});
        $scope.countries.push({value: "ES", name: "Spain"});
        $scope.countries.push({value: "DE", name: "Germany"});
        $scope.countries.push({value: "UK", name: "UK"});
        $scope.countries.push({value: "AU", name: "Australia"});
        $scope.countries.push({value: "AT", name: "Austria"});
        $scope.countries.push({value: "CA", name: "Canada"});
        $scope.countries.push({value: "BE", name: "Belgium"});
        $scope.countries.push({value: "CH", name: "Switzerland"});
        $scope.countries.push({value: "MX", name: "Mexico"});
        $scope.countries.push({value: "AR", name: "Argentina"});
        $scope.countries.push({value: "BR", name: "Brazil"});
        $scope.countries.push({value: "PT", name: "Portugal"});
        $scope.countries.push({value: "IT", name: "Italia"});


        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
        $scope.UpdateSearch= function(country_selected,city_selected,field_selected){
            $scope.country_selected = country_selected;
            $scope.field_selected = field_selected;
            $scope.city_selected = city_selected;
            $scope.Update();
           $scope.closeModal();
        }
    }
})
