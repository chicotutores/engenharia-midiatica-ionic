/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.controller('NoticiasCtrl', function ($scope, $localstorage, $state, $ionicLoading, $ionicPlatform, $ionicListDelegate, $ionicPopup, $window, Noticias) {

  $scope.noticias = [];

  $ionicPlatform.registerBackButtonAction(function (event) {
    event.preventDefault();
  }, 100);

  $scope.showFilter = false;

  $scope.selectedFilters = {
    newspaper: false,
    radio: false,
    tv: false,
    internet: false
  };

  $scope.$on("$ionicView.enter", function(){
      $scope.getNews();
  });

  $scope.getNews = function () {
    showLoading();
    Noticias.all().then(function () {
      $scope.noticias = Noticias.noticias;
      $scope.noticiasFiltradas = $scope.noticias;
      hideLoading();
    }, function () {
      hideLoading();
      var alertPopup = $ionicPopup.alert({
        title: 'Erro!',
        template: 'Não foi possível carregar as notícias, por favor tente novamente!'
      });
    });
  };

  var filtrarNoticias = function () {
    $scope.noticiasFiltradas = $scope.noticias.filter(function (element) {
      if (($scope.selectedFilters.newspaper && element.fonte.type === "MI") ||
        ($scope.selectedFilters.radio && element.fonte.type === "R") ||
        ($scope.selectedFilters.tv && element.fonte.type === "TV") ||
        ($scope.selectedFilters.internet && element.fonte.type === "IN")) {
        return true
      } else if (!$scope.selectedFilters.newspaper && !$scope.selectedFilters.radio && !$scope.selectedFilters.tv && !$scope.selectedFilters.internet) {
        return true
      } else {
        return false;
      }
    });
  };

  $scope.logOut = function () {
    $localstorage.setObject('logged', false);
    $state.go('login');
  };

  $scope.selectFilters = function (filter) {
    switch (filter) {
      case 0:
        $scope.selectedFilters.newspaper = !$scope.selectedFilters.newspaper;
        break;
      case 1:
        $scope.selectedFilters.radio = !$scope.selectedFilters.radio;
        break;
      case 2:
        $scope.selectedFilters.tv = !$scope.selectedFilters.tv;
        break;
      case 3:
        $scope.selectedFilters.internet = !$scope.selectedFilters.internet;
        break;
    }
    filtrarNoticias()
  };

  $scope.showAndHideFilters = function () {
    $scope.showFilter = !$scope.showFilter
  };

  var showLoading = function () {
    $ionicLoading.show({
      template: '<h4>Carregando notícias</h4><ion-spinner></ion-spinner>',
      noBackdrop: true
    });
  };

  var hideLoading = function () {
    $ionicLoading.hide();
  };


  $scope.remove = function () {
    Noticias.remove(chat);
  };

  $scope.classificarNoticia = function (noticia, nota) {
    noticia.nota = nota;
    $ionicListDelegate.closeOptionButtons();
    Noticias.classificarNoticia(noticia, nota).then(function (data) {
      noticia.nota = nota;
    }, function (data) {
      noticia.nota = 'NE';
      var alertPopup = $ionicPopup.alert({
        title: 'Erro!',
        template: 'Não foi possível classificar a notícia, por favor tente novamente!'
      });
    })
  };

  $scope.openNoticia = function (noticia) {
    window.open(noticia.url, '_system');
  }
})

  .controller('NoticiaDetailCtrl', function ($scope, $stateParams, Noticias) {
    $scope.noticia = Noticias.get($stateParams.noticiaId);
  });
