
let percent 
let salary = prompt('Enter your salary')
salary =Number.parseInt(salary)
let year = prompt('Enter years of service')
year =Number.parseInt(year)
if (salary>1000&&salary<100000,year>5){
  percent = salary * 0.1
  
  }
else {
  percent = salary * 0.05
  }
console.log("Percent :"+ percent)