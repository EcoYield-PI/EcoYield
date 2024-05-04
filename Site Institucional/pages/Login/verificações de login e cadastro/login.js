<script>
    function login(){
    const email = input_Email_login.value;
    const senha = input_Senha_login.value;

            if(!email){
                alert("Por favor, insira seu e-mail.");
            }
            if (email.indexOf("@") == -1 || email.indexOf(".com") == -1){
                alert("Por favor, insira um e-mail válido.");
            }
            
            if (!senha) {
                alert("Por favor, insira sua senha.");
            }
            else if(8 > senha.length){
                alert("Minimo de caracteres não alcançado")
            }
            else if (senha.indexOf("@") == -1 &&  senha.indexOf("#") == -1 && senha.indexOf("!") == -1 &&  senha.indexOf("*") == -1 && senha.indexOf("&") == -1 && senha.indexOf("%") == -1 && senha.indexOf("$") == -1 && senha.indexOf("-") == -1 && senha.indexOf("_") == -1){
            alert("Por favor, insira um caracter especial na senha.");
            }
            let contemNumero = false;
            let numeros = 0
            for (; numeros <= 9; numeros++) {
                if (senha.indexOf((numeros)) != -1) {
                    contemNumero = true;
                }
            }
            if (false == contemNumero) {
                alert("A senha deve conter pelo menos um número.");
            }
            else{
                
            }
    }
</script>