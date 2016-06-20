$(document).ready(function(){
     $('.slider').slider({full_width: true});
   });

angular.module('radio', ['ngResource'])
  .filter("sanitize", ['$sce', function($sce) {
    return function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    }
  }]);
