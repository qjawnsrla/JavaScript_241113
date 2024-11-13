const end_date = new Date("2025/03/24/18:00:00");
const today = new Date();

console.log(end_date);
console.log(today);
console.log(today.toLocaleDateString());
console.log(end_date.toLocaleDateString() - today.toLocaleDateString());