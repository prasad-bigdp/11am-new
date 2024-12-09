const m = new Map();
console.log(m)
m.set('name', "prasad")
m.set(20, 25)
m.set('name', 'Raj')
console.log(m.get('name'))

//Set
const s = new Set();
console.log(s);
s.add(5);
s.add(6);
s.add(5);
console.log(s.size)

//Symbols
let sy = Symbol("prasad")
console.log(typeof sy);
// let obj = {
//     sy:Symbol("my name value")
// }
// console.log(obj.sy)

//RegExp
const rx = /ab*/;
document.getElementById('form').addEventListener('submit',fun)
function fun (e)
{
    e.preventDefault();
    const inp = document.getElementById('inp')
    console.log(inp.value)
    if (rx.test(inp.value))
    {
     alert("correct")   
    }
    else
    {
       alert("incorrect")    
    }
}






