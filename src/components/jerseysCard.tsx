import { useDispatch } from "react-redux";
import { jerseysData, Jersey } from "../data/jerseysData";
import { addItem } from "../redux/cartSlice";

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
            className="w-80 h-full rounded overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <img
              src={jersey.img}
              alt={jersey.name}
              className="w-full h-60 object-contain"
            />
            <div className="px-6 py-4 flex-grow">
              <div className="font-bold text-xl mb-2 text-center">
                {jersey.name}
                <p className="text-gray-700 text-base">{jersey.price}</p>
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <button
                onClick={() => handleAddToCart(jersey)}
                className="bg-accent hover:bg-accent-focus text-accent-content p-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JerseysCard;
