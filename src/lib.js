const makeConstant = function(element){
  return function(){
    return element;
  }
}
           //----------------------------------//
const makeCounterFromN = function(number){
  return function(){
    return number++;
  }
}
           //-----------------------------------//
const makeCounterFromZero = function(number){
  return makeCounterFromN(0);
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
            //------------------------------//
const makeFiboGenerator = function(second = 1, first = 0 ) {
 let previous = Math.min(first,second);
 let present = Math.max(first,second);
 return function(){
   let result = previous;
   let next = previous + present;
   previous = present;
   present = next;
   return result;
 }
}
            //------------------------------//

const makeCycler = function(numbers){
  list = numbers.slice(0,numbers.length);
  return function(){
    result = list[0];
    list.push(list.shift());
    return result;
  }
}
            //------------------------------//

const curry = function(funcRef,firstArgument){
  return function(secondArgument,thirdArgument){
    return funcRef(firstArgument,secondArgument,thirdArgument)
  }
}
            //------------------------------//

const compose = function(funcRef1,funcRef2){
  return function(data1,data2){
    return funcRef1(funcRef2(data1,data2));
  }
}
            //------------------------------//

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
