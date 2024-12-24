import SetCard from "../../components/Cards/SetCard/SetCard";
import Hero from "../../components/Hero/Hero";
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
          <Hero/>
          <section className="swipers">
            <div className="container swipers__container">
              <CustomSwiper data={products?.slice(-14)} text="новинки" />
              <CustomSwiper data={products?.slice(-14)} text="бестселлеры" />
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
              <CustomSwiper text="в блоге" blog={true} />
              <div className="quiz">
                <div className="quiz__left">
                  <img src="images/quiz.png" alt="quiz" />
                </div>
                <div className="quiz__right">
                  <h1>Тест для кожи</h1>
                  <p>
                    Пройдите тест, который поможет создать уникальный уход, подходящий именно вам.
                  </p>
                  <button>Узнать больше</button>
                </div>
              </div>
            </div>
          </section>
          <section className="shares">
            <div className="container shares__container">
              <Title>
                Поделитесь, как вы расцвели с <span>#bloombeauty </span>
              </Title>
              <ul className="shares__container__wrapper">
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
                <li className="shares__container__wrapper__item">
                  <div className="shares__container__wrapper__item__curtain">
                    <button>
                      Смотреть в <Icons.instagramOutline />
                    </button>
                    <button>Купить сейчас</button>
                  </div>
                </li>
              </ul>
              <button className="shares__container__btn">Подписывайтесь на нас</button>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
