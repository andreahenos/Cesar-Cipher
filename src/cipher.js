const cipher = {
encode: (offset, str) => {
    offset = parseInt(offset)
    let result = "";
    for(let position = 0; position<str.length; position++){
        let codeOfChar = str.charCodeAt(position);
        console.log(codeOfChar)
    let newPosition = (codeOfChar -65 + offset) %26 +65;
    console.log(newPosition);
    let newLetter = String.fromCharCode(newPosition);
    console.log(newLetter);
    result += newLetter
    console.log(result)
    }
return result;
},

decode: (offset, str) => {
    offset = parseInt(offset)
    let result = "";
    for(let position = 0; position<str.length; position++){
        let codeOfChar = str.charCodeAt(position);
        console.log(codeOfChar);
        let newPosition = (codeOfChar -65 +26 -(offset %26)) %26 +65;
        console.log(newPosition);
        let newLetter = String.fromCharCode(newPosition);
        console.log(newLetter);
        result += newLetter
        console.log(result)
    }
return result;
}

}

export default cipher;
