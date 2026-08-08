let numbers = [];
function onClickPushNumbers() {
    let number = Number(document.getElementById("txtNumbers").value);
    numbers.push(number);
    document.getElementById("divPush").innerHTML = numbers;
    document.getElementById("txtNumbers").value = null;
}
// Sorting Method
function onClickSortNumbers() {
    let sorting = numbers.sort((a, b) => a - b);
    document.getElementById("divSort").innerHTML = sorting;
}