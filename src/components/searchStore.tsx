import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import { RootState } from "../redux/store";

const SearchStore = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);

  return (
    <input
      type="text"
      placeholder="Search Entire Store"
      value={searchQuery}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      className="input input-bordered w-24 md:w-auto"
    />
  );
};

export default SearchStore;
