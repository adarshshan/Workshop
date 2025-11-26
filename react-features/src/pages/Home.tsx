import { useRef } from "react";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const buttonRef = useRef(null);
  return (
    <div className="h-screen flex justify-center items-center gap-5">
      <h1 className="text-3xl">Home</h1>
      <CustomButton path="/products" ref={buttonRef}>
        Go to Products
      </CustomButton>
    </div>
  );
};
export default Home;
