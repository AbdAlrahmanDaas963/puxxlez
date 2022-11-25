import zero from "./assets/numbers2/0.png";
import one from "./assets/numbers2/1.png";
import two from "./assets/numbers2/2.png";
import three from "./assets/numbers2/3.png";
import four from "./assets/numbers2/4.png";
import five from "./assets/numbers2/5.png";
import six from "./assets/numbers2/6.png";
import seven from "./assets/numbers2/7.png";
import eight from "./assets/numbers2/8.png";
import nine from "./assets/numbers2/9.png";

import ten from "./assets/numbers2/10.png";
import one_one from "./assets/numbers2/11.png";
import one_two from "./assets/numbers2/12.png";
import one_three from "./assets/numbers2/13.png";
import one_four from "./assets/numbers2/14.png";

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
  ten,
  one_one,
  one_two,
  one_three,
  one_four,
};

export const grids = [
  { id: 0, img: null },
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
  { id: 11, img: null },
  { id: 12, img: null },
  { id: 13, img: null },
  { id: 14, img: null },
];

export const cards = [
  // ? { id: 1, img: "url", solved: false, has: {} },
  { id: 0, img: numbers.zero, solved: false },
  { id: 1, img: numbers.one, solved: false },
  { id: 2, img: numbers.two, solved: false },
  { id: 3, img: numbers.three, solved: false },
  { id: 4, img: numbers.four, solved: false },
  { id: 5, img: numbers.five, solved: false },
  { id: 6, img: numbers.six, solved: false },
  { id: 7, img: numbers.seven, solved: false },
  { id: 8, img: numbers.eight, solved: false },
  { id: 9, img: numbers.nine, solved: false },
  { id: 10, img: numbers.ten, solved: false },
  { id: 11, img: numbers.one_one, solved: false },
  { id: 12, img: numbers.one_two, solved: false },
  { id: 13, img: numbers.one_three, solved: false },
  { id: 14, img: numbers.one_four, solved: false },
];

export const hande = {
  select: {},
  target: {},
};
