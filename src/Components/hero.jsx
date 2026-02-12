import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, I'm Nayeem Khan</h1>
      <p>Full Stack Developer | React | Node | AWS</p>
    </motion.div>
  );
};

export default Hero;
