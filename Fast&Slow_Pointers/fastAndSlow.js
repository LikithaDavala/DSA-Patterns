const bigArray =[];
function onClickFastAndSlow(){
    for(i=0; i<5 ; i++){
        let result = bigArray.push(Math.trunc(Math.random()*Math.pow(10,6)));
    }
    console.log(result);
}
