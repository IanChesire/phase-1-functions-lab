// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const hqLocation = 42;
    return Math.abs(street - hqLocation);
};
    
let distanceFromHqInFeet = (street) => distanceFromHqInBlocks(street) * 264;

const distanceTravelledInFeet = (end, start) => Math.abs(end - start) * 264;

const maxDistance = 2500;
const calculatesFarePrice = (start, end ) => {
    let dist = distanceTravelledInFeet(start, end);
    if(dist < 400){
        return 0;
    }
    else if(dist >= 400 && dist < 2000){
        return(dist - 400) * 2/100;
    }
    else if(dist > 2000 && dist < 2500){
        return 25;
    }
    else {
       return 'cannot travel that far';
    }
}
