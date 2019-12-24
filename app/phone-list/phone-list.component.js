'use strict';

// Register phoneList component, along with its associated controller and template
var app = angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
      });
    }]
  });


  app.controller('myCtrl', ['$scope','myService', function($scope,myService) {
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.fullname = '';
    $scope.ListName = [];
    $scope.myFunc = function() {
      $scope.fullname = myService.myFunc($scope.firstname,$scope.lastname);
     
    };
    $scope.Addname = function() {
      $scope.ListName.push($scope.fullname)
    };
    

  }]);
  app.service('myService', function() {
    this.myFunc = function (fname,lname) {
      return fname+ ' ' +lname;
    }
});