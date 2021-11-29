import { useSelector } from "react-redux";
import { selectArticles } from "../store/Reducer";
import Carousel from "../../node_modules/react-bootstrap/Carousel";

function HomeImgCarousel() {
  console.log("--Home Carousel--")
  const articles = useSelector(selectArticles)

  return (
    <div className="home-img-carousel">
      <Carousel>
        {articles.map((data, i) => (
          <Carousel.Item key={"img" + i}>
            <div>
              <img
                className="carousel-img"
                src={data.image}
                alt={data.imageAlt}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeImgCarousel;
