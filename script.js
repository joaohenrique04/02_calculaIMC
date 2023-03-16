var imc;
var obesidade;

function retornaIMC (p, h) {
    console.log('fnc 2');
    return (p/(h*h)).toFixed(2);
}

function retornaObesidade(imc) {
    console.log('fnc 3');
    if (imc <= 24.9) {
        return 0;
    }   else if (imc <= 29.9) {
        return 1;
    }   else if (imc <= 39.9) {
        return 2;
    }   else {
        return 3;
    }
}

function pular() {
    return (document.write('</br>'));
}



function calculaIMC() {
    console.log('fnc 1');

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    if (!isNaN(altura+peso)&&altura&&peso) {
        imc = retornaIMC(peso, altura);
        obesidade = retornaObesidade(imc);

        document.getElementById("replace").innerHTML = ('Verificamos que seu peso é ' + peso + 'kg e sua altura é ' + altura + 'm!');
    
        document.getElementById("parte1").textContent = 'O seu IMC é ' + imc;
        document.getElementById("parte2").textContent = 'O seu nível de obesidade é: ' + obesidade;
    } else {
        document.getElementById("replace").innerHTML = ('Insira os valores da maneira correta!');
    }
    
}
