import SetCard from "../../components/Cards/SetCard/SetCard";
import Loading from "../../components/Loading/Loading";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import Title from "../../components/Title/Title";
import { useInfoContext } from "../../context/infoContext";
import { Icons } from "../../utils/icons";

import "./Home.scss";

const Home = () => {
  const { products, loading } = useInfoContext();

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="hero">
            <div className="container hero__container">
              <h1>Discover your inner beauty with Blossom Glow Kit</h1>
              <p>Great gift for yourself and loved ones</p>
              <button>Shop now</button>
            </div>
          </section>
          <section className="swipers">
            <div className="container swipers__container">
              <CustomSwiper data={products?.slice(-14)} text="new arrivals" />
              <CustomSwiper data={products?.slice(-14)} text="best sellers" />
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
          <section className="shares">
            <div className="container shares__container">
              <Title>
                Share how you blossomed with <span>#bloombeauty </span>
              </Title>
              <ul className="shares__container__wrapper">
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      See In <Icons.instagramOutline />
                    </button>
                    <button>Buy Now</button>
                  </div>
                </li>
              </ul>
              <button className="shares__container__btn">Follow Us</button>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
