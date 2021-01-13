var myApp=angular.module("myApplication",[]);
myApp.controller('theController',function($scope,$window,$http,$location){
  $scope.title='';
  
  $scope.description='';

  $scope.message='';
  $scope.responseCode='01';
  $scope.loading='01';



  $scope.someUrl ="https://gloapi.gitkraken.com/v1/glo/boards/5f3415a6ab0eea0011ab9434/cards"
  
  $scope.login=function(){
    var name=$scope.title;
    var description=$scope.description;
    var column_id="5f5b067d24316d0011ee2633";
    var config = {
      headers: {
        'Authorization': 'Bearer 5f54afb34430baaf232a3ca12ab2b2c6aa7bb6ec'
      }
    };
    var data={
      "name": name,
      "description": {
        "text": description
      },
      "column_id":  column_id,
      "position":  0
      
    }

    $scope.loading='00';


  $http.post($scope.someUrl, data,config).then(function(){
   
     $scope.responseCode='00'
     $scope.loading='01';
     console.log("success");
     delay(function(){
      $window.close();  
    }, 5000 ); // end delay
     
  },function(){
    $scope.message="Registration  Failed";
    console.log("failed");
  });

 
}


var delay = ( function() {
  var timer = 0;
  return function(callback, ms) {
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
  };
})();

});
