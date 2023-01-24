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
    textoResult.textContent = desencriptarTxt(texto.value.toLowerCase(), cambiarPropVal(keys));
    h3.textContent = "Texto Desencriptado:"
}
function ocultar (){
    document.getElementById("sidebar-img").hidden = true;
    document.getElementById("cardEncriptado").hidden = false;
    aside.classList.remove("sidebar");
    aside.classList.add("sidebar-oculto");
}
//se refactoriza el codigo usando objetos
const keys = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};
function encriptarTxt(texto, keys) {
    let txt = texto;
    let txtEncrip = "";
    for (let i = 0; i < txt.length; i++) {
        if (keys[txt[i]]) {
            txtEncrip += keys[txt[i]];
        } else {
            txtEncrip += txt[i];
        }
    }
    return txtEncrip;
}

function cambiarPropVal(obj) {
    var cambio = {};
    for (var val in obj) {
      cambio[obj[val]] = val;
    }
    return cambio;
  }

function desencriptarTxt (texto, keys){
    for (const [original, cambio] of Object.entries(keys)) {
        //se usa la expresion regular porque solamente reemplazaba en la primera coincidencia
        const regex = new RegExp(original, "g");
        texto = texto.replace(regex, cambio);
      }
      return texto;
}
function copiar(){
    textoResult.select();
    document.execCommand("copy");
    alert("Texto copiado");
}