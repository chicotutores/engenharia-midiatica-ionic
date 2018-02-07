/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.controller('LoginController', function ($scope, $ionicLoading, $ionicPopup, $state, Login) {
  var showLoading = function () {
    $ionicLoading.show({
      template: '<h4>Validando suas credenciais</h4><ion-spinner></ion-spinner>',
      noBackdrop: true
    });
  };

  var hideLoading = function () {
    $ionicLoading.hide();
  };
  $scope.data = {};
  $scope.login = function () {
    showLoading();
    Login.login($scope.data.username.replace(' ', '').toLowerCase(), $scope.data.password).then(function (data) {
      hideLoading();
      $state.go('tab.references');
    }, function (error) {
      hideLoading();
      var alertPopup = $ionicPopup.alert({
        title: 'Erro!',
        template: 'Não foi possível fazer login, verifique suas credenciais e tente novamente!'
      });
    })
  }
});
