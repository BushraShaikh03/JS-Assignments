const cost=100
let totalcost

let qua =prompt('Enter the Quantity')
qua =Number.parseInt(qua)
if (cost * qua >1000)
{
  totalcost= cost* qua *0.9
}
else{
totalcost=cost * qua
}
console.log("Total cost:"+ totalcost)