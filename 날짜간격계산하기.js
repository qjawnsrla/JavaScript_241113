const end_date = new Date("2025/03/24/18:00:00");
const today = new Date();

console.log(end_date);
console.log(today);
const num = (end_date - today) / 86400000;
console.log(parseInt(num));

document.querySelector(".date").innerText = `${parseInt(num)}`;
