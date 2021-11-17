import Store from "../store/Store";
import Carousel from "../../node_modules/react-bootstrap/Carousel";

function HomeImgCarousel() {
  console.log("--Home Carousel--")
  const state = Store.getState();

  return (
    <div className="home-img-carousel">
      <Carousel>
        {state.blogs.map((data, i) => (
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
