import SetCard from "../../components/Cards/SetCard/SetCard";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container hero__container">
          <h1>Discover your inner beauty with Blossom Glow Kit</h1>
          <p>Great gift for yourself and loved ones</p>
          <button>Shop now</button>
        </div>
      </section>
      <section className="swipers">
        <div className="container swipers__container">
          <CustomSwiper text="new arrivals" />
          <CustomSwiper text="best sellers" />
        </div>
      </section>
      <section className="sets">
        <div className="container sets__container">
          <SetCard />
          <SetCard type={true} />
        </div>
      </section>
      <section className="blogs">
        <div className="container blogs__container">
          <CustomSwiper text="on the blog" blog={true} />
          <div className="quiz">
            <div className="quiz__left">
              <img src="images/quiz.png" alt="quiz" />
            </div>
            <div className="quiz__right">
              <h1>The Skin Quiz</h1>
              <p>
                Meet the quiz that will curate a routine just just just as
                unique as you are.
              </p>
              <button>Explore more</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
