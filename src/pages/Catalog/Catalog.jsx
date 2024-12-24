import { Icons } from "../../utils/icons";
import ProdCard from "./../../components/Cards/ProdCard/ProdCard";
import CustomSwiper from "./../../components/Swiper/CustomSwiper";
import { useInfoContext } from "../../context/infoContext";
import Loading from "../../components/Loading/Loading";
import "./Catalog.scss";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { getPage } from "../../api/getRequeset";
import { DiScriptcs } from "react-icons/di";

const Catalog = () => {
  const { products, loading, setLoading } = useInfoContext();

  const [data, setData] = useState(products);
  const [showMore, setShowMore] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window?.screen.width);

  const queryParams = new URLSearchParams(window.location.search);
  const [page, setPage] = useState(parseInt(queryParams.get("page")) || 1);

  window?.addEventListener("resize", () => {
    setScreenWidth(window?.screen.width);
  });

  console.log(page);
  useEffect(() => {
    const getResProd = async () => {
      try {
        const filters = {
          priceMax: 20,
        }
        setLoading(true);
        const response = await getPage(`prod`, filters, page);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error.message || error);
      } finally {
        setLoading(false);
      }
    };
    getResProd();
  }, [page]);

  const getResProd = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();

      for (const key in filters) {
        if (Array.isArray(filters[key])) {
          filters[key].forEach((val) => params.append(key, val));
        } else if (filters[key]) {
          params.append(key, filters[key]);
        }
      }

      params.append("page", page);

      const response = await getPage(`prod/filter?${params.toString()}`);
      setData(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке продуктов:", error.message || error);
    } finally {
      setLoading(false);
    }
  };
  getResProd();


  const handleFilterChange = (e) => {
    e.preventDefault()
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name]?.filter((v) => v !== value),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleAccordion = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.parentElement.classList.contains("links"));

    e.target.children[0]?.classList.toggle("open");
    let linkParent = e.currentTarget.parentElement;
    let accardion = e.currentTarget.nextElementSibling;
    let accardionParent = e.currentTarget.parentElement;

    if (linkParent.classList.contains("links")) {
      if (linkParent.style.maxHeight) {
        linkParent.style.maxHeight = null;
      } else {
        linkParent.style.maxHeight = linkParent.scrollHeight + "px";
      }
    }

    if (accardion.style.maxHeight && !linkParent.classList.contains("links")) {
      if (e.target.classList.contains("filter-title")) {
        accardion.style.maxHeight = null;
      } else {
        accardionParent.style.maxHeight = accardionParent.scrollHeight + "px";
        accardion.style.maxHeight = null;
        accardion.style.padding = "0 0 0 0px";
      }
    } else if (!linkParent.classList.contains("links")) {
      if (e.target.classList.contains("filter-title")) {
        accardion.style.maxHeight = accardion.scrollHeight + "px";
      } else {
        accardionParent.style.maxHeight = "max-content";
        accardion.style.padding = "10px 0 10px 0px";
        accardion.style.maxHeight = accardion.scrollHeight + "px";
      }
    }
  };
  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
  <section className="catalog">
    <div className="container catalog__container">
      <div className="catalog__container__aside">
        <ul className="links">
          {screenWidth < 940 ? (
            <li className="linkB" onClick={(e) => toggleAccordion(e)}>
              Двойное очищение
              <Icons.accordionIcon className="button__icon" />
            </li>
          ) : (
            <li className="linkB">Двойное очищение</li>
          )}
          <li>Очищающие бальзамы</li>
          <li>Масляные очищающие средства</li>
          <li>Водные очищающие средства</li>
        </ul>
        <ul className="links">
          {screenWidth < 940 ? (
            <li className="linkB" onClick={(e) => toggleAccordion(e)}>
              Двойное очищение
              <Icons.accordionIcon className="button__icon" />
            </li>
          ) : (
            <li className="linkB">Двойное очищение</li>
          )}
          <li>Очищающие бальзамы</li>
          <li>Масляные очищающие средства</li>
          <li>Водные очищающие средства</li>
        </ul>
        {screenWidth < 940 ? (
          <button
            className="filter-title"
            onClick={(e) => toggleAccordion(e)}
          >
            Фильтры <Icons.accordionIcon className="button__icon" />
          </button>
        ) : (
          <button className="filter-title">Фильтры</button>
        )}

        <form className="filter">
          <button type="button" onClick={(e) => toggleAccordion(e)}>
            Тип продукта
            <Icons.accordionIcon className="button__icon" />
          </button>
          <div className="accordion">
            <div className="input-box">
              <input type="checkbox" id="all" name="all" value="all" />
              <label htmlFor="all">Все</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="oily" name="oily" value="oily" />
              <label htmlFor="oily">Жирная кожа</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="dry" name="dry" value="dry" />
              <label htmlFor="dry">Сухая кожа</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                id="normal"
                name="normal"
                value="normal"
              />
              <label htmlFor="normal">Нормальная кожа</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                id="sensitive"
                name="sensitive"
                value="sensitive"
              />
              <label htmlFor="sensitive">Чувствительная кожа</label>
            </div>
          </div>
          <button type="button" onClick={(e) => toggleAccordion(e)}>
            Тип ингредиента
            <Icons.accordionIcon className="button__icon" />
          </button>
          <div className="accordion">
            <div className="input-box">
              <input type="checkbox" id="all" name="all" value="all" />
              <label htmlFor="all">Все</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="oily" name="oily" value="oily" />
              <label htmlFor="oily">Жирная кожа</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="dry" name="dry" value="dry" />
              <label htmlFor="dry">Сухая кожа</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                id="normal"
                name="normal"
                value="normal"
              />
              <label htmlFor="normal">Нормальная кожа</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                id="sensitive"
                name="sensitive"
                value="sensitive"
              />
              <label htmlFor="sensitive">Чувствительная кожа</label>
            </div>
          </div>
          <button type="button" onClick={(e) => toggleAccordion(e)}>
            Тип кожи
            <Icons.accordionIcon className="button__icon" />
          </button>
          <div className="accordion">
            <div className="input-box">
              <input type="checkbox" id="all" name="all" value="all" />
              <label htmlFor="all">Все</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="oily" name="oily" value="oily" />
              <label htmlFor="oily">Жирная кожа</label>
            </div>
            <div className="input-box">
              <input type="checkbox" id="dry" name="dry" value="dry" />
              <label htmlFor="dry">Сухая кожа</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                id="normal"
                name="normal"
                value="normal"
              />
              <label htmlFor="normal">Нормальная кожа</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                id="sensitive"
                name="sensitive"
                value="sensitive"
              />
              <label htmlFor="sensitive">Чувствительная кожа</label>
            </div>
          </div>
          <button type="button" onClick={(e) => toggleAccordion(e)}>
            Ценовой диапазон
            <Icons.accordionIcon className="button__icon" />
          </button>
          <div className="accordion">
            <div className="input-box">
              <input type="radio" id="under" name="price" value="all" />
              <label htmlFor="under">До $25</label>
            </div>
            <div className="input-box">
              <input type="radio" id="25-50" name="price" value="oily" />
              <label htmlFor="25-50">$25 - $50</label>
            </div>
            <div className="input-box">
              <input type="radio" id="50-100" name="price" value="dry" />
              <label htmlFor="50-100">$50 - $100</label>
            </div>
            <div className="input-box">
              <input
                type="checkbox"
                id="normal"
                name="normal"
                value="normal"
              />
              <label htmlFor="normal">Нормальная</label>
            </div>
          </div>
          <button className="apply" type="submit">
            Применить
          </button>
        </form>
      </div>
      <div className="catalog__container__mside">
        <div className="catalog__container__mside__top">
          <p>{products.length} продукт(ов)</p>
          <div className="sort">
            <span>Сортировать по</span>
          </div>
        </div>
        <div className="catalog__container__mside__down">
          <div className="catalog__container__mside__down__wrapper">
            {showMore
              ? data?.prod?.map((el) => (
                  <ProdCard key={el.ID} data={el} />
                ))
              : data?.prod
                  ?.slice(-24)
                  .map((el) => <ProdCard key={el.ID} data={el} />)}
          </div>
          <button
            className="show-more"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <>
                Показать меньше <Icons.arrowUp />
              </>
            ) : (
              <>
                Показать больше <Icons.arrowDown />
              </>
            )}
          </button>
          <Pagination totalItems={data?.total} changePage={setPage} />
        </div>
      </div>
    </div>
  </section>
  <section className="recently">
    <div className="container recently__container">
      <CustomSwiper
        data={products.slice(-15)}
        text="Недавно просмотренные продукты"
      />
    </div>
  </section>
</>

      )}
    </main>
  );
};

export default Catalog;
