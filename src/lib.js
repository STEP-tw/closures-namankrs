const makeConstant = function(argument){
  const result = argument;
  return function(element){
    return result;
  }
}
           //----------------------------------//
const makeCounterFromN = function(number){
  let count = number-1;
  return function(){
    count+=1;
    return count;
  }
}
           //-----------------------------------//
const makeCounterFromZero = function(number){
  let count = -1;
  return function(){
    count+=1;
    return count;
  }
}
        //----------------------------------//
const makeDeltaTracker = function(number){
  let old = number; 
  let delta = 0; 
  let latest = number;
  return function(newNumber){
    if(newNumber == undefined) 
      newNumber = 0;
    old = latest;
    delta = newNumber;
    latest = old + delta;
    return {old : old, delta : delta, new : latest};
  }
}
const makeFiboGenerator = function(firstTerm,secondTerm){
  if(firstTerm == undefined && secondTerm == undefined){
    firstTerm = 0;
    secondTerm = 2;
  }
  if (secondTerm == undefined){
    secondTerm = firstTerm+1;
    firstTerm = 0;
  }
  secondTerm--;
  firstTerm -= secondTerm;
  return function(){
    let nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    return nextTerm;
  }
}
const makeCycler = function(numbers){
  list = numbers.slice(0,numbers.length);
  return function(){
    result = list[0];
    list.push(list.shift());
    return result;
  }
}
const curry = function(funcRef,firstArgument){
  return function(secondArgument,thirdArgument){
    return funcRef(firstArgument,secondArgument,thirdArgument)
  }
}
const compose = function(funcRef1,funcRef2){
  return function(data1,data2){
    return funcRef1(funcRef2(data1,data2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
