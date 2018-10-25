const makeConstant = function(argument){
  const result = argument;
  return function(element){
    return result;
  }
}
           //----------------------------------//
const makeCounterFromN = undefined;
const makeCounterFromZero = function(number){
  let count = -1;
  return function(){
    count+=1;
    return count;
  }
}
        //----------------------------------//
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
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
