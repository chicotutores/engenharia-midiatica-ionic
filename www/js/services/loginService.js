/**
 * Created by douglas.nunes on 02/08/2016.
 */
app.factory('Login', function ($http, SERVER, $localstorage) {
  var loginService = {logged: false};
  loginService.login = function (username, password) {
    return $http.post(SERVER.url + 'login', {username: username, password: password}).success(function(data){
      loginService.logged = true;
      $localstorage.setObject('logged', true);
      $localstorage.setObject('username', username);
    })
  };
  return loginService;
});
