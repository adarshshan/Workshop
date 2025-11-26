import React from "react";
import { useNavigate } from "react-router-dom";

interface CustomButtonInterface {
  children: React.ReactNode;
  path: string;
  ref: any;
}
const CustomButton: React.FC<CustomButtonInterface> = ({
  ref,
  children,
  path,
}) => {
  const navigate = useNavigate();
  return (
    <button ref={ref} onClick={() => navigate(path)}>
      {children}
    </button>
  );
};

export default CustomButton;
