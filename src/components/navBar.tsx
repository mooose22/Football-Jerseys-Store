import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const itemCount = useSelector((state: RootState) => state.cart.itemCount);

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
          <Link to="/checkout">
            <BsCart size={28} />
            {itemCount > 0 && (
              <span className="badge badge-sm badge-secondary">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
