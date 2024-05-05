<script>
    function Criacao_Conta() {
            const nome = input_Nome_usuario.value;
            const cpf = input_CPF_usuario.value;
            const empresa = input_Empresa_usuario.value;
            const email = input_Email_usuario.value;
            const senha = input_Senha_usuario.value;
            const confirmacaoSenha = input_Confirmacao_Senha_usuario.value;
            erro = false

            if (!nome || !cpf || !empresa || !email || !senha || !confirmacaoSenha) {
                alert("Por favor, preencha todos os campos.");
                erro = true
            }
            else if(cpf.length<11 || cpf.length>11){
                alert("Por favor, insira um CPF valido.");
                erro = true
            }
            if(!email){
                alert("Por favor, insira seu e-mail.");
                erro = true
            }
            else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1){
                alert("Por favor, insira um e-mail válido.");
                erro = true
            }
            if (!senha) {
                alert("Por favor, insira sua senha.");
                erro = true
            }
            else if(8 > senha.length){
                alert("Minimo de caracteres não alcançado")
                erro = true
            }
            else if (senha.indexOf("@") == -1 &&  senha.indexOf("#") == -1 && senha.indexOf("!") == -1 &&  senha.indexOf("*") == -1 && senha.indexOf("&") == -1 && senha.indexOf("%") == -1 && senha.indexOf("$") == -1 && senha.indexOf("-") == -1 && senha.indexOf("_") == -1){
            alert("Por favor, insira um caracter especial na senha.");
            erro = true
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
                erro = true
            }
            else if (confirmacaoSenha!=senha) {
                alert("Por favor, insira sua senha.");
                erro = true
            }
            else if (erro == false){
            alert("Cadastro realizado com sucesso!");
            }
        }
</script>