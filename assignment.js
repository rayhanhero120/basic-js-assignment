// Problem :1---------------------------------------------------------------------------

function seerToMon(seer) {
    if (seer > 0) {
        let mon = seer / 40;
        return mon;
    }

    // Error messsage
    else {
        return 'Invalid input';
    }

}


let mySeers = 120;
let mon = seerToMon(mySeers);
console.log(mon);



// problem: 2--------------------------------------------------------------------------

function totalSales(tShirtQuantity, pantQuantity, shoeQuantity) {


    if (tShirtQuantity >= 0 && pantQuantity >= 0 && shoeQuantity >= 0) {
        const tShirtSales = tShirtQuantity * 100;
        const pantSales = pantQuantity * 200;
        const shoeSales = shoeQuantity * 500;

        const totalCalculator = tShirtSales + pantSales + shoeSales;

        return totalCalculator;


    }

    // Error message 
    else {
        return 'invalid input';
    }



}

const amount = totalSales(5, 3, 4);
console.log(amount);

// problem :3--------------------------------------------------------------------------------

function deliveryCost(shirt) {
    const firstCategoryTshirt = 100;
    const secondCategoryTshirt = 80;
    const thirdCategoryTshirt = 50;
    // error message
    if (shirt < 0) {
        return 'please Enter the right input';
    }

    else if (shirt <= 100) {
        const cost = shirt * firstCategoryTshirt;
        return cost;
    }
    else if (shirt <= 200) {
        const firstTshirt = 100 * firstCategoryTshirt;
        const shirtBundle = shirt - 100;
        const secondTshirt = shirtBundle * secondCategoryTshirt;
        const totalShirt = firstTshirt + secondTshirt;

        return totalShirt;
    }
    else {
        const firstTshirt = 100 * firstCategoryTshirt;
        const secondTshirt = 100 * secondCategoryTshirt;
        const shirtBundle = shirt - 200;
        const shirtBundleQuantity = shirtBundle * thirdCategoryTshirt;
        const totalShirt = firstTshirt + secondTshirt + shirtBundleQuantity;

        return totalShirt;
    }

}
const tShirt = deliveryCost(400);

console.log(tShirt);



// problem :4--------------------------------------------------



// error message 
let friends = 'you need enter 5 chracter of names';
function perfectFriend(names) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].length == 5) {
            friends = names[i]
            break;
        }

    }
    return friends;


};

const names = ['Fahim', 'ibunul', 'Siam', 'Bellal', 'Sayem', 'Toton', 'Rifat'];
const bestFriend = perfectFriend(names);
console.log(bestFriend);

