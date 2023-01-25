let texto = document.getElementById("textoClave")
let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let btnCopiar = document.getElementById("copiar");
let h3 = document.getElementById("h3encriptado");
let aside = document.getElementById("aside");
let textoResult = document.getElementById("textoResult");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

function encriptar(){
    ocultar();
    textoResult.textContent = encriptarTxt(texto.value.toLowerCase(), keys);
    h3.textContent = "Texto Encriptado:"
}
function desencriptar(){
    ocultar();
    textoResult.textContent = desencriptarTxt(texto.value.toLowerCase(), cambiarPropPorVal(keys));
    h3.textContent = "Texto Desencriptado:"
}
function ocultar (){
    document.getElementById("sidebar-img").hidden = true;
    document.getElementById("cardEncriptado").hidden = false;
    aside.classList.remove("sidebar");
    aside.classList.add("sidebar-oculto");
}
//se refactoriza el codigo usando objetos y expresiones regulares
const keys = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

//se usa replace en cambio de replaceAll porque este no esta soportado por todos los navegadores
function encriptarTxt(texto, keys){
    let reemplazar = texto.replace(/a|e|i|o|u/g, function(x){
        return keys[x]
    })
    return reemplazar
}

function desencriptarTxt(texto, keys){
    let reemplazar = texto.replace(/ai|enter|imes|ober|ufat/g, function(x){
        return keys[x]
    })
    return reemplazar
}
//cambio la propiedad por su valor del objeto keys
function cambiarPropPorVal(obj) {
    var cambio = {};
    for (var val in obj) {
      cambio[obj[val]] = val;
    }
    return cambio;
}

function copiar(){
    textoResult.select();
    document.execCommand("copy");
    alert("Texto copiado");
}