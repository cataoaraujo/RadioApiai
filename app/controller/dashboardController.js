angular.module('radio')
.controller('DashboardController', function($scope, ProgramacaoService) {
  $scope.domingo = ProgramacaoService.query({id:0});
  $scope.segundasexta = ProgramacaoService.query({id:1});
  $scope.sabado = ProgramacaoService.query({id:6});

});
