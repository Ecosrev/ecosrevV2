item = document.getElementsByClassName("TabItem") //Iniciando a variável com o endereçamento dos nome dos itens
itensNames = [] // Iniciando array com os nomes dos itens
isCheck = [] //Iniciando a variável de valores checkados
var c = document.getElementsByClassName("check") // Iniciando a variável com endereçamento das checkboxes
for (var i = 0; i < c.length; i++)
    itensNames.push(item[i].innerHTML)
for (var i = 0; i < c.length; i++) { //Iniciando loop que chama a função
    c[i].addEventListener('click', function(){
        for (var co = 0; co < c.length; co++){ // Loop de alimentação do array de checkboxes checados
            isCheck.push(c[co].checked)
        }
        if (isCheck.includes(true)) // Se houver um valor verdadeiro ele mostra o total do resgate, senão, oculta novamente
            document.getElementById("TotResgate").style.display = "block"
        else{
            document.getElementById("TotResgate").style.display = "none"
        }
        isCheck = [] // limpa o array
        s = 0 // inicializando a variável de soma de valores
        sn = '' // iniciando a variável que soma os nomes
        for (var co = 0; co < c.length; co++){
            if(c[co].checked == true){ // alimentando a variável de soma de valores apenas dos valores checkados
                s += Number(c[co].value)
                sn += itensNames[co] + ', '
            }
        }
        document.getElementById("Points").innerHTML = s // substituindo o texto de um h3 para o valor total do resgate
        document.getElementById("PTotal_Itens").innerHTML = sn // substituindo o texto de um p para os nomes dos itens escolhidos
        if (s > 300){ // mudando a cor dos pontos caso ultrapasse o total de pontos do usuário, no caso 300
            document.getElementById("Points").style.color = "red"
        }
        else{
            document.getElementById("Points").style.color = "black"
        }
    });
    
}