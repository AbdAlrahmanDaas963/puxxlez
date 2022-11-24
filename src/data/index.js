import zero from "./assets/numbers/0.jpg";
import one from "./assets/numbers/1.jpg";
import two from "./assets/numbers/2.jpg";
import three from "./assets/numbers/3.jpg";
import four from "./assets/numbers/4.jpg";
import five from "./assets/numbers/5.jpg";
import six from "./assets/numbers/6.jpg";
import seven from "./assets/numbers/7.jpg";
import eight from "./assets/numbers/8.jpg";
import nine from "./assets/numbers/9.jpg";

const numbers = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
};

export const grids = [
  { id: 1, img: null },
  { id: 2, img: null },
  { id: 3, img: null },
  { id: 4, img: null },
  { id: 5, img: null },
  { id: 6, img: null },
  { id: 7, img: null },
  { id: 8, img: null },
  { id: 9, img: null },
  { id: 10, img: null },
];

export const cards = [
  // ? { id: 1, img: "url", solved: false, has: {} },
  { id: 1, img: numbers.one, solved: false },
  { id: 2, img: numbers.two, solved: false },
  { id: 3, img: numbers.three, solved: false },
  { id: 4, img: numbers.four, solved: false },
  { id: 5, img: numbers.five, solved: false },
  { id: 6, img: numbers.six, solved: false },
  { id: 7, img: numbers.seven, solved: false },
  { id: 8, img: numbers.eight, solved: false },
  { id: 9, img: numbers.nine, solved: false },
  { id: 10, img: numbers.zero, solved: false },
];

export const hande = {
  select: {},
  target: {},
};
