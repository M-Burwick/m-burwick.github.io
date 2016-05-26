// This is the proper way to start a javascript library
(function() {
  
// This makes the arguments variable behave the way we want it to and a few
// other things. For more info: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(anything){
    return anything;
}

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of: 
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(anything) {
  if (typeof(anything) == "string"){
      return "string";
  }  else if (typeof(anything) == "number"){
      return "number";
  }  else if (typeof(anything) == "undefined"){
      return "undefined";
  }  else if (anything ===  null ){
      return "null";
  }  else if (typeof(anything) == "boolean"){
      return "boolean";
  } else if (Array.isArray (anything)){
      return "array"; 
  }  else if (typeof(anything) == "object" ){
      return "object";
  }  else if (typeof(anything) == "function"){
      return "function";
  }
   
}


/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.first = function (array, number) {
    if (!Array.isArray(array)){
        return [];
    } 
    else if (!typeof(number) === "number" || typeof(number) === "undefined"){
        return array[0];
    }
    var num = [];
    for (var i = 0; i < number; i++){
         num.push(array[i]);
    }
   
   var num2 = [];
   
   for (var j = 0; j < array.length; j++){
       num2.push(array[j]);
   }
   if (array.length > number) {
       return num}
    else {return num2}
   
};    

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.last = function (array, number){
    if (!Array.isArray(array)) {
        return [];
    }else if (!typeof(number === 'number') || typeof(number) === 'undefined')   {
        return array[array.length - 1] ;   
    } else if ( number < 0) {
        return [];
    }   
    var last = [];
    if (number > array.length - 1 ){
        for (var j = 0; j < array.length; j++){
            last.push(array[j]);
        }

    } else {
        for (var i = array.length - 1; i > 0   ; i--){
        last.unshift(array[i]);
        }
    }    
    return last;

}
 

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments: 
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); 
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, funct){
   
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            funct(collection[i], i, collection);
        }
    }
     
     if (_.typeOf(collection) === "object"){
        for (var key in collection){
            funct(collection[key], key, collection)
        }
    }
    
};


/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array, value) {
    for (var i = 0; i < array.length; i++){
        if (value === array[i]){
            return i;
        } 
         
    } return -1
    
} 




/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function (array, funct){
    var newArray = [];
    _.each(array, function(el, i, list){
        if (funct(el, i, list)){
            newArray.push(el);
        }
    });
    return newArray;
    
};




/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = (array, funct) => 
    _.filter(array, (et, i, list) => !funct(et, i,list));    



/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = (array, funct) =>  [_.filter (array, funct), _.reject(array, funct)] ;



/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = (array) => {
    let newArray = [];
    _.each(array, (el, i, array) => {
        if (_.indexOf(newArray, el) === -1) newArray.push(el);
    });
    return newArray;
};    


/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = (col, fn) => {
    let newArray = [];
    _.each(col, function (et, i, list) {
        newArray.push(fn (et, i, list));
    });
    return newArray
};
    

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = (array, prop) =>
    _.map(array, function (obj) {
        return obj[prop];
    } );

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = (array, value) =>
        array.indexOf(value) == -1 ? false : true;



/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every =  function (collection, fn){
    var answer = true;
    if (fn === undefined) {
            fn = _.identity;
    }    
        _.each(collection, function (et, i , list){
            if (fn (et, i, list) === false){
                answer = false;
            }
    });
    return answer;
};    


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, fn) {
    var answer = false;
        if ( fn === undefined){
            fn = _.identity;
        }
    _.each (collection , function (el, i, list){
       if (fn( el, i, list) === true) {
            answer = true;
       }  
    });  
    return answer;
};

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
*/

_.reduce = (collection, fn, seed) => {
    let prev
    
    if (seed !== undefined){
        prev = seed;
        _.each(collection, (el, i, col) => prev = fn (prev, el, i));
    } 
    else {
        prev = collection[0];
        _.each(collection, (el, i, col) => {
            if (i === 0) return;
            prev = fn(prev, el, i);
        });
    }    
    return prev;
}





/*
_.reduce = function (array, fn, seed) {
    var finalValue = "";
    var previousResult = "";
    var middleResults = "";
    _.each(array, function(pr, el, i){
        if (seed === undefined) {
            previousResult = fn(el, el, i);
        }
        if (array[i] === 0) {
            previousResult = fn(seed, el, i);
        } 
        if (array[i] > 0 && array[array.length -2] < array.length){
            middleResults = fn(previousResult, el, i);
        }
        
        if (array.length - 1 === i ){
            finalValue = fn(middleResults, el, i);
        }
        if (array.length - (array.length - 1) < i){
            middleResults = fn(previousResult, el, i);
        }
           
    });
    if ( previousResult > middleResults) {
        return previousResult;
    } 
    if (middleResults > finalValue) {
        return middleResults;
    }
    if (finalValue > middleResults){
        return finalValue;
    }    
}; 
*/
/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = (obj1, obj2, ...rest) => {
    let args = [obj1, obj2].concat(rest);
    _.reduce(args, (memo, el, key) => {
        _.reduce(el, (memo, el, key) => {
            memo[key] = el;
            return memo;
        }, obj1);
    }, args[0]);
    
    return args[0];
};



window._=_;
// This is the proper way to end a javascript library
}());
