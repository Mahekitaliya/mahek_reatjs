//12...........//


let n = 4;
let i;
for ( i = 2 ; i < n ; i++)
{
    if(n % i == 0)
    {
        document.write(`${i} number : ${n} is not prime `);
        break;
    }
}
if(i == n)
{
    document.write(`number : ${n} is prime` );
}