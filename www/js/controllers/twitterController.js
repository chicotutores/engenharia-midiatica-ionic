/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.controller('TwitterCtrl', function ($scope, $ionicLoading, $window, Twitter) {

  $scope.tweets = [];

  var showLoading = function () {
    $ionicLoading.show({
      template: '<h4>Carregando notícias</h4><ion-spinner></ion-spinner>',
      noBackdrop: true
    });
  };

  var hideLoading = function () {
    $ionicLoading.hide();
  };


  $scope.$on("$ionicView.enter", function(){
      showLoading();
      Twitter.getTweets().then(function () {
        $scope.tweets = Twitter.tweets;
        hideLoading();
      }, function () {
        hideLoading();
      });
  });

  $scope.correctTimestring = function(string) {
    return new Date(Date.parse(string));
  };

  $scope.openTweet = function (tweet) {
    var url = "http://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    $window.open(url, '_system');
  };
});
