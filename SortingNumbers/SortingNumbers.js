let numbers = [];
function onClickPushNumbers() {
    debugger;
    let number = Number(document.getElementById("txtNumbers").value);
    numbers.push(number);
    document.getElementById("divPush").innerHTML = numbers;
    document.getElementById("txtNumbers").value = null;
}


// Sorting Method:
function onClickSortNumbers() {
    debugger;
    let sorting = numbers.sort((a, b) => a - b);
    document.getElementById("divSort").innerHTML = sorting;
}

// While Loop for adding:
 let target = 9;
    let left = 0;
    let addSum = [];
    let subSum =[];
    let addCount = 0;
let subCount = 0;
function onClickAdding() {
    debugger;
    let right = (numbers.length)-1;
    while (left < right) {
        addSum = (numbers[left] + numbers[right])
        if (addSum == target) {
            left++;
            right--;
            addCount++;
        } else if (addSum > target) {
            right--;
        } else if (addSum < target) {
            left++;
        }
        alert(addCount);
    }
    document.getElementById("divWhileLoopAdd").innerHTML = addSum;
}

// While Loop for subtracting:
function onClickSubtracting(){
    debugger;
    let right = (numbers.length)-1;
    while(left < right){
        subSum = (numbers[right] - numbers[left])
        if(subSum == target){
            left--;
            right++;
            subCount ++;
        }else if (subSum > target){
            right++;
        }else if (subSum < target){
            left--;
        }
        alert(subCount);
    }
    document.getElementById("divWhileLoopSub").innerHTML = subSum;
}

