const str = "JavaSript is a versitile language";

console.log("initial String:", str);

const words = str.split(" ")
console.log("Using split():", words);

// Extract a portion of the string from index 0 to  10

const sliced = str.slice(0, 10);
console.log("using sliced():", sliced);


const newStr = str.concat("loved by the developers.");

console.log("Using concat():", newStr);


const replaceStr = str.replace("versitile", "powerful");
console.log("using replace()", replaceStr);

// Convert the string to uppercase.

const upperCase = str.toUpperCase();
console.log("using toUppercase()", upperCase);

// Convert to lower case.

const lowerCase = str.toLowerCase();
console.log("using toLowerCase():", lowerCase);

// Check  if the string contains the word "versatile"

const containsWord = str.includes("versitile");
console.log("Using includes()", containsWord);

const index = str.indexOf("language");
console.log("Using indeexOf()", index);

// Remove leading and trailing whitespace

const strWithSpaces = "     Hello JavaScript!       ";
const trimmedstr = strWithSpaces.trim();

console.log(strWithSpaces);
console.log("Using trim()", trimmedstr);


const charAtFive = str.charAt(5);
console.log("Using charAt():", charAtFive);


// Split a CVS string into an array of strings
const csvData = "Apple,Orange,Bannana";
const fruits = csvData.split(",");
console.log("Using split() woth a comma delimiter:", fruits);









