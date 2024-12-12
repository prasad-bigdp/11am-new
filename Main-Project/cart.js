let items = JSON.parse(localStorage.getItem("items"))
console.log(items);
document.getElementById('badge').textContent = items.length

const mainDiv = document.getElementById('cart');
function displayData (items)
{
    items.forEach((i) =>
    {
        const div = document.createElement('div');
        div.classList.add('row');
        const image = document.createElement('img');
        image.classList.add("col")
        image.src = i.thumbnail;
        image.alt = i.title;
        image.height = "100px";
        image.width = "100px";
        console.log(image.src)
        const title = document.createElement('h2');
        title.classList.add("col")
        title.textContent = i.title;
        const price = document.createElement('p');
        price.classList.add("col")
        price.textContent = "₹" + i.price;
        div.append(image, title,price)
        mainDiv.appendChild(div)
    })
}
displayData(items)