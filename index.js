// Code your solution in this file!
distanceFromHqInBlocks(someValue);
function distanceFromHqInBlocks(someValue) {
    if (someValue>42)
    {
    return someValue-42;
}
else{
    return 42-someValue;
}
    //returns the number of blocks given a value
  }
  distanceFromHqInFeet(someValue);
  function distanceFromHqInFeet(someValue) {
    let blocksValue=distanceFromHqInBlocks(someValue);
    return blocksValue*264;
  
  }
  distanceTravelledInFeet(start, destination);
  function distanceTravelledInFeet(start, destination) {
    let destance;
    let result;
    //returns the number of feet traveled
    if (destination>start)
    {
         destance=destination-start;
         result=destance*264;
        return result;
    }
    else 
    {
        destance=start-destination;
        result=destance*264;
       return result;

    }
  }
  calculatesFarePrice(start, destination);
  function calculatesFarePrice(start, destination)
  {
    const dictanceTravelled=distanceTravelledInFeet(start, destination);
    let result;
    if (dictanceTravelled<400)
    { result=0;
    return result;
    }
    else if (dictanceTravelled>400 && dictanceTravelled<2000)
    {
    result= ((dictanceTravelled-400)*2)/100;
    return result;

    }
    else if (dictanceTravelled>2000 && dictanceTravelled<2500 )
    {
        result= 25;
        return result;

    }
    else
    {
        result=`cannot travel that far`;
        return result;
    }
  }