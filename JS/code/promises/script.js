
// setTimeout(() => console.log("Take the chocolate"), 5000)
let x=26
let p = new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
        if (x > 25)
        {
           resolve(x)
        }
        else
        {
            reject("bye")
        }
    },10000)
})
p
    .then((val) =>
    {
        val++;
        console.log("my value is : "+val)
    })
    .catch((err) =>console.log("error: " + err))





let y=25
let obj = new Promise((resolve,reject) =>
{
    if (y < 30)
    {
         resolve(y)
    }
    else
    {
        reject("i'm rejecting")
   }
})
// promise chaining
obj
    .then((res) => res*2)
    .then((res2) => res2*2)
    .then((res3) =>  console.log("spend: "+res3) )//spend: 100
.catch((reason)=>console.log("reason: "+reason))







//  checkout(cart(product(home)))

// home
//     .then(product)
//     .the(cart)
//     .then(checkout)
//     .catch()
 



