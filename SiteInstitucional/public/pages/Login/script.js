function login() {
    const email = input_email.value;
    const senha = input_password.value;

    if (email == '' || senha == '') {
       alert('Por favor, preeencha todos os campos')
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1 || senha.length < 8) {
        alert("Email ou senha estão incorretos. Tente novamente");
    }
}