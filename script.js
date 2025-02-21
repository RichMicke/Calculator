let ruuningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector ('.screen');

function buttonClick(value){
    if(isNaN(value)){
       handleSymbol(value);
    }else{
       handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            ruuningTotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flashOperation(parseInt(buffer));
            previousOperator = null;
            buffer = ruuningTotal;
            ruuningTotal = 0;
            break;
        
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break; 
        case '+':
        case '-':
        case '*':
        case '/':
            handleMath(symbol){
                
            }
        }           
    }        
}