import { useState, useEffect, useTransition } from "react";
import Card from "../components/Card";

const ItemPage = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        if (data && data?.length) setData(data);
        else setData([]);
      } catch (error) {
        console.log(error as Error);
        setData([]);
      }
    });
  }, []);

  return (
    <div className="w-full">
      <h2 className="w-full flex justify-center py-2 text-3xl font-bold">
        Our Products
      </h2>
      {isPending ? (
        <div>Loadingl...</div>
      ) : (
        <div className="flex justify-center">
          {data && data?.length > 0 ? (
            <div className="flex flex-wrap justify-around py-5 gap-4 w-[80%]">
              {data?.map((item: any, index: number) => (
                <Card key={`card-${index}`} item={item} />
              ))}
            </div>
          ) : (
            <div>No data found!</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemPage;
