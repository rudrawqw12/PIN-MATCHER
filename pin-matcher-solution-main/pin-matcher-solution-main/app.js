function getPin(){
    const pin =generatePin();
    const pinString=pin+'';
    if(pinString.length ===4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random =Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const displayPin =document.getElementById('display-pin');
    displayPin.value=pin;

})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumbersField =document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumbersField.value;

  //jodi number na hoi tahole eta print korbe//
    if(isNaN(number)){
        if(number === 'C'){
            typeNumbersField.value ='';
        }  
        else if(number ==='<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDegits = digits.join('');
            typeNumbersField.value = remainingDegits;

        }
    }
    else{
          const newTypedNumber =previousTypedNumber+number;
          console.log(previousTypedNumber);
        typeNumbersField.value=newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(event){
    const displayPinField =document.getElementById('display-pin');
    const currentPin =displayPinField.value;

    const typeNumbersField =document.getElementById('typed-numbers');
    const typedNumber =typeNumbersField.value;

    if(typedNumber == currentPin){
        pinSuccesMessage = document.getElementById('pin-success');
        pinSuccesMessage.style.display ='block';
    }
    else{
        console.log('incorrect pin');
        pinFailureMessage = document.getElementById('pin-failure');
        pinFailureMessage.style.display ='block';
    }

})