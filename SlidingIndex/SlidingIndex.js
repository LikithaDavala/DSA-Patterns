let array = [4, 7, 5, 9, 3, 2, 8];
let bigArray = [];
let k=3
function onClickSlidingWindowIndex(){
    debugger;
    for(i=0; i<array.length - k; i++){
        let subArray =[];
        for(j=i; j<i+k; j++){
            subArray.push(array(j));
        }
        bigArray.push(subArray);
    }
    console.log(bigArray);
}
//index
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