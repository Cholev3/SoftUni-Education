function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);

    let price = 0;

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee": price = amount * 0.50; break;
                case "water": price = amount * 0.80; break;
                case "beer": price = amount * 1.20; break;
                case "sweets": price = amount * 1.45; break;
                case "peanuts": price = amount * 1.60; break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": price = amount * 0.40; break;
                case "water": price = amount * 0.70; break;
                case "beer": price = amount * 1.15; break;
                case "sweets": price = amount * 1.30; break;
                case "peanuts": price = amount * 1.50; break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": price = amount * 0.45; break;
                case "water": price = amount * 0.70; break;
                case "beer": price = amount * 1.10; break;
                case "sweets": price = amount * 1.35; break;
                case "peanuts": price = amount * 1.55; break;
            }
            break;
    }

    console.log(price);
}
smallShop(["coffee","Plovdiv","2"]);