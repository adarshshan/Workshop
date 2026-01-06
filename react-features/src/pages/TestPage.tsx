import { motion } from "motion/react";

const TestPage: React.FC = () => {
  return (
    <div className="w-full flex justify-around items-center p-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ y: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-64 w-72 bg-amber-200 text-black flex justify-center items-center "
      >
        TestPage
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileTap={{ y: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-64 w-72 bg-teal-200 text-black flex justify-center items-center"
      >
        TestPage
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileTap={{ y: 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-64 w-72 bg-fuchsia-200"
      >
        TestPage
      </motion.div>
    </div>
  );
};

export default TestPage;
