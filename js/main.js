$(document).ready(function(){
  returnHeader();
  
  $('#cpfCadastro').mask('000.000.000-00');
});


function returnHeader() {
    var html = `
      <nav class="navbar navbar-default navbar-fixed-top">
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
              <li><a href="#">A LocaHouse</a></li>
            </ul>
  
            <!-- Parte direita, sempre visível -->
            <ul class="nav navbar-nav navbar-right">
              <li><a href="cadastro.html" class="btn btn-back-green" id="btn-criar-conta">Criar conta</a></li>
              <li><a href="login.html" class="btn btn-outline-lightgreen" id="btn-login"><i class="bi bi-person-circle"></i> Entrar</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;

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
