let price1 = 1200;
let price2 = 1800;
let balance = 3500;
const isVip = true;
let totalPrice = price1 + price2;

if (isVip){
    totalPrice *= 0.9;
    console.log("Применена VIP-скидка.");
} if (balance >= totalPrice){
    console.log("Покупка успешна!");
    balance -= totalPrice;
} else{
    console.log("Недостаточно средств.");
}

console.log("Итоговая сумма покупки:", totalPrice);
console.log("Ваш баланс:", balance);