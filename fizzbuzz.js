for (let i=1; i<=100; i++){
    n ="";
    if (i%3==0) n+="Fizz"
    if (i%5==0) n+="Buzz";
    if (i%5!==0&&i%3!==0) n += i;
    console.log(n);
}