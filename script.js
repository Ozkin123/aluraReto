const encMessage = document.querySelector(".textArea");
const messageResult = document.querySelector(".textResult");


function encriptar(messageToEnc){
 messageToEnc = messageToEnc.toLowerCase();
let arrayEnc =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

   for(let i =0;i<arrayEnc.length;i++){
     if(messageToEnc.includes(arrayEnc[i][0])){
        messageToEnc=messageToEnc.replaceAll(arrayEnc[i][0],arrayEnc[i][1])
      }
  }
  return messageToEnc;
}

function btnEncriptar(){
    const encResult = encriptar(encMessage.value);
    messageResult.value=encResult;
}

