import { useState, useEffect, useTransition } from "react";
import Card from "../components/Card";
import withAuth from "../components/withAuth";
import ErrorBoundary from "../components/ErrorBoundary";

export interface ItemInterface {
  image: string;
  title: string;
  price: number;
}

const ItemPage = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<ItemInterface[]>([]);

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
      <h2 className="title-h2 w-full flex justify-center py-2 text-3xl font-bold">
        Our Products
      </h2>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
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
        </ErrorBoundary>
      )}
    </div>
  );
};

export default withAuth(ItemPage);
