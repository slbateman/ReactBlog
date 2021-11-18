import Carousel from "../../node_modules/react-bootstrap/Carousel";

function HomeImgCarousel({ blogBase }) {
  console.log("--Home Carousel--")
  return (
    <div className="home-img-carousel">
      <Carousel>
        {blogBase.map((data, i) => (
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
