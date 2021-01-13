var myApp=angular.module("myApplication",[]);
myApp.controller('theController',function($scope,$window,$http,$location){
  

  $scope.OpenPopupWindow = function () {
    
    $window.open("registration.html", "alert", "width=800,height=600,left=200,top=50");
   // $dialog.dialog({}).open('./registrationPopUp.html');  

}



});
