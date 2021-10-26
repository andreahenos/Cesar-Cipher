const cipher = {

encode: (offset, str) => {
    let result = "";
    if (offset == ""){
        throw new TypeError('No has ingresado un desplazamiento.')
    } else if( parseInt(offset) < 0 ) {
        return cipher.decode(-offset, str);
    }  else {
        offset = parseInt(offset);
    }

    if (str == ""){
        throw new TypeError('No has ingresado un texto.')
    } 
    for(let position = 0; position<str.length; position++){
        let codeOfChar = str.charCodeAt(position);
        //console.log(codeOfChar);
        if(codeOfChar>= 65 && codeOfChar<=90){
            let newPosition = (codeOfChar -65 +offset) %26 +65;
            //console.log(newPosition);
            let newLetter = String.fromCharCode(newPosition);
            //console.log(newLetter);
            result += newLetter;
            //console.log(result);
        } else {
            result += String.fromCharCode(codeOfChar);
        }
    }
    return result
},

decode: (offset, str) => {
    let result = "";
    if (offset == ""){
        throw new TypeError('No has ingresado un desplazamiento.')
    } else if( parseInt(offset) < 0 ) {
        return cipher.encode(-offset, str);
    } else {
        offset = parseInt(offset);
    }
    if (str == ""){
        throw new TypeError('No has ingresado un texto.')
    }
    for(let position = 0; position<str.length; position++){
        let codeOfChar = str.charCodeAt(position);
         console.log(codeOfChar);
        if(codeOfChar>= 65 && codeOfChar<=90){
            let newPosition = (codeOfChar -65 +26 -(offset %26)) %26 +65;
            //console.log(newPosition);
            let newLetter = String.fromCharCode(newPosition);
            //console.log(newLetter);
            result += newLetter;
            //console.log
            (result);
        } else {
            result += String.fromCharCode(codeOfChar);
        }
    }
    return result
}

}

export default cipher;
