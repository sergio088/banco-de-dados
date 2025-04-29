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
