import React from "react";
import type { ItemInterface } from "../pages/ItemPage";
import { motion } from "motion/react";

interface CardInterface {
  item: ItemInterface;
}
const Card: React.FC<CardInterface> = React.memo(({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      // className={`card border w-[20rem] p-4 bg-transparent text-[#6e6b6b] rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-[0px_0px_50px_9px_rgba(0,0,0,0.3)] shadow-[#39fc12]`}
      // className="card border w-[20rem] p-4 bg-[#ffffff] text-[#6e6b6b] rounded-xl transition-transform duration-800 hover:-translate-y-3 hover:shadow-[0px_0px_50px_9px_rgba(0,0,0,0.3)] shadow-[#fa2323]"
      className="w-[20rem] border border-[#353434] rounded-xl p-3 hover:rotate-1 hover:shadow-[0px_0px_40px_1px_rgba(0,0,0,0.3)] shadow-[yellow] duration-500 ease-in-out"
    >
      <div className="w-full flex justify-center">
        <motion.img className="h-80" src={item?.image} alt="product image" />
      </div>
      <h2 className="text-center mt-2">{item?.title}</h2>
      <p className="font-semibold text-black">{item?.price}</p>
      <div className="w-full flex justify-around items-center">
        <div className="h-12 w-12 bg-yellow-300 animate-spin"></div>
        <div className="h-12 w-12 bg-blue-300 animate-bounce"></div>
        <div className="h-12 w-12 bg-red-300 animate-ping"></div>
        <div className="h-12 w-12 bg-green-300 animate-pulse"></div>
      </div>
    </motion.div>
  );
});

export default Card;
