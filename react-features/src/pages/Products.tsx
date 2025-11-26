import { useEffect, useRef, useTransition } from "react";
import CustomButton from "../components/CustomButton";

const Products = () => {
  const [isPending, startTransition] = useTransition();
  const buttonRef2 = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.title = "Products";
  }, []);

  useEffect(() => {
    startTransition(async () => {
      if (buttonRef2.current) buttonRef2.current.style.color = "yellow";

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          if (buttonRef2.current) buttonRef2.current.style.color = "green";
        }, 2000);
      }
    });
  }, []);

  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center gap-5">
        <p className="">Loading</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center gap-5">
      <div className="">
        <h1 className="text-3xl">Products</h1>
        <CustomButton ref={buttonRef2} path="/">
          Go to Home
        </CustomButton>
      </div>
    </div>
  );
};

export default Products;
