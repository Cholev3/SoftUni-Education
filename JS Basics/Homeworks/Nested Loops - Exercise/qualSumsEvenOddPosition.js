function qualSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printline = ` `;
    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }

        }
        if (evenSum === oddSum) {
            printline += ` ${i}`;
        }

    }
    console.log(printline);

}
qualSumsEvenOddPosition(["100000",
    "100050"]);