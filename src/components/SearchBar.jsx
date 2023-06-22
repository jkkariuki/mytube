import React, { useState } from "react";
import videos from "../videos";

function SearchBar(props) {
  const [selected, setSelected] = useState();

  function handleChange(event) {
    setSelected(event.target.value);
  }

  function submitCategory(event) {
    props.onFilter(selected);
    event.preventDefault();
  }

  return (
    <div className="catSelector">
      <h1>{selected}</h1>
      <form>
        <label htmlFor="categories">Choose a category:&nbsp;</label>
        <select
          value={selected}
          onChange={handleChange}
          id="categories"
          name="categories"
        >
          <option value="All">All Videos</option>
          <option value="Real Estate Investing">Real Estate Investing</option>
          <option value="Podcasts">Podcasts</option>
          <option value="Sports">Sports</option>
        </select>
        &nbsp;
        <input onClick={submitCategory} type="submit" />
      </form>
    </div>
  );
}

export default SearchBar;
