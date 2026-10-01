/* =========================================================
   GLOBAL — injeta a barra lateral e o header na página.
   Uso (em toda página, exceto telaLogin e Cadastrar):
     <link rel="stylesheet" href="../Styles/global.css">
     <script src="../Styles/global.js"></script>   (antes de </body>)
========================================================= */
(function () {
  var script = document.currentScript;
  var raiz = new URL('../', script.src); // raiz do projeto
  var u = function (caminho) { return new URL(caminho, raiz).href; };

  var paginas = {
    inicio:     u('Home/Home.html'),
    buscar:     u('TelaBuscar/buscar.html'),
    biblioteca: u('Biblioteca/Biblioteca.html'),
    favoritas:  u('Favoritas/favoritas.html'),
    perfil:     u('TelaPerfil/Perfil.html')
  };

  // pasta da página atual -> item do menu que fica "ativo"
  var pastaParaItem = {
    'home': 'inicio',
    'telabuscar': 'buscar',
    'biblioteca': 'biblioteca',
    'playlist': 'biblioteca',
    'favoritas': 'favoritas',
    'telaperfil': 'perfil'
  };
  var partes = location.pathname.split('/');
  var pasta = (partes[partes.length - 2] || '').toLowerCase();
  var ativo = pastaParaItem[pasta];
  var cls = function (item) { return item === ativo ? ' class="ativo"' : ''; };

  var html =
    '<aside class="barra-lateral">' +
      '<button class="barra-lateral__alternar" aria-label="Expandir menu"><i class="fa-solid fa-chevron-right"></i></button>' +
      '<nav class="barra-lateral__navegacao">' +
        '<a href="' + paginas.perfil + '"' + cls('perfil') + ' aria-label="Perfil"><img src="' + u('Assets/Icone ouvindo.svg') + '" alt=""></a>' +
        '<a href="' + paginas.biblioteca + '"' + cls('biblioteca') + ' aria-label="Biblioteca"><img src="' + u('Assets/Icone biblioteca.svg') + '" alt=""></a>' +
        '<a href="' + paginas.favoritas + '"' + cls('favoritas') + ' aria-label="Músicas favoritas"><img src="' + u('Assets/Icone musicas curtidas.svg') + '" alt=""></a>' +
      '</nav>' +
      '<a href="' + paginas.inicio + '" class="barra-lateral__inicio' + (ativo === 'inicio' ? ' ativo' : '') + '" aria-label="Início"><i class="fa-solid fa-house"></i></a>' +
    '</aside>' +

    '<header class="barra-superior">' +
      '<a href="' + paginas.inicio + '" class="logotipo"><img src="' + u('Assets/Logo horizontal.svg') + '" alt="MusicHub"></a>' +
      '<div class="barra-superior__direita">' +
        '<a href="' + paginas.buscar + '" class="botao-busca"><img src="' + u('Assets/Busca.svg') + '" alt=""><span>BUSCAR</span></a>' +
        '<span class="divisor"></span>' +
        '<a href="' + paginas.biblioteca + '" class="link-biblioteca"><img src="' + u('Assets/Icone biblioteca.svg') + '" alt=""><span>BIBLIOTECA</span></a>' +
        '<span class="divisor"></span>' +
        '<a href="' + paginas.perfil + '" class="avatar" aria-label="Perfil"><img src="' + u('Assets/Icone perfil.svg') + '" alt="Perfil"></a>' +
        '<button class="botao-configuracoes" aria-label="Configurações"><img src="' + u('Assets/Icone configuracoes.svg') + '" alt=""></button>' +
      '</div>' +
    '</header>';

  document.body.insertAdjacentHTML('afterbegin', html);
})();
