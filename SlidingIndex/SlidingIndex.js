let array = [4, 7, 5, 9, 3, 2, 8, 10, 16, 14];
let sum = [];
let bigArray = [];
let k=3
function onClickSlidingWindowIndex(){
    debugger;
    for(i=0; i<=array.length - k; i++){
        let subArray =[];
        let content=0;
        for(j=i; j<i+k; j++){
            subArray.push(array[j]);
            content += array[j]
        }
        bigArray.push(subArray);
        sum.push(content);
    }
    console.log(bigArray);
    console.log(sum);
    console.log(Math.max(...sum));
}


//Sliding Window Index
// let bigArray = [];
// let k=3
// function onClickSlidingWindowIndex(){
//     debugger;
//     for(i=0; i<4; i++){
//         let subArray =[];
//         for(j=i; j<i+k; j++){
//             subArray.push(j);
//         }
//         bigArray.push(subArray);
//     }
//     console.log(bigArray);
// }


//Sliding Window Index inSubArray:
// let array = [4, 7, 5, 9, 3, 2, 8];
// let bigArray = [];
// let sumArray = [];
// let k=3
// function onClickSlidingWindowIndex(){
//     debugger;
//     for(i=0; i<=array.length - k; i++){
//         let subArray =[];
//         for(j=i; j<i+k; j++){
//             subArray.push(array(j));
//         }
//         bigArray.push(subArray);
//     }
//     console.log(bigArray);
// }

// let numbers = [];
// let arraySum = [];
// function onClickPush(){
//     debugger;
//     let number = Number(document.getElementById("txtNumber").value);
//     numbers.push(number);
//     document.getElementById("divPush").innerHTML = numbers;
//     document.getElementById("txtNumber").value = "";
// }
 
// function onClickAdd(){
//     debugger;
//       let sumOfArray = 0;
//     for(i=0; i < numbers.length; i++){
//         sumOfArray += numbers[i];
//     }
//     arraySum.push(sumOfArray);
//     document.getElementById("divAdd").innerHTML = arraySum;
//     document.getElementById("divMax").innerHTML = Math.max(...arraySum);  //spread operator is used for converting array to arguments ex:[10, 20, 30] = 10,20,30
//     numbers = [];
// }