import { useEffect, useState } from "react";
import page1Data from "../../data/CONTENTLISTINGPAGE-PAGE1.json";
import page2Data from "../../data/CONTENTLISTINGPAGE-PAGE2.json";
import page3Data from "../../data/CONTENTLISTINGPAGE-PAGE3.json";
import { MovieCard } from "../card/MovieCard";
import Navbar from "../navbar/navbar";

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(currentPage, "+++++");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else if (scrollTop === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <div className="container">
        <div className="movie-list">
          {currentPage === 1 && (
            <MovieCard
              data={page1Data.page["content-items"].content.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          )}
          {currentPage === 2 && (
            <MovieCard
              data={page2Data.page["content-items"].content.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          )}
          {currentPage === 3 && (
            <MovieCard
              data={page3Data.page["content-items"].content.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default MovieList;
