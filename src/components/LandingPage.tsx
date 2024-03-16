import { Link } from "react-router-dom";
import backgroundImage from "../assets/crop-1415651.webp";

const LandingPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-gray-200 background-image-custom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-gray-900 bg-opacity-75 p-5 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Jerseys Shop</h1>
        <p className="text-xl mb-8 text-center ">
          Find your favorite team's jersey today!
        </p>
        <div className="text-center">
          <Link to="/jerseys">
            <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
              Shop Jerseys
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
