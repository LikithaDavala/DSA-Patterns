let string = "hoajalaajapaa";
let k=3;
function onClickSubStrings(){
    debugger;
    let subString = [];
    for(i=0; i<=string.length - k; i++){
        subString.push(string.slice(i, i+k).split("a").length-1);
    }
    let result= Math.max(...subString);
    document.getElementById("divSubStrings").innerHTML = result;
}
