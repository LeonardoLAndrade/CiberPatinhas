const bot = document.getElementsByClassName("bot")[0];


bot.addEventListener("click", () => {

    let chat = document.getElementsByClassName("chat")[0];


    if (chat.style.opacity === "0") {
        chat.style.opacity = "1";
        chat.style.display = "flex"; // Exibir a div após a transição começar
    } else {
        chat.style.opacity = "0";
        setTimeout(() => {
            chat.style.display = "none"; // Ocultar a div após a transição terminar
        }, 300); // Tempo da transição (0.3s) em milissegundos
    }

    if (opt1.style.display === "block" || opt2.style.display === "block" || opt3.style.display === "block" || opt4.style.display === "block") {
        opt1.style.display = "";
        opt2.style.display = "";
        opt3.style.display = "";
        opt4.style.display = "";
        opt41.style.display = "";
        opt42.style.display = "";
        rst.innerHTML = '';
        rst2.innerHTML = '';
    }
});

/* const btn = document.querySelector("#send");

btn.addEventListener("click", (e) => {

}); */

const body = document.querySelector("body");

const rst = document.querySelector(".rst");
const rst2 = document.querySelector(".rst2");
const opt1 = document.querySelector(".opt1");
const opt2 = document.querySelector(".opt2");
const opt3 = document.querySelector(".opt3");
const opt4 = document.querySelector(".opt4");
const opt41 = document.querySelector(".opt4-1");
const opt42 = document.querySelector(".opt4-2");

body.addEventListener('click', (e) => {
    // ------------------------------------------------------- PRIMEIRA ESCOLHA -----------------------------------------------------------
    let p1Exist = document.getElementsByClassName("p-rst1");
    if (p1Exist.length == 0) {
        if (e.target.innerText === "Adoção") {
            p = criaP1()
            let txt = document.createTextNode("Adoção");
            anexaP1(p, txt);
            if (opt2.style.display === "" && opt3.style.display === "" && opt4.style.display === "") opt1.style.display = "block";

        } else if (e.target.innerText === "Apadrinhe um pet") {
            p = criaP1()
            let txt = document.createTextNode("Apadrinhe um pet");
            anexaP1(p, txt)
            if (opt1.style.display === "" && opt3.style.display === "" && opt4.style.display === "") opt2.style.display = "block";

        } else if (e.target.innerText === "Doação") {
            p = criaP1()
            let txt = document.createTextNode("Doação");
            anexaP1(p, txt)
            if (opt1.style.display === "" && opt2.style.display === "" && opt4.style.display === "") opt3.style.display = "block";
        } else if (e.target.innerText === "ONG's participantes") {
            p = criaP1()
            let txt = document.createTextNode("ONG's participantes");
            anexaP1(p, txt)
            if (opt1.style.display === "" && opt2.style.display === "" && opt3.style.display === "") opt4.style.display = "block";
        }

    }

    // ------------------------------------------------------- SEGUNDA ESCOLHA FINANÇAS -----------------------------------------------------------
    let p2Exist = document.getElementsByClassName("p-rst2");
    if (p1Exist.length == 1 && p2Exist.length == 0) {
        if (e.target.innerText === "É o Bicho") {
            p = criaP2()
            let txt = document.createTextNode("É o Bicho");
            anexaP2(p, txt);
            if (opt42.style.display === "") opt41.style.display = "block";


        } else if (e.target.innerText === "Projeto Lunaar") {
            p = criaP2()
            let txt = document.createTextNode("Projeto Lunaar");
            anexaP2(p, txt);
            if (opt41.style.display === "") opt42.style.display = "block";

        } 
    }
});

function criaP1() {
    let newP = document.createElement("p");
    newP.classList = "p-rst1";
    return newP;
}

function criaP2() {
    let newP = document.createElement("p");
    newP.classList = "p-rst2";
    return newP;
}

function anexaP1(newP, txt) {
    newP.appendChild(txt);
    rst.appendChild(newP);
}

function anexaP2(newP, txt) {
    newP.appendChild(txt);
    rst2.appendChild(newP);
}
