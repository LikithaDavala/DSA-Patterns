const string = "acdaeiohkl"
const vowels = ["a", "e", "i", "o", "u"];
let k = 3;
function onClickStartsWith() {
    debugger;
    let count = 0;
    for (i = 0; i <= string.length - k; i++) {
       let result= string.slice(i, i + k);
        if(vowels.includes(result[0])){
           let result = count++;
        }
    }
        console.log(`The number of string starts with a vowels count has ${count} counts`);
        document.getElementById("divStartsWith").innerHTML = result;
}
