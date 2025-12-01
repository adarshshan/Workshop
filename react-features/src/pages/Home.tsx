import { useRef } from "react";
import CustomButton from "../components/CustomButton";
import RenderPropsComp from "../components/RenderPropsComp";

const Home = () => {
  const buttonRef = useRef(null);
  return (
    <div className="h-screen flex justify-center items-center gap-5">
      <h1 className="text-3xl">Home</h1>
      <CustomButton path="/products" ref={buttonRef}>
        Go to Products
      </CustomButton>
      <RenderPropsComp
        render={(
          count: number,
          setCount: React.Dispatch<React.SetStateAction<number>>
        ) => {
          console.log("hello world");
          return (
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="bg-yellow-300 p-3 rounded-2xl text-black font-bold"
            >
              Hello Button {count} clicks`
            </button>
          );
        }}
      />
    </div>
  );
};
export default Home;
