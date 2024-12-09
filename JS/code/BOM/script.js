let x = 20;
console.log(x)

// getting url locations
console.log(window.location)
// document.getElementById("reload").addEventListener("click", () => {
// 	window.location.replace("https://www.amazon.com")
// })
const vd= document.getElementById('vd')
// getting users location
window.navigator.geolocation.getCurrentPosition((pos) =>
{
    console.log(pos.coords.latitude, pos.coords.longitude,pos.coords.accuracy)
}, (err) =>
{
    console.log(err)
})
//video,audio
document.getElementById('btn').addEventListener('click', () =>
{
    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((val) =>
        {
            vd.srcObject = val;
        })
        .catch((err) =>
        {
        console.log("error"+err)
    })
})
document.getElementById('btn2').addEventListener('click', () =>
{
    console.log("stop")
    
    vd.src=''
})


//Browsers have storage such as localStore,sessionStorage
// sessionStorage is closed/cleared once the browser is closed but localstorage stays in browser until we clear it out

window.localStorage.setItem('name', 'prasad');
window.localStorage.setItem('age', 28);
let y = localStorage.getItem('name');
console.log(y)

//cookies,cache,session
//cookie -  small text files that store on user's device by browser
// cache - cache storage used to load pages fastly by storing already loaded data as temporary storage
// sessions -- temporary memory for time to logged in or similar actions













