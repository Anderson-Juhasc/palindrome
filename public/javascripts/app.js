var app = angular.module('app', []);

app.controller('formCtrl', function($scope, $http) {
    $scope.send = function() {
        $http({
            method: 'POST',
            url: '/',
            data: { phrase: $scope.phrase }
        }).success(function(data, status) {
            alert('Is a palindrome!');
        }).error(function(data, status) {
            alert('Isn\'t a palindrome!');
        });
    }
});
