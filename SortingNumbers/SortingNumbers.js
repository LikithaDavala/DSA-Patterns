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
function onClickAdding() {
    let target = 10;
    let left = 0;
    let add = [];
    let addCount = 0;
    debugger;
    let right = (numbers.length) - 1;
    while (left < right) {
        add = (numbers[left] + numbers[right]);
        if (add == target) {
            left++;
            right--;
            addCount++;
        } else if (add > target) {
            right--;
        } else if (add < target) {
            left++;
        }
    }
    document.getElementById("divWhileLoopAdd").innerHTML = addCount;
}

// While Loop for subtracting:
function onClickSubtracting() {
    let target = 10;
    let left = 0;
    let sub = [];
    let subCount = 0;
    debugger;
    let right = (numbers.length) - 1;
    while (left < right) {
        sub = (numbers[right] - numbers[left]);
        if (sub == target) {
            left++;
            right--;
            subCount++;
        } else if (sub > target) {
            right--;
        } else if (sub < target) {
            left++;
        }
    }
    document.getElementById("divWhileLoopSub").innerHTML = subCount;
}

// While Loop for Multiplication:
function onClickMultiplication() {
    let target = 10;
    let left = 0;
    let mul = [];
    let mulCount = 0;
    debugger;
    let right = (numbers.length) - 1;
    while (left < right) {
        mul = (numbers[left] * numbers[right]);
        if (mul == target) {
            left++;
            right--;
            mulCount++;
        } else if (mul > target) {
            right--;
        } else if (mul < target) {
            left++;
        }
    }
    document.getElementById("divWhileLoopMul").innerHTML = mulCount;
}
