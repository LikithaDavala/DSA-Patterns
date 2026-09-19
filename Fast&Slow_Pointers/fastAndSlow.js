const bigArray =[];
function onClickFastAndSlow(){
    for(i=0; i<=500000 ; i++){
        bigArray.push(Math.trunc(Math.random()*Math.pow(10,3)));
    }
    console.log(bigArray)
}
