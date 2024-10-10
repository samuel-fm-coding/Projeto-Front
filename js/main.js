$(document).ready(function(){
  returnHeader();
  
  $('#cpfCadastro').mask('000.000.000-00');
});



function returnHeader(){
  var html = `<div class="row align-items-center">
                <div class="col-xs-12 col-sm-4">
                    <a href="/"><img src="img/logo.jpg" width="150" alt="Logo"></a>
                </div>
                <div class="col-xs-12 col-sm-8 text-right">
                    <a href="/">Home</a>
                    <a href="imoveis.html">Alugar</a>
                    <a href="cadastrar_imovel.html">Anunciar</a>
                    <a href="#">A LocaHouse</a>
                    <a href="cadastro.html" class="btn btn-back-green" id="btn-criar-conta">Criar conta</a>
                    <a href="login.html" class="btn btn-outline-lightgreen" id="btn-login"><i class="bi bi-person-circle"></i> Entrar</a>
                </div>
              </div>
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
              callback(null); // Chama o callback com null em caso de erro
          } else {
              callback(data); // Chama o callback com os dados recebidos
          }
      },
      error: function() {
          alert('Erro ao consultar o CEP.');
          callback(null); // Chama o callback com null em caso de erro
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
