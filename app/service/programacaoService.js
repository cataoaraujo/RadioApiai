angular.module('radio')
.filter('filterMinute', function(){
  return function(val){
    var hours = ~~(val/3600);
    var leaves = val - (hours * 3600);
    var minutes = ~~(leaves/60);
    if(minutes < 10){
      return "0"+minutes;
    }
    return minutes;
  }
})
.filter('filterHours', function(){
  return function(val){
    var hours = ~~(val/3600);
    if(hours < 10){
      return "0"+hours;
    }
    return hours;
  }
})
.service('ProgramacaoService', function($resource) {
  return $resource('/programacao/:id');
});
