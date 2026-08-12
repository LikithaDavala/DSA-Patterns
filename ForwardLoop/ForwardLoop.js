let array = [];
let addSums = [];
let subSums = [];
let addCount = 0;
let subCount = 0;
function onClickPushNumbers() {
    debugger;
    let number = Number(document.getElementById("txtNumbers").value);
    array.push(number);
    document.getElementById("divPush").innerHTML = array;
    document.getElementById("txtNumbers").value = null;
}
// Adding the Two Numbers:
function onClickArraySumAdd(){
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