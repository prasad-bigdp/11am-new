const myCount = document.getElementById("count");
console.log(myCount.innerText)
const evenOdd = document.getElementById("evenOdd");
function isEvenOdd ()
{
    if (c % 2 == 0)
    {
        evenOdd.textContent="EVEN"
    }
    else
    {
                evenOdd.textContent = "ODD"
    }
}
let c = 0;
isEvenOdd()
function incr ()
{
    c++;
    myCount.textContent = c;
    isEvenOdd()
}
function decr ()
{
    c--;
    myCount.textContent = c;
    isEvenOdd()
}
function reset ()
{
    c = 0;
    myCount.textContent = c;
    isEvenOdd()
}