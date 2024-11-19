const myCount = document.getElementById("count");
let c = 0;
function incr ()
{
    c++;
    myCount.textContent=c
}
function decr ()
{
    c--;
    myCount.textContent=c
}
function reset ()
{
    c = 0;
    myCount.textContent=c
}