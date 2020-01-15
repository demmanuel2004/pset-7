function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  f1 = a[0];
  f2 = b[0];

  if( f1 == f2) {
    return true;
  }

  
  l1 = a.slice(-1)[0];  
  l2 = b.slice(-1)[0];
  
  if( l1 == l2 ) {
    return true;
  }

  return false;
  
}

function endsMeet(values, n) {

  if (!values || values.length === 0 ) {
    return [];
  }

  if( n <= 0) {
    return [];
  }

  if( values.length < n ) { 
    return [];
  }

  let a1 = values.slice(0, n); 
  let a2 = values.slice(-n); 
  return a1.concat(a2); 
}

function difference(numbers) {
 
   if (!numbers || numbers.length === 0) {
    return undefined;
  }

  var largest = numbers[0];
  var smallest = numbers[0];

  for (i = 0; i < numbers.length; i++) {

    if (isNaN(numbers[i])) {
      return undefined;
    }
    if (largest < numbers[i]) {
      largest = numbers[i];
    }

    if (smallest > numbers[i]) {
      smallest = numbers[i];
    }
  }

  return largest - smallest;

}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
