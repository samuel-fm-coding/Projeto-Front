$(document).ready(function(){
  returnHeader();
  
  $('#cpfCadastro').mask('000.000.000-00');
});



function returnHeader(){
  var html = `<div class="row align-items-center">
                <div class="col-4">
                  <a href="/"><img src="img/logo.jpg" width="150" alt="Logo"></a>
                </div>
                <div class="col-8 text-right">
                  <a href="/">Home</a>
                  <a href="imoveis.html">Alugar</a>
                  <a href="cadastrar_imovel.html">Anunciar</a>
                  <a href="#">A LocaHouse</a>
                  <a href="cadastro.html" class="btn btn-back-green" id="btn-criar-conta">Criar conta</a>
                  <a href="login.html" class="btn btn-outline-lightgreen" id="btn-login"><i class="bi bi-person-circle"></i> Entrar</a>
                </div>
              </div>`;
    
    $('header').html(html);
}

