import { motion } from "motion/react";

const TestPage: React.FC = () => {
  return (
    <div className="w-full ">
      <div className="bg-green-800 h-screen w-full flex justify-center items-center">
        <motion.h1
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="font-bold text-4xl text-white"
        >
          Hero Section
        </motion.h1>
      </div>
      <div className="flex justify-around items-center p-10 h-screen">
        <motion.div
          initial={{ rotate: 180 }}
          // initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          whileHover={{ rotate: 360 }}
          whileTap={{ y: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-64 w-72 bg-amber-800 text-black flex flex-col justify-center items-center "
        >
          <motion.h1
            initial={{ x: -200, opacity: 0, color: "red" }}
            animate={{ x: 0, opacity: 1, color: "black" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="font-bold text-2xl z-10"
          >
            Text From Left
          </motion.h1>
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="font-bold text-2xl text-white"
          >
            Text From Right
          </motion.h1>
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
    </div>
  );
};

export default TestPage;
