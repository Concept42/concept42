import { motion } from "framer-motion";
import { TbArrowNarrowDown } from "react-icons/tb";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <>
      <div className="flex  gap-14 absolute w-screen h-screen justify-around items-center z-10">
        <motion.div
          animate={{ translateY: [0, -50, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="flex flex-col gap-2 items-center absolute bottom-20 cursor-pointer"
        >
          <TbArrowNarrowDown size={40} color="white" />
          <p className="text-[12px]">SCROLL DOWN</p>
        </motion.div>
        <div className="flex flex-col gap-10"> </div>
        <div></div>
      </div>
      <div className=" top-0 w-screen h-screen justify-center items-center hero-background"></div>
    </>
  );
};

export default Hero;
