import "./technologies.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const Technologies = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Crafting seamless digital experiences
          <br /> with the power of technology
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/code2.webp" alt="" />
          <h1>
             My
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Work Experience</motion.b>
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Project Manager:</h2>
          <b>A.B.U Developers |</b>
          <p>Dedicated project manager at A.B.U Developers club, an esteemd
            campus Tech club, overseeing the successful and efficient
            delivery of innovative projects. one of which is Immutable Land
            registry on Blockchain [ILRB]
          </p>
          <ul> 
          <li>Timely and effective delivery.</li>
          <li>Meeting standard with innovation</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Head Of Sales And Marketing: </h2>
          <b>Bin Hussain Technologies |</b>
          <p>As the Head of Sales and marketing at Bin Hussain Technologies,
            i have efficiently and strategically drove numerous transactions
            and cultivated lasting client relationships, contributing to the
            continued patronage of the company's services.
          </p>
          <ul> 
            <li>Proficient in delivery.</li>
            <li>Transacting clients</li>
          </ul>
        </motion.div>
        <motion.div className="box">
          <h2>Campus Ambassador: </h2>
          <b>Bitget Global exchange |</b>
          <p>Before joining yellow card BA program, i served as bitget campus
            ambassador and with my help and stratageis, bitget was able to
            lunch one of their biggest blockchain program in the whole of
            Africa.The campaingn did so well that the hall was exceeded
          </p>
          <ul> 
            <li>Blockchain for youth</li>
            <li>Organisation,Trading , Community management</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
