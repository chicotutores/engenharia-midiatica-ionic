/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.factory('Twitter', function ($http, SERVER, $localstorage) {
  var twitterService = {
    tweets: []
  };

  twitterService.getTweets = function () {
    var username = $localstorage.getObject('username');
    return $http.get(SERVER.url + 'tweets?username=' + username).success(function (data) {
      twitterService.tweets = data.message;
    })
  };

  return twitterService;
});
