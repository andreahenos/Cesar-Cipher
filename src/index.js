import cipher from './cipher.js';
//console.log(cipher);

//Texto en mayúsculas
document.querySelector('#inputText').addEventListener("keyup",function(){
  this.value=this.value.toUpperCase();
});

//Botón cifrar
document.getElementById("encodeButton").addEventListener("click", function(){
  let offset = document.getElementById("inputOffset").value;
  let str = document.getElementById("inputText").value;
  let outStr = document.getElementById("outputText");
  outStr.value = cipher.encode(offset, str);
  //console.log(outStr.value);
});

//Botón descifrar
document.getElementById("decodeButton").addEventListener("click", function(){
  let offset = document.getElementById("inputOffset").value;
  let str = document.getElementById("inputText").value;
  let outStr = document.getElementById("outputText");
  outStr.value = cipher.decode(offset, str);
  //console.log(outStr.value);
}); 

//Botón intercambiar
document.getElementById("changeButton").addEventListener("click", change);
function change() {
  let str = document.getElementById("inputText");
  let outStr = document.getElementById("outputText");
  str.value = outStr.value;
  outStr.value = ""; 
} 

//Botón borrar
document.getElementById("eraseButton").addEventListener("click", erase);
function erase() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}


