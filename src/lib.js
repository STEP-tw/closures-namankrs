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
  const deltaDetails = {"old" : number, delta : 0, new : number};
  return function(newNumber){
    if(newNumber == undefined) newNumber = 0;
    deltaDetails.old = deltaDetails.new;
    deltaDetails.delta = newNumber;
    deltaDetails.new = deltaDetails.old + deltaDetails.delta;
    return deltaDetails;
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
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
