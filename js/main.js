$(document).ready(function(){
  returnHeader();
  
  $("#btn-login").off('click').on('click', function(e){
    e.preventDefault();
    returnModalLogin();
  });
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
        <button type="button" class="btn btn-outline-primary" id="btn-login"><i class="bi bi-person-circle"></i> Entrar</button>
      </div>
    </div>`;
    
    $('header').html(html);
}

function returnModalLogin(){
  if ($("#modal-login").length == 0) {
    var modal = `<div id="modal-login" class="modal fade" role="dialog">
                   <div class="modal-dialog">
                     <div class="modal-content">
                       <div class="modal-header">
                         <h5 class="modal-title">Fazer Login</h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                         </button>
                       </div>
                       <div class="modal-body">
                         <div class="col-12">
                            <label class="control-label" for="usuario-login">Usuário</label>
                            <input type="text" class="form-control" id="usuario-login">
                         </div>
                         <div class="col-12">
                            <label class="control-label" for="senha-login">Senha</label>
                            <input type="password" class="form-control" id="senha-login">
                         </div>
                       </div>
                       <div class="modal-footer">
                         <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                         <button type="button" class="btn btn-primary" id="btn-enviar-login">Enviar</button>
                       </div>
                     </div>
                   </div>
                 </div>`;
    $("body").append(modal); // Adiciona o modal ao corpo
  }
  
  // Mostra o modal
  $("#modal-login").modal('show');
}
