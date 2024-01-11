import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Management",
    img: "/parkapp.jpg",
    desc: "Apart from been good at leveraging softwares and products for productivity, i have been a community manager of many communities, being able to work under pressure to make end need and able to cope with strees from different personalities of people in a respectfull and professional way. Joining the BA programs, i have been leading the bord on the pannel and with complaints from hundreds of people, i have been able to tackle and provide solution without having to forward to custumer service, this alone shows proficiency and taking action.",
    liveSite: "https://park-app.herokuapp.com/",
    repo: "https://github.com/samhiga/park-app",
  },
  {
    id: 2,
    title: "Design",
    img: "/gymder.jpeg",
    desc: "Apart from been good at leveraging softwares and products for productivity, i have been a community manager of many communities, being able to work under pressure to make end need and able to cope with strees from different personalities of people in a respectfull and professional way. Joining the BA programs, i have been leading the bord on the pannel and with complaints from hundreds of people, i have been able to tackle and provide solution without having to forward to custumer service, this alone shows proficiency and taking action.",
    liveSite: "",
    repo: "https://github.com/daevidvo/Gym-Buddy",
  },
  {
    id: 3,
    title: "Strategy",
    img: "/Emojify.jpg",
    desc: "Apart from been good at leveraging softwares and products for productivity, i have been a community manager of many communities, being able to work under pressure to make end need and able to cope with strees from different personalities of people in a respectfull and professional way. Joining the BA programs, i have been leading the bord on the pannel and with complaints from hundreds of people, i have been able to tackle and provide solution without having to forward to custumer service, this alone shows proficiency and taking action.",
    liveSite: "https://samhiga.github.io/emojify/",
    repo: "https://github.com/samhiga/emojify",
  },
  {
    id: 4,
    title: "Development",
    img: "/commerce.jpeg",
    desc: "Apart from been good at leveraging softwares and products for productivity, i have been a community manager of many communities, being able to work under pressure to make end need and able to cope with strees from different personalities of people in a respectfull and professional way. Joining the BA programs, i have been leading the bord on the pannel and with complaints from hundreds of people, i have been able to tackle and provide solution without having to forward to custumer service, this alone shows proficiency and taking action.",
    liveSite: "",
    repo: "https://github.com/samhiga/e-commerce-back-end",
  },
  {
    id: 5,
    title: "Software",
    img: "/commerce.jpeg",
    desc: "Apart from been good at leveraging softwares and products for productivity, i have been a community manager of many communities, being able to work under pressure to make end need and able to cope with strees from different personalities of people in a respectfull and professional way. Joining the BA programs, i have been leading the bord on the pannel and with complaints from hundreds of people, i have been able to tackle and provide solution without having to forward to custumer service, this alone shows proficiency and taking action.",
    liveSite: "",
    repo: "https://github.com/samhiga/e-commerce-back-end",
  },
  {
    id: 6,
    title: "Delivery",
    img: "/commerce.jpeg",
    desc: "Apart from been good at leveraging softwares and products for productivity, i have been a community manager of many communities, being able to work under pressure to make end need and able to cope with strees from different personalities of people in a respectfull and professional way. Joining the BA programs, i have been leading the bord on the pannel and with complaints from hundreds of people, i have been able to tackle and provide solution without having to forward to custumer service, this alone shows proficiency and taking action.",
    liveSite: "",
    repo: "https://github.com/samhiga/e-commerce-back-end",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
            {/* conditionally render buttons so they only appear if they have a link */}
            {item.liveSite && (
                <button>
                  <a
                    href={item.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See References
                  </a>
                </button>
              )}
              {item.repo && (
                <button>
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Certificate
                  </a>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>PROFICIENCY</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
