const txt = document.getElementById("txt");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const tentativas = document.getElementById("tentativas");
const img = document.getElementById("img");
const min = 1;
const max = 100;
let tent = 0;

let randomNum = Math.floor(Math.random() * max) + min;

btn.onclick = function() {
    const userValue = parseInt(input.value);
    if (isNaN(userValue) || userValue < min || userValue > max) {
        txt.textContent = "Por favor, insira um número válido entre " + min + " e " + max;
        return;
    }

    tent++;
    tentativas.textContent = tent + " tentativa(s)";
    
    if (randomNum < userValue) {
        txt.textContent = "Muito alto";
        img.src = "genio_alto.png";
        input.value = ""
    } else if (randomNum > userValue) {
        txt.textContent = "Muito baixo";
        img.src = "genio_baixo.png";
        input.value = ""
    } else {
        txt.textContent = "VOCÊ VENCEU";
        img.src = "genio_ganhou.png";
        btn.textContent = "Jogar de novo?"
        btn.onclick = function () {
            window.location.reload(true);
        }
    }
}
