angular.module('radio')
  .factory('FeedLoader', function($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
      fetch: {
        method: 'JSONP',
        params: {
          v: '1.0',
          callback: 'JSON_CALLBACK'
        }
      }
    });
  })
  .service('FeedService', function($rootScope, FeedLoader) {
    this.get = function(cb) {
      var feedSources = [{
        title: "G1",
        url: 'http://g1.globo.com/dynamo/sao-paulo/rss2.xml'
      }];
      feeds = [];
      for (var i = 0; i < feedSources.length; i++) {
        FeedLoader.fetch({
          q: feedSources[i].url,
          num: 4
        }, {}, function(data) {
          return cb(data.responseData.feed.entries);
        });

      }

    };
  });
