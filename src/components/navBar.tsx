import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4 bg-gray-900 shadow-lg">
      <div className="flex items-center">
        <span className="text-white text-lg font-bold">Footy Fabric</span>
      </div>
      <BsCart className="text-white text-2xl hover:text-gray-300 cursor-pointer" />
    </nav>
  );
};

export default Navbar;
