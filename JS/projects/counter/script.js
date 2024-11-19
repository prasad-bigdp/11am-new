const myCount = document.getElementById("count");
let c = 0;
function incr() {
    if (c < 21) {
        c++;
    } else {
        alert('Count should be less then 20')
    }
    myCount.textContent = c
}
function decr() {
    if (c > 0) {
        c--;
    } else {
        alert("less then 0 shouldn't be")
    }
    myCount.textContent = c
}
function reset() {
    c = 0;
    myCount.textContent = c
}