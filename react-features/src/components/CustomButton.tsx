import React from "react";
import { useNavigate } from "react-router-dom";

interface CustomButtonInterface {
  children: React.ReactNode;
  path: string;
  ref: any;
}
const CustomButton: React.FC<CustomButtonInterface> = React.memo(
  ({ ref, children, path }) => {
    const navigate = useNavigate();
    return (
      <button
        className="bg-yellow-300 p-3 rounded-xl text-black font-semibold hover:bg-green-300"
        ref={ref}
        onClick={() => navigate(path)}
      >
        {children}
      </button>
    );
  }
);

export default CustomButton;
