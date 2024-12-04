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
    </main>
  );
};

export default Home;
