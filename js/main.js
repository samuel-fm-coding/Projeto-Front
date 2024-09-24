$(document).ready(function(){
  returnHeader();
  
  $('#cpfCadastro').mask('000.000.000-00');
});



function returnHeader(){
  var html = `<div class="row align-items-center">
                <div class="col-4">
                  <img src="img/logo.jpg" width="125" alt="Logo">
                </div>
                <div class="col-8 text-right">
                  <a href="/">Home</a>
                  <a href="#">Alugar</a>
                  <a href="#">Anunciar</a>
                  <a href="#">A LocaHouse</a>
                  <a href="cadastro.html" class="btn" id="btn-criar-conta" style="background-color: #678a73; color: #e4e8e2;">Criar conta</a>
                  <a href="login.html" class="btn btn-outline-primary" id="btn-login"><i class="bi bi-person-circle"></i> Entrar</a>
                </div>
              </div>`;
    
    $('header').html(html);
}

