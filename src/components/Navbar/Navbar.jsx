import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div className="left">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Siddhant Kokane
          </motion.span>
        </div>

        <div className="social">
          <a href="https://github.com/siddhantkokne0409" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/siddhant_04_09/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/siddhantkokane" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
