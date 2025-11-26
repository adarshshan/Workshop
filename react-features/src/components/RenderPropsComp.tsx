import { useState } from "react";

const RenderPropsComp: any = ({
  render,
}: {
  render: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}) => {
  const [count, setCount] = useState<number>(0);
  return render(count, setCount);
};

export default RenderPropsComp;
