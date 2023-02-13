let held =prompt('Enter the classes held')
held =Number.parseInt(held)
let attend =prompt(' Enter the classes attend')
attend =Number.parseInt(attend)
const percent = (attend/held)*100
console.log("Your attendance percentage is " + percent + "% .")
let allowed = true 
if ( percent < 75 )
  allowed = false 
if (allowed)
  console.log(`Your allowed in the Exam. `);
console.log(`Your not allowed in the Exam. `);