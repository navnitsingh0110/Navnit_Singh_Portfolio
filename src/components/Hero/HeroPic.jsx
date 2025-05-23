import React from "react";
import { PiSquare } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function HeroPic() {
  return (
    <motion.div variants={fadeIn('left',0.2)} initial='hidden' whileInView='show' viewport={{once: false, amount:0}} className="h-full flex items-center justify-center">
      <img
        src="/images/my-img.png"
        alt="Navnit Singh"
        className="max-h-[350px] w-auto"
      />
      {/* <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiSquare className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_3s_linear_infinite]" />
      </div> */}
    </motion.div>
  );
}

export default HeroPic;
