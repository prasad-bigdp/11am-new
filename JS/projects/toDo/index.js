const input = document.getElementById('inp');
const button = document.getElementById('btn');
const mainDiv = document.getElementById('todos');
let todos=[]
const fun = () =>
{
    let data = {
        text:input.value
    }
    todos.push(data);
   display()
}
function display ()
{
        mainDiv.textContent = ""
     todos.forEach((val, ind) => {
				console.log(todos)
				const todo = document.createElement("div")
				todo.classList.add("todo")
				const todoText = document.createElement("p")
				todoText.textContent = val.text
				const deleteBtn = document.createElement("button")
				deleteBtn.textContent = "❎"
				deleteBtn.addEventListener("click", () => {
					let res = confirm("Are you sure?")
					if (res) {
						todos.splice(ind, 1)
						display()
					}
				})
				const completeBtn = document.createElement("button")
				completeBtn.textContent = "✅"
         completeBtn.addEventListener("click", () =>
         {
                todoText.classList.toggle('strikeOut')
                })
				todo.append(todoText, deleteBtn, completeBtn)
				mainDiv.appendChild(todo)
				input.value = ""
			})
}
button.addEventListener("click", fun)
