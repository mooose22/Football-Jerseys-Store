import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar p-4 bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Footy Fabric</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Entire Store Here"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="px-3">
          <BsCart size={28} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
