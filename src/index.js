import cipher from './cipher.js';
console.log(cipher);

//Botón cifrar
document.getElementById("encodeButton").addEventListener("click", function(){
  let offset = document.getElementById("inputOffset").value;
  let str = document.getElementById("inputText").value;
  let strConv = document.getElementById("outputText").value;
  strConv = cipher.encode(offset, str);
});

//Botón descifrar
document.getElementById("decodeButton").addEventListener("click", function(){
  let offset = document.getElementById("inputOffset").value;
  let str = document.getElementById("inputText").value;
  let strConv = document.getElementById("outputText").value;
  strConv = cipher.decode(offset, str);
}); 

//Botón copiar
document.getElementById("copyButton").addEventListener("click", copy);
function copy() {
  alert("Funciona copiar");
} 

//Botón borrar
document.getElementById("eraseButton").addEventListener("click", erase);
function erase() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}


