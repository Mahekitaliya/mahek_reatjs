// Calculate factorial of a number using a while loop

{
    let n = 5;
    let fact = 1;
    let i = 1;
    console.log("Factorial number");
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    console.log(fact);
}
