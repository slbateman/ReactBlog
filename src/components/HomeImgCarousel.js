import Carousel from "../../node_modules/react-bootstrap/Carousel";
import ArticleList from "../data/ArticleList";
import Shoggoth from "../images/shoggoth.jpeg";

function HomeImgCarousel() {
  return (
    <div class="home-img-carousel">
      <Carousel>
        {ArticleList.map((data) => (
          <Carousel.Item>
            <div>
              <img className="carousel-img" src={Shoggoth} alt={data.imageAlt} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeImgCarousel;
