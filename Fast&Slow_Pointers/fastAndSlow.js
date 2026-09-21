const bigArray =[];
function onClickFastAndSlow(){
    for(i=0; i<5 ; i++){
        bigArray.push(Math.trunc(Math.random()*Math.pow(10,6)));
    }
    console.log(bigArray)
}
