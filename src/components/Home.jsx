import HomeArticleScroll from "./HomeArticleScroll";
import HomeImgCarousel from "./HomeImgCarousel";

function Home({ blogBase }) {
  console.log("--Home--");

  return (
    <div className="home">
      <HomeArticleScroll blogBase={blogBase} />
      <HomeImgCarousel blogBase={blogBase} />
    </div>
  );
}

export default Home;
