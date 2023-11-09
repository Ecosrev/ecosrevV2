function isUser() {
    var email = document.getElementById("form2Example1").value;
    var ad = email.split("@");
    var domainSubstring = ad[1].substring(0, 5);

    if (domainSubstring === "admin") {
        window.open('/cadastro_adm/admin.html', '_self');
    } else if (domainSubstring === "posto") {
        window.open('/posto_coleta/pontos.html', '_self');
    } else {
        window.open('/extrato/extrato.html', '_self');
    }
}
