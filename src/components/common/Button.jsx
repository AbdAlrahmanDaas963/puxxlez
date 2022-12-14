import React, { useState } from "react";
import { motion } from "framer-motion";

function Button({ title, icon }) {
  const [ishover, setIshover] = useState("false");
  const [isclicked, setIsclicked] = useState("false");
  const arrowVar = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
    },
  };
  const bodyVar = {
    true: {
      top: "30px",
      // filter: "contrast(10%)",
    },
    false: {
      top: "23px",
      // filter: "contrast(100%)",
    },
  };
  return (
    <motion.div
      whileHover={() => setIshover("true")}
      onMouseLeave={() => setIshover("false")}
      whileTap={() => {
        setIsclicked("true");
        setTimeout(() => {
          setIsclicked("false");
        }, 100);
        // return { opacity: "0" };
      }}
      style={{ opacity: "1" }}
      className="pix-btn"
    >
      <motion.div
        variants={arrowVar}
        animate={ishover}
        transition={{ duration: 0 }}
        className="pix-btn-arrow"
      >
        <svg
          width="30"
          height="32"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.6 3.99997H0V43.9999H3.6V3.99997Z" fill="black" />
          <path
            d="M3.60009 0L3.6 3.99997L10.8 3.99999V0H3.60009Z"
            fill="black"
          />
          <path
            d="M10.8 3.99999L10.8 8.00001L18 7.99996L18.0001 4.00002L10.8 3.99999Z"
            fill="black"
          />
          <path d="M18 7.99996V12L25.2001 12L25.2 7.99996H18Z" fill="black" />
          <path d="M25.2001 12V16L32.4 16L32.4 12H25.2001Z" fill="black" />
          <path d="M32.4 16V20L39.6 19.9999L39.6001 16H32.4Z" fill="black" />
          <path d="M39.6 28H43.2V19.9999H39.6V28Z" fill="black" />
          <path
            d="M32.4 27.9999V31.9999H39.6001L39.6 28L32.4 27.9999Z"
            fill="black"
          />
          <path d="M25.2001 32V36H32.4L32.4 31.9999L25.2001 32Z" fill="black" />
          <path d="M18 36V40H25.2L25.2001 36L18 36Z" fill="black" />
          <path
            d="M10.8 39.9999L10.8 43.9999L18.0001 43.9999L18 40L10.8 39.9999Z"
            fill="black"
          />
          <path
            d="M3.6 43.9999L3.60009 47.9999H10.8V43.9999L3.6 43.9999Z"
            fill="black"
          />
          <path
            d="M10.8001 3.99951H3.6001V43.9995H10.8001V39.9995H18.0001V35.9995H25.2001V31.9995H32.4001V27.9995H39.6001V19.9995H32.4001V15.9995H25.2001V11.9995H18.0001V7.99951H10.8001V3.99951Z"
            fill="#A81414"
          />
        </svg>
      </motion.div>
      <div className="pix-btn-back">
        <svg
          width="200"
          height="50"
          viewBox="0 0 300 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M270 0H280V10H270H260H250H240H230H220H210H200H190H180H170H160H150H140H130H120H110H100H90H80H70H60H50H40H30H20V0H30H40H50H60H70H80H90H100H110H120H130H140H150H160H170H180H190H200H210H220H230H240H250H260H270ZM10 20V10H20V20H10ZM10 80H0V70V60V50V40V30V20H10V30V40V50V60V70V80ZM20 90H10V80H20V90ZM280 90V100H270H260H250H240H230H220H210H200H190H180H170H160H150H140H130H120H110H100H90H80H70H60H50H40H30H20V90H30H40H50H60H70H80H90H100H110H120H130H140H150H160H170H180H190H200H210H220H230H240H250H260H270H280ZM290 80V90H280V80H290ZM290 20H300V30V40V50V60V70V80H290V70V60V50V40V30V20ZM290 20V10H280V20H290Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M200 10H210H220H230H240H250H260H270H280V20H290V30V40V50V60V70V80H280V90H270H260H250H240H230H220H210H200H190H180H170H160H150H140H130H120H110H100H90H80V80H90V70H100H110H120V60H130H140V50H150H160H170H180V40H190V30H200V20V10Z"
            fill="#ED9361"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 10H160H170H180H190H200H210H220H230H240H250V20V30H240V40H230V50H220H210V60H200V70H190H180H170V80H160H150H140H139V90H129H120H119H110H100H90H80H70H60H50H40H30H20V80H10V70V60V50V40V30V20H20V10H30H40H50H60H70H80H90H100H110H120H130H140H150Z"
            fill="#FFD0A5"
          />
        </svg>
      </div>
      <motion.div
        variants={bodyVar}
        animate={isclicked}
        transition={{ duration: 0 }}
        className="pix-btn-body"
      >
        {icon && <div className="pix-btn-text">{icon}</div>}

        <div className="pix-btn-text">{title}</div>
      </motion.div>
    </motion.div>
  );
}

export default Button;
