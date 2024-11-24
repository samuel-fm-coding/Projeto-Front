$(document).ready(function(){
  returnHeader();
  verificaLogin();

  $('#cpfCadastro').mask('000.000.000-00');

  $("#btn-logout").click(function(){
    logout();
  });
});

function verificaLogin(){
  const token = sessionStorage.getItem('userToken');
  const anunciarPage = window.location.pathname.endsWith('cadastrar_imovel.html');
  const perfilPage = window.location.pathname.endsWith('perfil.html');
  if (!token && (anunciarPage || perfilPage)) {
    window.location.href = 'login.html';
    sessionStorage.setItem('showLoginAlert', 'true');
  }
}

//EXIBIRÁ O ALERT AO CARREGAR PAGE DE LOGIN - EVITAR VISUALIZAÇÃO DE PAGINA RESTRITA
if (window.location.pathname.endsWith('login.html')) {
  const showAlert = sessionStorage.getItem('showLoginAlert');
  if (showAlert) {
      alert('Você não está logado, clique em OK para prosseguir ao login');
      sessionStorage.removeItem('showLoginAlert');
  }
}

function logout() {
  sessionStorage.removeItem('userToken');
  sessionStorage.removeItem('userId');
}

function returnHeader() {
    var html = `
      <nav class="navbar navbar-default" style="margin-top: 10px;">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-header" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src="img/logo.jpg" class="img-responsive logo-header" alt="Logo" style=" transform: scale(1.5);">
            </a>
          </div>
  
          <div class="collapse navbar-collapse" id="navbar-header">
            <ul class="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="imoveis.html">Alugar</a></li>
              <li><a href="cadastrar_imovel.html">Anunciar</a></li>
            </ul>
  
            
    `;
  if(!sessionStorage.getItem('userToken')){
    html += `<!-- Parte direita, sempre visível -->
        <ul class="nav navbar-nav navbar-right" style="margin-right: 10px;">
          <li><a href="cadastro.html" class="btn btn-back-green" id="btn-criar-conta">Criar conta</a></li>
          <li><a href="login.html" class="btn btn-outline-lightgreen" id="btn-login"><i class="bi bi-person-circle"></i> Entrar</a></li>
        </ul>
      `;
  }
  else{
    //INCLUIR UM BOTAO/ICON DE PERFIL (PAGE QUE IRÁ CONTER OS IMOVEIS DO USUARIO, DADOS DELE, PODER EXCLUIR CONTA E EDITAR DADOS DA CONTA)
    html += `<!-- Parte direita, sempre visível -->
        <ul class="nav navbar-nav navbar-right" style="margin-right: 10px;">
        <li><a href="perfil.html" class="btn btn-back-green" id="btn-perfil"><i class="bi bi-person"></i> Perfil</a></li>
          <li><a href="index.html" class="btn btn-outline-lightgreen" id="btn-logout"><i class="bi bi-power"></i> Sair</a></li>
        </ul>
      `;
  }
    html += `</div>
      </div>
      </nav>`;  
    $('header').html(html);
  }


function viaCEP(cep, callback) {
  $.ajax({
      url: `https://viacep.com.br/ws/${cep}/json/`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
          if (data.erro) {
              alert('CEP não encontrado.');
              callback(null); 
          } else {
              callback(data); 
          }
      },
      error: function() {
          alert('Erro ao consultar o CEP.');
          callback(null);
      }
  });
}

function verificaObrigatorios(form){
  var count_empty = 0;

  $(form).find('input, textarea').each(function () {
    if ($(this).val() == '' && $(this).hasClass('obrigatorio')) {
        $(this).addClass('border-red');
        count_empty++;
    }
    else{
      $(this).removeClass('border-red');
    }
  }); 

  if(count_empty > 0){
    //TIME OUT PARA DESTACAR OS CAMPOS ANTES DE EXIBIR O ALERT
    setTimeout(() => {
      alert('Preencha todos os campos destacados');
    }, "300");
    return false;
  }
  else{
    return true
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
}
