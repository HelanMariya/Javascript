// [id,name,price,stock]
product=[[1,'hide and seek',50,20],
         [2,'lays',20,80],
         [3,'oreo',40,100],
         [4,'parlaG',25,0],
         [5,'tiger',20,30] ,
         [6,'unibic',60,20] ,
         [5,'good day',70,20] , ]
 //1. display all product name
 console.log("product Name");
const name=product.forEach(a=>console.log(a[1]))


 
//  2.display product whose price<rs.50
console.log("product whose price<rs.50");
const price=product.filter(a=>a[2]<50)
console.log(price);

// 3.print price of oreo
console.log("price of oreo");
const oreo=product.find(a=>a[1]=="oreo")
console.log(`${oreo[2]}`)
// 4.print costly product name
console.log("costly product name");
console.log(`${product.reduce((a,b)=>a[2]>b[2]?a:b)}`)

// 5.display out of stock product name
console.log("out of stock product name");
console.log(`${product.find((a)=>a[3]==0)}`)
// 6.sort products based on stock in decending order
console.log("products based on stock in decending order");
console.log(`${product.sort((a,b)=>b[3]-a[3])}`)

// 7.print product having maximum avilable stock
console.log(`maximum avilable stock:${product.reduce((a,b)=>a[3]>b[3]?a:b)}`)
