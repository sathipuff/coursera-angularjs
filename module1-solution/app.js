(function (){
  'use strict';
   angular.module("LunchCheck",[])
   .controller('LunchCheckController',LunchCheckController);

   LunchCheckController.$inject = ['$scope', '$filter'];
   function LunchCheckController($scope, $filter) {
     $scope.txtBoxMsg       = "";
     $scope.lunchList       = "";
     $scope.limit           = 3;
     $scope.delimiter       = ",";
     $scope.bordercolour    = "grey";
     $scope.fontcolour      = "red";

     $scope.checkLunchLimit = function(){
      var lunchLength =  getLunchLengthByRegex($scope.lunchList,$scope.delimiter);
      console.log(lunchLength);
      updateTxtMsg(lunchLength,$scope.limit);
    };

    function getLunchLengthByRegex(list){
      var pattern = /([0-9a-zA-Z\-]+),?/g;
      var matcher;
      var length = 0;
      while (matcher = pattern.exec(list)) {
          length++;
      }
      return length;
    };

    function updateTxtMsg(listLength,limit){
      if(listLength == 0){
        $scope.txtBoxMsg = "Please enter data first";
        $scope.bordercolour = "red";
        $scope.fontcolour = "red";
        return;
      }
      else if(limit < listLength){
        $scope.txtBoxMsg = "Too Much!";
      }
      else if (listLength <= limit){
        $scope.txtBoxMsg = "Enjoy";
      }

      $scope.fontcolour = "green";
      $scope.bordercolour = "green";
    };

  }


})();
