/**
 * Created by douglasnunes on 15/10/16.
 */
app.controller('NewspaperCtrl', function ($scope) {

  $scope.newspapers = [
    {
      'nome': 'Folha de São Paulo',
      'url': 'http://www.folha.uol.com.br',
      'imagem': 'http://rsrc.1001cupomdedescontos.com.br/cache/cf/MuaCHYya.png'
    },
    {
      'nome': 'Jornal do Brasil',
      'url': 'http://www.jb.com.br/capa/',
      'imagem': 'https://nversoseditora.files.wordpress.com/2013/07/jornal-brasil-logo.png?w=470&h=140&crop=1'
    },
    {
      'nome': 'Globo',
      'url': 'http://www.globo.com',
      'imagem': 'http://s.glbimg.com/en/ho/static/globo_com_2016/img/home_200x200.png'
    },
    {
      'nome': 'G1',
      'url': 'http://g1.globo.com/',
      'imagem': 'https://pbs.twimg.com/profile_images/652253314210467840/gdCnHsYD_400x400.jpg'
    },
    {
      'nome': 'Correio Brasiliense',
      'url': 'http://www.correiobraziliense.com.br',
      'imagem': 'https://pbs.twimg.com/profile_images/660760779424145408/PjnAEF8S.jpg'
    }
  ];

  $scope.openNewspaper = function (url) {
    window.open(url, '_system');
  }

});
