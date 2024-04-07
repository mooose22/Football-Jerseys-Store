import { useDispatch } from "react-redux";
import { jerseysData, Jersey } from "../data/jerseysData";
import { addItem } from "../app/cartSlice";

const JerseysCard = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (jersey: Jersey) => {
    dispatch(addItem(jersey));
  };
  return (
    <div className="my-14 grid grid-cols-3 gap-4 justify-items-center">
      {jerseysData.map((jersey) => {
        return (
          <div
            key={jersey.id}
            className="max-w-sm rounded overflow-hidden shadow-lg mb-10"
          >
            <img src={jersey.img} alt={jersey.name} className="w-full h-80" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {jersey.name}
                <p className="text-gray-700 text-base text-center">
                  {jersey.price}
                </p>
              </div>
              <div className="text-center">
                <button
                  onClick={() => handleAddToCart(jersey)}
                  className="bg-accent hover:bg-accent-focus text-accent-content p-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JerseysCard;
