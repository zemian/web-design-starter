function fib(n) {
    let a = 0, b = 1;
    while (a < n) {
        process.stdout.write(a + " ");
        a = b, b = a+b;
    }
    process.stdout.write("\n");
}
fib(1000);