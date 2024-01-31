// Print a pattern using a Do-while loop

{
    let i=1,j;
    do
    {
        j=1;
        do
        {
            document.write(j);
            j++;
        }while(j<=3);
        document.write("<br>");
        i++;
    } while(i<=5);
}