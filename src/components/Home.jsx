import HomeArticleScroll from "./HomeArticleScroll";
import HomeImgCarousel from "./HomeImgCarousel";

function Home() {
  console.log("--Home--");

  return (
    <div className="home">
      <HomeArticleScroll />
      <HomeImgCarousel />
    </div>
  );
}

export default Home;
