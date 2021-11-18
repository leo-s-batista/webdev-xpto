$(document).ready(function(){
    
    
})

function senha(){
document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('iSenha').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('iSenha').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('iSenha').type = 'password';
  });
}
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('iTelefone').onkeyup = function(){
		mascara( this, mtel );
	}
}




function cadastrar(){
    var erro = "";
    var email = document.getElementById('iEmail').value; 
    var cpf = document.getElementById('iCPF').value;
    var rg = document.getElementById('iRG').value;
    var nome = document.getElementById('iNome').value;
    var sobrenome = document.getElementById('iSobrenome').value;
    var data = document.getElementById('iData').value;
    var cor = document.getElementById('iRaca').value;
    var end = document.getElementById('iEndereco').value;
    var cidade = document.getElementById('iCidade').value;
    var estado = document.getElementById('iEstado').value;
    var cep = document.getElementById('iCEP').value;
    var senha = document.getElementById('iSenha').value;
    var cel = document.getElementById('iTelefone').value;
    var aceite = document.getElementById('iAceite');




    if(email =="") 
    {
        erro+= " - Digite um email<br>";
    } 
    
    if(cpf =="") 
    {
        erro+= " - Digite seu CPF<br>";
    }
    if(rg =="") 
    {
        erro+= " - Digite seu RG<br>";
    }
    if(nome =="") 
    {
        erro+= " - Digite seu Nome<br>";
    }
    if(sobrenome =="") 
    {
        erro+= " - Digite seu Sobrenome<br>";
    }
    if(data == false) 
    {
        erro+= " - Selecione sua Data de Nascimento<br>";
       
    }
    if(cor == "SO") 
    {
        erro+= " - Selecione sua cor ou raça<br>";
    }
    if(end =="") 
    {
        erro+= " - Digite seu Endereço<br>";
    }
    if(cidade =="") 
    {
        erro+= " - Digite sua Cidade<br>";
    }
    if(estado == "SO") 
    {
        erro+= " - Selecione seu Estado<br>";
    }
    if(cep =="") 
    {
        erro+= " - Digite seu CEP<br>";
    }
    if(senha =="") 
    {
        erro+= " - Crie sua senha<br>";
    }
    if(cel =="") 
    {
        erro+= " - Digite seu Celular<br>";
    }
    if(aceite.checked == false) 
    {
        erro+= " - Você precisa concordar com os termos para continuar<br>";
    }

   

    if(erro == "") 
    {
        Swal.fire( 
            'Sucesso!',
            'Parabéns, você é o nosso mais novo sócio',
            'success'
          )
    }
    else{
        Swal.fire( 
            'Ops, falta algumas informações!',
            erro,
            'info'
          )
    }

}