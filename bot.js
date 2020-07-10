function katchau() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    document.getElementById("demo").innerHTML = "Email: " + email;
    document.getElementById("demo2").innerHTML = "Senha: " + senha;
  }

// -> function = url, user, pass, sizenumber, cep, frete, buy (true or false)