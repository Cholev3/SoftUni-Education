function guineaPig(arr) {
    let foodInGrams = Number(arr[0]) * 1000;
    let hayInGrams = Number(arr[1]) * 1000;
    let coverInGrams = Number(arr[2]) * 1000;
    let weightInGrams = Number(arr[3]) * 1000;
    let days = 30;

    for (let i = 1; i <= 30; i++) {
        foodInGrams -= 300;
        let dailyHay = foodInGrams * 0.05;
        if (i % 2 == 0) {

            hayInGrams -= dailyHay;
        }
        if (i % 3 == 0) {
            coverInGrams -= weightInGrams / 3
        }

        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);

}
guineaPig(["1",
    "1.5",
    "3",
    "1.5"
]);