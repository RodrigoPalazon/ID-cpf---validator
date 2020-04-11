
readCPF();

function readCPF(){
let cpfNumber = prompt("Type the beginning of your CPF number:");

    function write(message){
        let output = document.querySelector("#output");
        output.innerHTML = message;
    }

    if(cpfNumber.length === 11){ 
      
    let i =10;
    let calcFirst = 0; 
    for(y = 0; y <= 8; y++){
           calcFirst += cpfNumber[y] * i;
           i--;
    }
        calcFirst *= 10;


    i =11;
    let calcSecond = 0; 
    for(y = 0; y <= 9; y++){
           calcSecond += cpfNumber[y] * i;
           i--;
    }
        calcSecond *= 10;
    
        
        let cpfInvalid =[00000000000,
                        11111111111,
                        22222222222,
                        33333333333,
                        44444444444, 
                        55555555555,
                        66666666666,
                        77777777777,
                        88888888888,
                        99999999999
                       ];


        let compationInv = null; 
            for(let i=0; i<= cpfInvalid.length;i++){
            if(cpfNumber == cpfInvalid[i]){
                //readCPF();
                compationInv = true;
            }
        }

        
        if(calcFirst%11 == cpfNumber[9] && calcSecond%11 == cpfNumber[10] && compationInv != true ){
            write("CPF: " + cpfNumber + " is valid.");
        }else{  
            alert("It's not a valid CPF number.");
            readCPF();               
            }
    }else{  
        alert("It's not a valid CPF number.");
        readCPF();
    }
}