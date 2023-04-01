import LazyLoad from "react-lazyload";
import "./MovieCard.scss";

export const MovieCard = ({ data }) => {
  console.log(data, "----");

  return (
    <div className="container">
      {data &&
        data.map((item) => (
          <div className="card">
            <div className="card_img">
              <LazyLoad height={400}>
                <img src={item.image} alt="movie-img" />
              </LazyLoad>
            </div>
            <div className="title">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
    </div>
  );
};
