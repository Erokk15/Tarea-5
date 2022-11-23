let Guatemala = document.getElementById("ejercicio1");
let India = document.getElementById("ejercicio2");
let Bajos = document.getElementById("ejercicio3");
let Suecia = document.getElementById("ejercicio4");
let Suiza = document.getElementById("ejercicio5");

function getBandera() {
    return document.getElementById('lista').value;
}

function setBandera() {
    Guatemala.style.display="none";
    India.style.display="none";
    Bajos.style.display="none";
    Suecia.style.display="none";
    Suiza.style.display="none";

    if (getBandera()== "Guatemala") Guatemala.style.display="block";

    if (getBandera()== "India") India.style.display="block";

    if (getBandera()== "Bajos") Bajos.style.display="block";

    if (getBandera()== "Suecia") Suecia.style.display="block";

    if (getBandera()== "Suiza") Suiza.style.display="block";
}
