import { shuffle } from "d3-array";

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

import lvl1_img1 from "./assets/levels/lvl1/1.png";
import lvl1_img2 from "./assets/levels/lvl1/2.png";
import lvl1_img3 from "./assets/levels/lvl1/3.png";
import lvl1_img4 from "./assets/levels/lvl1/4.png";
import lvl1_img5 from "./assets/levels/lvl1/5.png";
import lvl1_img6 from "./assets/levels/lvl1/6.png";
import lvl1_img7 from "./assets/levels/lvl1/7.png";
import lvl1_img8 from "./assets/levels/lvl1/8.png";
import lvl1_img9 from "./assets/levels/lvl1/9.png";
import lvl1_img10 from "./assets/levels/lvl1/10.png";
import lvl1_img11 from "./assets/levels/lvl1/11.png";
import lvl1_img12 from "./assets/levels/lvl1/12.png";
import lvl1_img13 from "./assets/levels/lvl1/13.png";
import lvl1_img14 from "./assets/levels/lvl1/14.png";
import lvl1_img15 from "./assets/levels/lvl1/15.png";

// -=-=-=-=-=-=-=-=-=-=-=-=

const orderedLvl1 = [
  { id: 0, img: lvl1_img1, solved: false },
  { id: 1, img: lvl1_img2, solved: false },
  { id: 2, img: lvl1_img3, solved: false },
  { id: 3, img: lvl1_img4, solved: false },
  { id: 4, img: lvl1_img5, solved: false },
  { id: 5, img: lvl1_img6, solved: false },
  { id: 6, img: lvl1_img7, solved: false },
  { id: 7, img: lvl1_img8, solved: false },
  { id: 8, img: lvl1_img9, solved: false },
  { id: 9, img: lvl1_img10, solved: false },
  { id: 10, img: lvl1_img11, solved: false },
  { id: 11, img: lvl1_img12, solved: false },
  { id: 12, img: lvl1_img13, solved: false },
  { id: 13, img: lvl1_img14, solved: false },
  { id: 14, img: lvl1_img15, solved: false },
];

const orderedLvl0 = [
  { id: 0, img: zero, solved: false },
  { id: 1, img: one, solved: false },
  { id: 2, img: two, solved: false },
  { id: 3, img: three, solved: false },
  { id: 4, img: four, solved: false },
  { id: 5, img: five, solved: false },
  { id: 6, img: six, solved: false },
  { id: 7, img: seven, solved: false },
  { id: 8, img: eight, solved: false },
  { id: 9, img: nine, solved: false },
  { id: 10, img: ten, solved: false },
  { id: 11, img: one_one, solved: false },
  { id: 12, img: one_two, solved: false },
  { id: 13, img: one_three, solved: false },
  { id: 14, img: one_four, solved: false },
];

export const allLevels = [shuffle(orderedLvl0), shuffle(orderedLvl1)];
export const lvl0 = shuffle(orderedLvl0);
export const lvl1 = shuffle(orderedLvl1);
