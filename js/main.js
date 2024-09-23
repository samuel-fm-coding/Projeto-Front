$(document).ready(function(){
  returnHeader();
  
  $('#cpfCadastro').mask('000.000.000-00');
});



function returnHeader(){
  var html = `<div class="row align-items-center">
                <div class="col-4">
                  <img src="https://th.bing.com/th/id/R.421fd445b32643f4e1ab54216f80f29c?rik=ok5b86CfpNIYKQ&pid=ImgRaw&r=0" width="75" alt="Logo">
                </div>
                <div class="col-8 text-right">
                  <a href="/">Home</a>
                  <a href="#">Alugar</a>
                  <a href="#">Anunciar</a>
                  <a href="#">A LocaHouse</a>
                  <a href="cadastro.html" class="btn btn-primary" id="btn-criar-conta">Criar conta</a>
                  <a href="login.html" class="btn btn-outline-primary" id="btn-login"><i class="bi bi-person-circle"></i> Entrar</a>
                </div>
              </div>`;
    
    $('header').html(html);
}

