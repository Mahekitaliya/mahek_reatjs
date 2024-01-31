// Calculate factorial of a number using a Do-while loop

{
    let n = 4;
    let fact = 1;
    let i = 1;
    console.log("Factorial number");
    do {
        fact = fact * i;
        i++;
    } while (i <= n);
    console.log(fact);
}