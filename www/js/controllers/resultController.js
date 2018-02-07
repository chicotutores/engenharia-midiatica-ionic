/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.controller('ResultCtrl', function ($scope, $ionicLoading, $localstorage, $state, $window, Resultados) {
  $scope.$on("$ionicView.enter", function(){
    // handle event
    showLoading();
    Resultados.all().then(function () {
      $scope.resultados = Resultados.resultados;
      hideLoading();
    }, function () {
      hideLoading();
    });
  });
  var showLoading = function () {
    $ionicLoading.show({
      template: '<h4>Carregando resultados</h4><ion-spinner></ion-spinner>',
      noBackdrop: true
    });
  };

  var hideLoading = function () {
    $ionicLoading.hide();
  };



  $scope.showDetail = function (periodo) {
    $localstorage.setObject('resultadoSelecionado', $scope.resultados[periodo]);
    $state.go('tab.result-detail');
  }
})

  .controller('ResultDetailCtrl', function ($scope, $localstorage, Resultados) {
    $scope.resultado = $localstorage.getObject('resultadoSelecionado');
    $scope.labels = ["Positivo", "Negativo", "Neutro"];
    $scope.data = [$scope.resultado.P, $scope.resultado.NG, $scope.resultado.NE];
  });
