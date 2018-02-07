/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.factory('Noticias', function ($http, $localstorage, SERVER) {
  // Might use a resource here that returns a JSON array

  var noticiaService = {
    noticias: []
  };

  noticiaService.all = function () {
    var username = $localstorage.getObject('username');
    return $http({
      method: 'GET',
      url: SERVER.url + 'getNoticiasUsername?username=' + username
    }).success(function (data) {
      noticiaService.noticias = data.message;
    });
  };

  noticiaService.classificarNoticia = function (noticia, nota) {
    return $http.post(SERVER.url + 'avaliar-referencia', {idReferencia: noticia.id, notaReferencia: nota});
  };

  return noticiaService;
});
