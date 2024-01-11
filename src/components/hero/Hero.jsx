import "./hero.scss";
import { motion } from "framer-motion";
import React from "react";
import resumePDF from "../assets/SamHigaResume.docx.pdf";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
},
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
          duration: 2,
          repeat: Infinity,
        },
      },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Naim Hussain</motion.h2>
          <motion.h1 variants={textVariants}>PROJECT MANAGER</motion.h1>
          <motion.div variants={textVariants} className="buttons">
          <motion.a className="button is-primary" href={resumePDF} download="SamHigaResume.pdf">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download My Resume</span>
            </motion.a>
            <a href="https://www.linkedin.com/in/husteemah" className="button" variants={textVariants}>
              Check Out my LinkedIn
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Project manager
      </motion.div>
      <div className="imageContainer">
        <img src="/profile.jpg" alt="" width={900} style={{}}/>
      </div>
    </div>
  );
};

export default Hero;