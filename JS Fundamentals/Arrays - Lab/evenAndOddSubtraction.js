function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let element of arr) {
        if (element % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }

    console.log(evenSum - oddSum);

}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);