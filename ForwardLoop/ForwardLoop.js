let array = [];
let sums = [];
let count = 0;
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
            sums.push(array[i] + array[j]);
            if((array[i] + array[j]) == 7){
                count ++;
            }
        }
    }
    document.getElementById("divArraySumAdd").innerHTML =sums;
    alert(count);
}
// Subtracting the Two Numbers:
function onClickArraySumSub(){
    debugger;
     for(i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            sums.push(array[i] - array[j]);
            if(Math.abs(array[i] - array[j]) == 7){
                count ++;
            }
        }
    }
    document.getElementById("divArraySumSub").innerHTML =sums;

    alert(count);
}