console.log("Привет из курса!");

const fileSize = 4500;
const isPremium = true;
let status = "Загружаем файл!..";
console.log(status);

if (fileSize === 0) {
    console.log("Файл пуст");
} else if (fileSize > 5000 && isPremium) {
    console.log("Файл слишком большой! Или у тебя нет подписки");
} else {
    console.log("Загружаем.....");
    status = "Файл успешно загружен!";
}

console.log(status);
