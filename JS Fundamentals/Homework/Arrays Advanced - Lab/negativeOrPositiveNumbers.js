function negativeOrPositiveNumbers(arr) {
    let result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {

        console.log(num);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);