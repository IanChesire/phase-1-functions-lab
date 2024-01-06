//Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - hq);
}
distanceFromHqInBlocks(42,50);
function distanceFromHqInFeet(zoo){
    return distanceFromHqInBlocks(zoo)* 264;
}
function distanceTravelledInFeet(alight, board){
    return Math.abs(alight-board) * 264;
}
distanceTravelledInFeet(60,50);

function calculatesFarePrice(alight, board){
    const maxDistance = 2500;
    let distance = distanceTravelledInFeet(alight, board);
    if(distance < 400){
        return 0;
    }
    else if(distance >= 400 && distance < 2000){
        return (distance-400)* 2/100;
    }
    else if(distance>2000 && distance < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    }
}