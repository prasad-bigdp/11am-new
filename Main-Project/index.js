const categoriesDiv = document.getElementById('cat');
const fetchData = () =>
{
    fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data)=>displayCategories(data))
        .catch(() =>console.log("error"))
}
const fetchData2 = () =>
{
    fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => displayTopProducts(data.products))
			.catch(() => console.log("error"))
}
fetchData()
fetchData2()
const displayCategories = (data) =>
{
    data.forEach((c) =>
    {
        const div = document.createElement('div');
        div.classList.add("col-6","col-md-4","col-lg-2","category")
        const catTitle = document.createElement('h3')
        catTitle.textContent = c.name;
        div.appendChild(catTitle)
        categoriesDiv.appendChild(div)
    })
}
const topDiv = document.getElementById("top")
const displayTopProducts = (data) =>
{
    console.log(data)
	data.forEach((c) => {
		const div = document.createElement("div")
        div.classList.add("col-6", "col-md-4", "col-lg-3", "product")
        const image = document.createElement('img');
        image.src = c.thumbnail;
        image.alt= c.title
		const productTitle = document.createElement("h3")
        productTitle.textContent = c.title;
        const productPrice = document.createElement('p');
        productPrice.textContent = "Price: ₹" + c.price;
		div.append(image,productTitle,productPrice)
		topDiv.appendChild(div)
	})
}