function Isadmin(){
    email = document.getElementById("form2Example1").value
    ad = email.split("@")
    const a = ad[1].substring(0, 5)
    if (a=="admin"){
        window.open('/administrar/adm.html', '_self')
    }
    else{
        window.open('/extrato/extrato.html', '_self')
    }
}
