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
    textoResult.textContent = encriptarTxt(texto.value.toLowerCase());
    h3.textContent = "Texto Encriptado:"
}
function desencriptar(){
    ocultar();
    textoResult.textContent = desencriptarTxt(texto.value.toLowerCase());
    h3.textContent = "Texto Desencriptado:"
}
function ocultar (){
    document.getElementById("sidebar-img").hidden = true;
    document.getElementById("cardEncriptado").hidden = false;
    aside.classList.remove("sidebar");
    aside.classList.add("sidebar-oculto");
}
function encriptarTxt (texto){
    let txt = texto;
    let txtEncrip = "";
    for(let i =0; i<txt.length; i++){
        if(txt[i]=="a"){
            txtEncrip += "ai"
        } else if(txt[i]=="e"){
            txtEncrip += "enter"
        } else if(txt[i]=="i"){
            txtEncrip += "imes"
        } else if(txt[i]=="o"){
            txtEncrip += "ober"
        } else if(txt[i]=="u"){
            txtEncrip += "ufat"
        } else {
            txtEncrip += txt[i];
        }
    }
    return txtEncrip;
}

function desencriptarTxt (texto){
    let txt = texto;
    let txtEncrip = "";
    for(let i =0; i<txt.length; i++){
        if(txt[i]=="a"){
            txtEncrip += "a"
            i++
        } else if(txt[i]=="e"){
            txtEncrip += "e"
            i+=4
        } else if(txt[i]=="i"){
            txtEncrip += "i"
            i+=3
        } else if(txt[i]=="o"){
            txtEncrip += "o"
            i+=3
        } else if(txt[i]=="u"){
            txtEncrip += "u"
            i+=3
        } else {
            txtEncrip += txt[i];
        }
    }
    return txtEncrip;
}
function copiar(){
    textoResult.select();
    document.execCommand("copy");
    alert("Texto copiado");
}