const divide = document.getElementById('divide');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const multiply = document.getElementById('multiply');
const clear= document.getElementById('clear');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const enter = document.getElementById('enter');
const result = document.getElementById('result');

let operation = null;
let operationSet = false;
let operationType = '';
let firstNum = '';
let secondNum = '';

function activateBtn(elem){
    var current = document.getElementsByClassName("activeBtn");
    if(current.length > 0){
     current[0].classList.remove("activeBtn")
    }
    elem.classList.add("activeBtn");
    operationSet = true;
    if(elem.innerHTML != '=')
    operationType = elem.innerHTML;
    
    
}

function deActivateBtn(){
    var current = document.getElementsByClassName("activeBtn");
    if(current.length > 0){
     current[0].classList.remove("activeBtn")
    }
  operationSet = false;
}



divide.addEventListener('click',()=>{
    if(divide.classList.contains('activeBtn') && (firstNum != '' && secondNum != '')){
            firstNum = calculate(Number(firstNum),Number(secondNum),operationType)
    }
    operation = 'divide';
   activateBtn(divide);

})
minus.addEventListener('click',()=>{
    if(divide.classList.contains('activeBtn')){
        
    }
    operation = 'minus';
    activateBtn(minus);
})
plus.addEventListener('click',()=>{
    if(divide.classList.contains('activeBtn')){
        
    }
    operation = 'plus';
    activateBtn(plus);
})
multiply.addEventListener('click',()=>{
    if(divide.classList.contains('activeBtn')){
        
    }
    operation = 'multiply';
    activateBtn(multiply);
})







let numberBtn = document.getElementsByClassName("numBtn");

Array.prototype.forEach.call(numberBtn, function(e) {
    e.addEventListener('click',()=>{
        const result1 = document.getElementById('result');
        
        if(!operationSet){
            
            firstNum += e.innerText;
            
            result.innerHTML = firstNum;

            
        }
        else if(operationSet){
            secondNum += e.innerHTML;
            
            result.innerHTML = secondNum;
        }
        
       
    })
   
});

function calculate(num1,num2,operation){
    console.log(operation)
    if(operation == '-'){
        return num1-num2;
    }
    else if(operation == '+'){
        return num1+num2;
    }
    else if(operation == '*'){
        return num1 * num2;
    }
    else if(operation == '/'){
        return num1 / num2;
    }
}

enter.addEventListener('click',()=>{
    deActivateBtn();
    activateBtn(enter);
    
    result.innerHTML = calculate(Number(firstNum),Number(secondNum),operationType);
})

clear.addEventListener('click',()=>{
    deActivateBtn();
    result.innerHTML = '';
    firstNum = '';
    secondNum = '';
})
