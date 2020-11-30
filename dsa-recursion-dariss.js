//sheep counting
function countSheep(sheep) {
  //base case
  if (sheep === 0) {
    console.log('All sheep jumped ovre the fence');
    return;
  }
  //recurring case
  console.log(`${sheep}: Another sheep jumps over the fence`);
  countSheep(sheep-1);
}

countSheep(3);

// //calculator
function powerCal(x,y){
  //base case
  if (y === 1 ){
    return x;
  }
  if ( y <=0 ){
    console.log('exponent should be >= 0');
    return;
  }
  //recursive case
  const answer = powerCal(x, y-1);
  return x * answer;
}
powerCal(10, 2);

//reverse string
function reverseString(string){
  //base case
  if (string === '')
    return '';
  else
    return reverseString(string.substr(1)) + string.charAt(0);
}
reverseString('kittens');

// triangle
function nthTriangle(n){
  //base case
  if (n === 1){
    return n;
  } 
  else if (n <= 0) 
    return 'does not work';
  
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
    return 0;
  if (n == 1)
    return 1;
  else
    return ourFib(n-1) + ourFib(n-2);
}
ourFib(7);

//Factorial
function factsOnFacts(n){
  if(n === 1)
    return n;
  return n * factsOnFacts(n-1);
}
factsOnFacts(5);

//Find a way out of the maze
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let myLargeMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
const maze = (x = 0, y = 0, mazeArr) => {
  const rows = mazeArr.length - 1;
  const columns = mazeArr[0].length - 1;
  if (x < 0 || x > columns || y < 0 || y > rows)
    return 'Please use a x and y value >= 0';
  if (mazeArr[y][x] === 'e')
    return ` Yay! Reached the goal at ${x}:${y}`;
  if (mazeArr[y][x + 1] !== '*' && x < columns) {
    mazeArr[y][x] = '*';
    return 'R' + maze(x + 1, y, mazeArr);
  }
  if (mazeArr[y][x - 1] !== '*' && x >= 0) {
    mazeArr[y][x] = '*';
    return 'L' + maze(x - 1, y, mazeArr);
  }
  if (mazeArr[y + 1][x] !== '*' && y < rows) {
    mazeArr[y][x] = '*';
    return 'D' + maze(x, y + 1, mazeArr);
  }
  if (mazeArr[y - 1][x] !== '*' && y >= 0) {
    mazeArr[y][x] = '*';
    return 'U' + maze(x, y - 1, mazeArr);
  }
};
console.log(maze(0, 0, mySmallMaze));
console.log(maze(0, 0, myLargeMaze));

//Find All the ways out of the maze
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];
  function copyMaze(maze) {
    const copy = [];
    maze.forEach(row => {
      copy.push([...row]);
    });
    return copy;
  }
  function pathFinder(maze, x = 0, y = 0, currPath = '', paths = []) {
    const currRow = maze[y];
    const directions = {
      'R': (x, y) => [x + 1, y],
      'D': (x, y) => [x, y + 1],
      'L': (x, y) => [x - 1, y],
      'U': (x, y) => [x, y - 1]
    };
    if(!currRow) return false;
    const currSpace = currRow[x];
    if(!currSpace) return false;
    if(currSpace === '*') return false;
    if(currSpace === 'e') {
      console.log('Path to the exit:', currPath);
      paths.push(currPath);
      return true;
    }
    currRow[x] = '*';
    for (const [dir, func] of Object.entries(directions)) {
      pathFinder(copyMaze(maze), ...func(x, y), currPath + dir, paths);
    }
    return paths;
  }
  pathFinder(bigMaze);
//Anagrams

//Organization Chart

//Binary Representation