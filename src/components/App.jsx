import React, { useState } from "react";
import Title from "./Header";
import Footer from "./Footer";
import VidCard from "./VidCard";
import videos from "../videos";
import SearchBar from "./SearchBar";

function App() {
  const [filteredVids, setFilteredVids] = useState(videos);

  function filterVideos(category) {
    if (category === "All") {
      setFilteredVids(videos);
    } else {
      const currentVids = videos.filter((video) => {
        return video.category == category;
      });
      console.log(category);
      console.log(currentVids);
      setFilteredVids(currentVids);
    }
  }
  return (
    <div className="App">
      <Title />
      <SearchBar onFilter={filterVideos} />

      <div className="row g-3">
        {filteredVids.map((video, i) => (
          <div className="col-12 col-md-6 col-lg-4">
            <VidCard
              id={video.id}
              key={video.id}
              url={video.url}
              title={video.title}
              category={video.category}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
