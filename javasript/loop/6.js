//Generate the Fibonacci sequence using a for loop

{
    let i = 1;
    let a = 0;
    let n = 5;
    let b = 1;
    let c;
    console.log("Fibonacci sequence:");
    for(i=1; i<=n ; i++)
    {
        c = a+b;
        a = b;
        b = c;
        console.log(a);
    } 
}