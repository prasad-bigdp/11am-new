const myDiv = document.getElementById('box');
const myInput = document.getElementById("inp")
// function bringData ()
// {
//     myDiv.innerHTML = `<img src="https://pixlr.com/images/generator/photo-generator.webp" alt="image" height="200"><br>
    
//     <p>jdgf kjdhsj dhj jdg jhghjhvf</p>
//     <button><a>click me</a></button>`
//     alert(myInput.value)
// }
// use html to display an input box /textarea and a button. when user enters some data in box and click the button, it should print total number of characters user enter
function bringData ()
{
    const str = myInput.value;
    myDiv.style.backgroundColor = "red";
    myDiv.classList.add('x')
    myDiv.textContent = `${str.split('').reverse().join('')}`
   
}
// accept an input value and on click of button, print its reverse











