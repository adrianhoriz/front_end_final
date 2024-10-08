document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do formulário de ser enviado

            // Obtém os valores dos campos de entrada
            var usernameInput = document.getElementById("username");
            var passwordInput = document.getElementById("password");
            var username = usernameInput.value;
            var password = passwordInput.value;

            // Exibe os dados no console do navegador
            console.log("Usuário:", username);
            console.log("Senha:", password);

            // Limpa os campos de entrada
            usernameInput.value = "";
            passwordInput.value = "";

            window.location.href = "index.html";
        });
        
    }
});
