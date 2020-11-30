//sheep counting
function countSheep(sheep) {
  //base case
  if (sheep === 0) {
    console.log('All sheep jumped ovre the fence')
    return
  }
  //recurring case
  console.log(`${sheep}: Another sheep jumps over the fence`)
  countSheep(sheep-1);
}

countSheep(3)

// //calculator
function powerCal(x,y){
  //base case
  if (y === 1 ){
    return x
  }
  if ( y <=0 ){
  console.log('exponent should be >= 0')
  return
  }
  //recursive case
  const answer = powerCal(x, y-1);
  return x * answer
}
powerCal(10, 2)

//reverse string
function reverseString(string){
  //base case
  if (string === '')
    return ''
   else
  return reverseString(string.substr(1)) + string.charAt(0)
}
  reverseString('kittens')

// triangle
function nthTriangle(n){
  //base case
  if (n === 1){
  return n;
  } 
  else if (n <= 0) 
  return `does not work`;
  
  return n + nthTriangle(n -1);
}
console.log(`nthTriangle: ${nthTriangle(10)}`);
console.log(`nthTriangle: ${nthTriangle(2)}`);
console.log(`nthTriangle: ${nthTriangle(19)}`);

// String Splitter
function stringSplitter(string, separator){
  let index = string.indexOf(separator);
  //base case
  if(index === -1)
    return [string];
  //general case
    return [string.slice(0, index)].concat(stringSplitter(string.slice(index + separator.length), separator));
}
console.log(stringSplitter('02/20/2020', '/'));


// Fibonacci
function ourFib(n){
  //base case
  if(n == 0)
    return 0
  if (n == 1)
    return 1
  else
    return ourFib(n-1) + ourFib(n-2)
}
ourFib(7)

//Factorial
function factsOnFacts(n){
  if(n === 1)
    return n
  return n * factsOnFacts(n-1)
}
factsOnFacts(5)