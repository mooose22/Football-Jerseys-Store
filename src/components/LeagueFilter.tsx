import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { jerseysData } from "../data/jerseysData";
import { setLeagueFilter } from "../redux/filterSlice";

const LeagueFilter = () => {
  const dispatch = useDispatch();
  const league = useSelector((state: RootState) => state.filter.league);

  const uniqueLeague = [
    "All Leagues",
    ...new Set(jerseysData.map((jersey) => jersey.league)),
  ];

  const handleFilterChange = (event: any) => {
    dispatch(setLeagueFilter(event.target.value));
  };

  return (
    <div className="flex justify-center mt-6">
      <select
        value={league}
        onChange={handleFilterChange}
        className="p-2 border rounded w-48 md:w-64"
      >
        {uniqueLeague.map((league) => (
          <option key={league} value={league}>
            {league}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LeagueFilter;
