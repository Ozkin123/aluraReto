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
    encMessage.value="";
    messageResult.style.backgroundImage ="none";
}

function Desencriptar(messageToDes){
    messageToDes = messageToDes.toLowerCase();
    let arrayEnc =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
       for(let i =0;i<arrayEnc.length;i++){
         if(messageToDes.includes(arrayEnc[i][1])){
            messageToDes=messageToDes.replaceAll(arrayEnc[i][1],arrayEnc[i][0]);
          }
      }
      return messageToDes;
}

function btnDeseencriptar(){
    const encResult = Desencriptar(encMessage.value);
    messageResult.value=encResult;
    encMessage.value="";
}

