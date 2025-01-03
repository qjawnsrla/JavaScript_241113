// Number객체 : 숫자와 관련된 작업, 자바스크립트는 정수와 실수를 모두 Number로 처리

const x = 10;
console.log(typeof x);
const y = 3.14;
console.log(typeof y);

console.log("------------구분선-------------");

// Number.parseFloat() : 주어진 문자열을 실수로 변환
Number.parseFloat("12"); // 12
console.log(Number.parseFloat("12"));
Number.parseFloat("12.34"); // 12.34
console.log(Number.parseFloat("12.34"));
Number.parseFloat("12문자열"); // 12
console.log(Number.parseFloat("12문자열"));
Number.parseFloat("12 34 56"); // 12
console.log(Number.parseFloat("12 34 56"));
Number.parseFloat("문자열12"); // Nan
console.log(Number.parseFloat("문자열12"));

// Number.pasreInt() : 주어진 문자열을 정수로 변환
console.log(Number.parseInt("12.34"));
