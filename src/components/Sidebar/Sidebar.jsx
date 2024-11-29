import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <motion.div className="sidebar" initial={false} animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    );
  };
  
  export default Sidebar;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Links from "./links/Links";
// import "./sidebar.scss";
// import ToggleButton from "./toggleButton/ToggleButton";

// const variants = {
//   open: {
//     clipPath: "circle(1200px at 50px 50px)",
//     transition: {
//       type: "spring",
//       stiffness: 20,
//     },
//   },
//   closed: {
//     clipPath: "circle(30px at 50px 50px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// const Sidebar = () => {
//   const [open, setOpen] = useState(() => {
//     // Read the initial state from localStorage
//     const storedState = localStorage.getItem("sidebarOpen");
//     return storedState === "true"; // Default to false if not set
//   });

//   useEffect(() => {
//     // Store the state in localStorage whenever it changes
//     localStorage.setItem("sidebarOpen", open);
//   }, [open]);

//   return (
//     <motion.div
//       className="sidebar"
//       initial={false}
//       animate={open ? "open" : "closed"}
//     >
//       <motion.div className="bg" variants={variants}>
//         <Links />
//       </motion.div>
//       <ToggleButton setOpen={setOpen} />
//     </motion.div>
//   );
// };

// export default Sidebar;
