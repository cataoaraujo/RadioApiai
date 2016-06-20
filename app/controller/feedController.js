angular.module('radio')
  .controller('FeedController', function($scope, FeedService) {
    FeedService.get(function(feeds) {
      for (var i = 0; i < feeds.length; i++) {
        var el = document.createElement('html');
        el.innerHTML = feeds[i].content;
        console.log(el);
        if (el.getElementsByTagName('img')[0]){
          feeds[i].image = el.getElementsByTagName('img')[0].src;
        }else{
					feeds[i].image = 'images/notfound.jpg';
				}
      }

      $scope.mainFeed = feeds[0];
      $scope.feeds = feeds.slice(1, 5);

    });
    $scope.$on('FeedService', function(event, data) {
      $scope.feeds = data;
    });
  });
