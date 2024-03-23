import Navbar from "../components/navBar";
import photo from "../assets/nav_bar.webp";
import { jerseysData } from "../data/jerseysData";
import SearchStore from "../components/searchStore";

const JerseysPage = () => {
  return (
    <>
      <Navbar />

      <SearchStore />

      <div className="flex justify-center mt-6">
        <img
          src={photo}
          alt="Soccer Jersey Collage"
          style={{ height: "500px", width: "70%" }}
        />
      </div>

      <div className="my-14 grid grid-cols-3 gap-4 justify-items-center">
        {jerseysData.map((jersey) => {
          return (
            <div
              key={jersey.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img src={jersey.img} alt={jersey.name} className="w-full h-72" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {jersey.name}
                  <p className="text-gray-700 text-base text-center">
                    {jersey.price}
                  </p>
                </div>
                <div className="text-center">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JerseysPage;
