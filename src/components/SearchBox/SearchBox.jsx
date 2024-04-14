import css from "../SearchBox/SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchContact = useSelector((state) => state.filters.filterValue);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <input type="text" value={searchContact} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
