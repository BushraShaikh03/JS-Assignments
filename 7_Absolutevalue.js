let num =prompt('Enter the number')
num =Number.parseInt(num)  
let absolutevalue = num 
if (num < 0) {
  absolutevalue =-num;
}
console.log("The absolute value of the " + num + " is " + absolutevalue + ".");
