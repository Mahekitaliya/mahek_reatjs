// Calculate factorial of a number using a for loop

{
    let n = 3;
    let fact = 1;
    let i;
    console.log("Factorial number");
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(fact);
}