let user = {
    name: "Tillu",
    age: 21,
    fun:function(){console.log("I don't like fun")}
}
console.log(user)
console.log(user.name, user['name']);
console.log(Object.keys(user), Object.values(user), Object.entries(user))
console.log(user.fun())
let obj2 = Object.create(user);
let obj3= Object.create(obj2)
console.log(obj3)





