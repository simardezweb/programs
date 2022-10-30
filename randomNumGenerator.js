

let getRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start) + start);
}

let start = 20;
let end = 90;
let randomNum = getRandomNumber(start, end);

console.log("randomNum", randomNum);