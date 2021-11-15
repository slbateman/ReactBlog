import Carousel from "../../node_modules/react-bootstrap/Carousel";
import ArticleList from "../data/ArticleList";

function HomeImgCarousel() {
  return (
    <div className="home-img-carousel">
      <Carousel>
        {ArticleList.map((data) => (
          <Carousel.Item  key={data.articleID+data.imageAlt} >
            <div>
              <img className="carousel-img" src={data.image} alt={data.imageAlt} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeImgCarousel;
