function redirectTo(url) {
    window.location.href = url;
}
document.querySelector('.entrar').addEventListener('click', function() {
    redirectTo("http://127.0.0.1:5500/Login.html");
});

document.querySelector('.cadastrar').addEventListener('click', function() {
    redirectTo("http://127.0.0.1:5500/Cadastro.html");
});


let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(counter > 5 ) {
        contador = 1;
    }
}, 3000 );