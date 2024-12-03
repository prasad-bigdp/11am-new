const mainDiv = document.getElementById("mainDiv")
const fetchData = (url) =>
{
    fetch(url)
        .then((res) => res.json())
        .then((data)=>displayData(data))
        .catch((err) => console.log(err))
}
fetchData("https://fakestoreapi.com/products")
const displayData = (data) =>
{
    console.log(data);
    mainDiv.textContent=""
    data.forEach((val) =>
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add("product")
        const productImage = document.createElement('img');
        productImage.src = val.image
        productImage.alt = val.title
        const productTitle = document.createElement('h2');
        productTitle.textContent = val.title
        const productPrice = document.createElement('p');
        productPrice.textContent= "Price: ₹"+val.price
        const productButton = document.createElement('button');
        productButton.textContent="Add to cart"
        productDiv.append(productImage, productTitle, productPrice, productButton);
        mainDiv.appendChild(productDiv)
    })
}
const navBtn = document.getElementById("navBtn")
navBtn.addEventListener('click', (event) =>
{
    console.log(event.target.textContent)
    let cat = event.target.textContent;
    fetchData(`https://fakestoreapi.com/products/category/${cat}`)
})




