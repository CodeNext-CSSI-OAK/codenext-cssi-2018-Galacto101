// Author: Shae Origunwa

let readline = require('readline-sync');

console.log ("******************************************************************" );
console.log ("bLeep blOop! i'm a CHanGE macHINe!");
let cents = Number(readline.question ('Please enter cents as a positive integer:'));
console.log (cents + " cents makes: ");
let quarters = Math.floor(cents / 25);
console.log (quarters + " quarters");
cents = cents % 25;
let dimes = Math.floor(cents/10 );
//let dimes = Math.floor(d / 10);
console.log (dimes + " dimes");
cents = cents % 10;
let nickles = Math.floor(cents/5);
//let nickles = Math.floor(n / 5);
console.log (nickles + " nickles");
cents = cents % 5 ;
let pennies = Math.floor( cents/1 );
//let pennies = Math.floor(p / 1);
console.log (pennies + " pennies");
console.log ("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!" );
console.log ("*****************************************************************");
