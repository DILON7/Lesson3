let price = 700;
let balance = 3300;
const isVip = true;

if (isVip){
    price *= 0.9;
    console.log("Применена VIP-скидка.");
} if (balance >= price){
    console.log("Покупка успешна!");
    balance -= price
} else {
    console.log("Недостаточно средств.");
}

console.log("Цена товара:", price);
console.log("Ваш баланс:", balance);