import { shuffle } from "d3-array";

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

const lvl1 = {
  lvl1_img1,
  lvl1_img2,
  lvl1_img3,
  lvl1_img4,
  lvl1_img5,
  lvl1_img6,
  lvl1_img7,
  lvl1_img8,
  lvl1_img9,
  lvl1_img10,
  lvl1_img11,
  lvl1_img12,
  lvl1_img13,
  lvl1_img14,
  lvl1_img15,
};

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

export const allLevels = [shuffle(orderedLvl1)];
