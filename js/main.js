$(document).ready(function(){
  returnHeader();
  
  const token = localStorage.getItem('userToken');
  const anunciarPage = window.location.pathname.endsWith('cadastrar_imovel.html');
  if (!token && anunciarPage) {
    alert('Você não está logado, clique em OK para prosseguir ao login');
    window.location.href = 'login.html';
  }

  $('#cpfCadastro').mask('000.000.000-00');

  $("#btn-logout").click(function(){
    logout();
  });
});

function logout() {
  localStorage.removeItem('userToken');
  localStorage.removeItem('userId');
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
              <img src="img/logo.jpg" class="img-responsive logo-header" alt="Logo">
            </a>
          </div>
  
          <div class="collapse navbar-collapse" id="navbar-header">
            <ul class="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="imoveis.html">Alugar</a></li>
              <li><a href="cadastrar_imovel.html">Anunciar</a></li>
            </ul>
  
            
    `;
  if(!localStorage.getItem('userToken')){
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

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}
