import "./about.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import resumePDF from "../assets/SamHigaResume.docx.pdf";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/code.jpeg" alt="code" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Project Management</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>Manager</h1>
          <button>About Me</button>
        </div>
      </motion.div>
      <motion.div className="aboutContainer">
        <div className="box">
          <h2>Who I am</h2>
          <p>
            I'm a content creator and a graphic designer, i'm also a blockchanin enthuaist,
            I have worked with several organition projects and startup, currenty a student of Ahmadu Bello University.
            I am a dedicated and a problem solver, i'm able to lead and co-ordinate teams to work mutually to make a success in projects. 
          </p>
          <motion.a className="button is-primary" href={resumePDF} download="SamHigaResume.pdf">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download My Resume!</span>
            </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;