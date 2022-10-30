
let findFactorial = (num) => {
    if (num == 0 || num == 1) return num;
    return num * findFactorial(num - 1);
}


let n = 5;
let fact = findFactorial(n);

console.log(`factorial of ${n} :`, fact);