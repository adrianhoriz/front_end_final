document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do formulário de ser enviado

            // Obtém os valores dos campos de entrada
            var usernameInput = document.getElementById("username");
            var passwordInput = document.getElementById("password");
            var emailInput = document.getElementById("email"); 

            var username = usernameInput.value;
            var password = passwordInput.value;
            var email = emailInput ? emailInput.value : "Não informado"; // Adicionado para verificar se o campo de email existe

            // Exibe os dados no console do navegador
            console.log("Usuário:", username);
            console.log("Senha:", password);
            console.log("Email:", email);

            // Limpa os campos de entrada
            usernameInput.value = "";
            passwordInput.value = "";
            if (emailInput) emailInput.value = ""; // Limpa o campo de email, se existir

            window.location.href = "index.html"; // Redireciona para outra página
        });
    }
});
