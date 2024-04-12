import { motion } from "framer-motion";
import AnimatedBackground from "../../Components/AnimatedBackground";
const Home = () => {
  return (
    <motion.div className="d-flex justify-content-center align-items-center vh-80 fs-1 px-3 ">
      Welcome! Please feel free to explore!
      <AnimatedBackground />
    </motion.div>
  );
};

export default Home;
