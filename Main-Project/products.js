const productsDiv = document.getElementById("products");
const fetchData = async () =>
{
    try
    {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    displayData(data.products)
    }
    catch (err)
    {
        console.log("error: " + err);
    }
}
fetchData()
const displayData = (data) =>
{
    data.forEach((c) => {
			const div = document.createElement("div")
			div.classList.add("col-6", "col-md-4", "col-lg-3", "product")
			const image = document.createElement("img")
			image.src = c.thumbnail
			image.alt = c.title
			const productTitle = document.createElement("h3")
			productTitle.textContent = c.title
			const productPrice = document.createElement("p")
			productPrice.textContent = "Price: ₹" + c.price
			div.append(image, productTitle, productPrice)
			productsDiv.appendChild(div)
		})
}