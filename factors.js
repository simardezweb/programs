const number = parseInt(prompt('Enter a positive integer: '));

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i + " is a factor of " + number)
    }
}