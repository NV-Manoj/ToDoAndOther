import homeIMG from "../logo192.png";
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.img animate={{rotate:360}} transition={{repeat:Infinity , duration:20}} className="h-full w-full object-contain" src={homeIMG} alt="MyImg" />
    </div>
  );
};

export default Home;
