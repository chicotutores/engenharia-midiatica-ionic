/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.factory('Resultados', function ($http, SERVER, $localstorage) {
  // Might use a resource here that returns a JSON array

  var resultadoService = {
    resultados: {},
    resultadoDetail: {}
  };

  resultadoService.all = function () {
    var username = $localstorage.getObject('username');
    return $http({
      method: 'GET',
      url: SERVER.url + 'resultado?username=' + username
    }).success(function (data) {
      resultadoService.resultados = data.message;
    });
  };

  resultadoService.get = function (id) {
    return $http({
      method: 'GET',
      url: SERVER.url + 'get-result?id=' + id
    }).success(function (data) {
      resultadoService.resultadoDetail = data.message;
    });
  };

  return resultadoService;
});
