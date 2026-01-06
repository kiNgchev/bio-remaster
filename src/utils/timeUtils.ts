import { convert as convertNumberToWordsRu } from "number-to-words-ru";

const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

function convert_millions(num: number): number | string {
  if (num >= 1000000) {
    return (
      convert_millions(Math.floor(num / 1000000)) +
      " million " +
      convert_thousands(num % 1000000)
    );
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num: number): number | string {
  if (num >= 1000) {
    return (
      convert_hundreds(Math.floor(num / 1000)) +
      " thousand " +
      convert_hundreds(num % 1000)
    );
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num: number): number | string {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num: number): number | string {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

export function convertToEn(num: number): number | string {
  if (num == 0) return "zero";
  else return convert_millions(num);
}

export function convertToRu(num: number): number | string {
  return convertNumberToWordsRu(num, {
    currency: "number",

    showCurrency: {
      integer: false
    },
    showNumberParts: {
      fractional: false
    }
  });
}

export function calculateAge(date: number, month: number, year: number) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(year, month - 1, date);
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  let age: number;

  age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }
  return age;
}
