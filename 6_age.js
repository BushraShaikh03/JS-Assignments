let age1 =prompt(`Enter the age of 1st person`)
age1 =Number.parseInt(age1)
let age2 =prompt(`Enter the age of 2nd person`)
age2 =Number.parseInt(age2)
let age3 =prompt(`Enter the age of 3th person`)
age3 =Number.parseInt(age3)
let oldest = age1 
let youngest = age1 
if (age2 > oldest) 
  oldest = age2 
if (age3 > oldest)
 oldest = age3 
if (age2 < youngest) 
  youngest = age2 
if (age3 < youngest)
  youngest = age3
console.log("oldest person is " + oldest + " years old ")
console.log("youngest person is " + youngest + " years old ")
