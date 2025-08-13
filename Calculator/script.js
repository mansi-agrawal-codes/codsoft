const display=document.getElementById('display');

function append(value){
    if(display.textContent === "0" && value !== "."){
        display.textContent = value;
    }else{
        display.textContent += value;
    }
}

function clearDisplay(){
    display.textContent="0";
}

function deletes(){
    display.textContent=display.textContent.slice(0,-1) || "0";
}

function calculate(){
    try{
        let exp=display.textContent.replace('÷','/').replace('×','*');
        if(exp.includes("%")){
            exp=exp.replace(/([0-9.]+)%/,(match,p1)=>(parseFloat(p1)/100));
        }
        display.textContent=eval(exp);
    }catch{
        display.textContent="Error";
    }
}







