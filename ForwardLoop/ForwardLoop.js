let array = [];
function onClickPushNumbers() {
    debugger;
    let number = Number(document.getElementById("txtNumbers").value);
    array.push(number);
    document.getElementById("divPush").innerHTML = array;
    document.getElementById("txtNumbers").value = null;
}
// Adding the Two Numbers:
function onClickArraySumAdd(){
    let addSums = [];
let addCount = 0;
    debugger;
     for(i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            addSums.push(array[i] + array[j]);
            if((array[i] + array[j]) == 7){
                addCount ++;
            }
        }
    }
    document.getElementById("divArraySumAdd").innerHTML =addSums;
    alert(addCount);
}
// Subtracting the Two Numbers:
function onClickArraySumSub(){
let subSums = [];
let subCount = 0;
    debugger;
     for(i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            subSums.push(array[i] - array[j]);
            if(Math.abs(array[i] - array[j]) == 7){
                subCount ++;
            }
        }
    }
    document.getElementById("divArraySumSub").innerHTML =subSums;

    alert(subCount);
}

// Multiplication the Two Numbers:
function onClickArraySumMul(){
let mul = [];
let count = 0;
    debugger;
    for(i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            mulSum.push(array[i] * array[j]);
            if((array[i] * array[j]) == 18){
                mulCount++;
            }
        }
    }
    document.getElementById("divArraySumMul").innerHTML=mulSums;
    alert(mulCount);
}