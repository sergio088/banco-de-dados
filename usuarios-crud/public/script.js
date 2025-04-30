async function Cadastro(){
    const email =
    document.getElementById('email').value;
    const password = 
    document.getElementById('password').value;
    const username =
    document.getElementById('username').value;
    const contry =
    document.getElementById('contry').value
    
    await fetch("/Cadastrar-se ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username, contry})
      });
      
      alert("Cadastro enviado!");
}
async function Login(){
  const user = document.getElementById('user').value
  const pass = document.getElementById('pass').value

  const res = await fetch('/', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({user, pass})
  });

  if(res.ok){
    alert('logado')
  }else{
    alert('falha no login')
  }
}
