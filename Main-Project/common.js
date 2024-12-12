// let count = JSON.parse(localStorage.getItem("items")).length ?? 0
let cartArray=[]
function addtoCart (pro)
{
    console.log(pro);
    cartArray.push(pro);
        localStorage.setItem("items", JSON.stringify(cartArray))

    localStorage.setItem("itemsCount",JSON.parse(localStorage.getItem("items")).length)
    console.log(JSON.parse(localStorage.getItem("items")).length)
    console.log(localStorage)
    document.getElementById("badge").textContent =
			localStorage.getItem("itemsCount")
}