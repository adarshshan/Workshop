import { useState, useEffect, useTransition } from "react";

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
          {data && data.length > 0 ? (
            <div className="flex flex-wrap justify-around py-5 gap-4 w-[80%]">
              {data?.map((item: any, index: number) => (
                <div
                  className={`card border w-[20rem] p-4 bg-[#ffffff] text-[#6e6b6b] rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0px_0px_50px_9px_rgba(0,0,0,0.3)] shadow-[#39fc12]`}
                  // className="card border w-[20rem] p-4 bg-[#ffffff] text-[#6e6b6b] rounded-xl transition-transform duration-800 hover:-translate-y-3 hover:shadow-[0px_0px_50px_9px_rgba(0,0,0,0.3)] shadow-[#fa2323]"
                  key={`product-${index}`}
                >
                  <img className="h-80" src={item?.image} alt="product image" />
                  <h2>{item?.title}</h2>
                  <p className="font-semibold text-black">{item?.price}</p>
                  <div className="w-full flex justify-around items-center">
                    <div className="h-12 w-12 bg-yellow-300 animate-spin"></div>
                    <div className="h-12 w-12 bg-blue-300 animate-bounce"></div>
                    <div className="h-12 w-12 bg-red-300 animate-ping"></div>
                    <div className="h-12 w-12 bg-green-300 animate-pulse"></div>
                  </div>
                </div>
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
