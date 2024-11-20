
const display = document.querySelector(".display");
function append(input){
    if(display.value=="ERROR"){
        clearDisplay();
    }
    display.value+=input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch(e){
        display.value="ERROR";
    }
    
}
function clearDisplay(){
    display.value="";
}
function deleteLast(){
    display.value=display.value.slice(0,-1);
}