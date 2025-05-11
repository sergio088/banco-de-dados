let dados = {}

async function Cadastro(){
  const step1 = document.getElementById('step1')
  const step2 = document.getElementById('step2')

  if(!step1.classList.contains('hidden')){
    const nome = document.getElementById('Nome').value
    const celular = document.getElementById('Celular').classList.contains('hidden') ? '' : document.getElementById('Celular').value
    const email = document.getElementById('Email').classList.contains('hidden') ? '' : document.getElementById('Email').value
    const nascdata = document.getElementById('datanascimento').value

    dados = {nome,celular,email,nascdata}

    step1.classList.add('hidden')
    step2.classList.remove('hidden')
  }else{

    const senha = document.getElementById('senha').value
    dadosfinais = {...dados, senha}

    await fetch("/Criarconta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosfinais)
      });

      alert('cadastro enviado')
  }




      

}

function trocar(){
  const email = document.getElementById('Email')
  const celular = document.getElementById('Celular')
  const botao = document.getElementById('botao')

  email.classList.toggle('hidden')
  celular.classList.toggle('hidden')
  

  if(celular.classList.contains('hidden')){
    botao.textContent = 'Usar o celular'
  }else{
    botao.textContent = 'Usar o e-mail'
  }
}