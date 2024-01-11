import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          tranistion={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="http://www.linkedin.com/in/sam-higa-b887b9209">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/samhiga">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
