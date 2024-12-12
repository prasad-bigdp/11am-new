const productsDiv = document.getElementById("products");
const fetchData = async (url) =>
{
    try
    {
    const res = await fetch(url)
    const data = await res.json()
    displayData(data.products)
    }
    catch (err)
    {
        console.log("error: " + err);
    }
}
fetchData('https://dummyjson.com/products?limit=100')
const displayData = (data) =>
{
	productsDiv.textContent = ''
	console.log(data)
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
document.getElementById('nop').addEventListener('change', (e) =>
{
	console.log(e.target.value);
fetchData(`https://dummyjson.com/products?limit=${e.target.value}`)
})
document.getElementById('sort').addEventListener('change', (e) =>
{
	fetchData(`https://dummyjson.com/products?sortBy=title&order=${e.target.value}`)
})
document.getElementById("categories").addEventListener("change", (e) => {
	fetchData(`https://dummyjson.com/products/category/${e.target.value}`)
})
document.getElementById("search").addEventListener("click", () =>
{
	const sinput = document.getElementById("searchInput")
	console.log(sinput.value)
	fetchData(`https://dummyjson.com/products/search?q=${sinput.value}`)
})