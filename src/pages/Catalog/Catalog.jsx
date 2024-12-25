import { Icons } from "../../utils/icons";
import ProdCard from "./../../components/Cards/ProdCard/ProdCard";
import CustomSwiper from "./../../components/Swiper/CustomSwiper";
import { useInfoContext } from "../../context/infoContext";
import Loading from "../../components/Loading/Loading";
import "./Catalog.scss";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { getPage } from "../../api/getRequeset";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const { products, loading, setLoading } = useInfoContext();

  const [data, setData] = useState(products || []);
  const [showMore, setShowMore] = useState(false);
  const [filters, setFilters] = useState(
    JSON.parse(localStorage.getItem("filters")) || {}
  );
  const [screenWidth, setScreenWidth] = useState(window?.screen.width);
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const [page, setPage] = useState(parseInt(queryParams.get("page")) || 1);

  window?.addEventListener("resize", () => {
    setScreenWidth(window?.screen.width);
  });

  useEffect(() => {
    const getResProd = async () => {
      try {
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

  const handleFilterChange = (e) => {
    e.preventDefault();

    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name]?.filter((v) => v !== value),
      }));
    } else if (name === "price") {
      setFilters((prev) => ({
        ...prev,
        priceMin: value.split("-")[0],
        priceMax: value.split("-")[1],
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();

      // Filtrlarni query stringga qo'shish
      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => queryParams.append(key, v));
        } else {
          queryParams.append(key, value);
        }
      });

      // Query stringni o'rnatish
      navigate(`?${queryParams.toString()}`, { replace: true });

      // Ma'lumotlarni olish
      const res = await getPage("prod", filters);
      localStorage.setItem("filters", JSON.stringify(filters));

      console.log(res);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
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

                <form onSubmit={handleSubmit} className="filter">
                  <button type="button" onClick={(e) => toggleAccordion(e)}>
                    Тип продукта
                    <Icons.accordionIcon className="button__icon" />
                  </button>
                  <div className="accordion">
                    <div className="input-box">
                      <input
                        type="checkbox"
                        id="all-products"
                        name="productType"
                        value="all"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="all-products">Все</label>
                    </div>
                    <div className="input-box">
                      <input
                        type="checkbox"
                        id="oily-products"
                        name="productType"
                        value="oily"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="oily-products">Жирная кожа</label>
                    </div>
                    <div className="input-box">
                      <input
                        type="checkbox"
                        id="dry-products"
                        name="productType"
                        value="dry"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="dry-products">Сухая кожа</label>
                    </div>
                  </div>

                  <button type="button" onClick={(e) => toggleAccordion(e)}>
                    Ценовой диапазон
                    <Icons.accordionIcon className="button__icon" />
                  </button>
                  <div className="accordion">
                    <div className="input-box">
                      <input
                        type="radio"
                        id="price-under"
                        name="price"
                        value="0-25"
                        checked={
                          filters.priceMin === "0" && filters.priceMax === "25"
                        }
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="price-under">До $25</label>
                    </div>
                    <div className="input-box">
                      <input
                        type="radio"
                        id="price-25-50"
                        name="price"
                        value="20-50"
                        checked={
                          filters.priceMin === "20" && filters.priceMax === "50"
                        }
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="price-25-50">$20 - $50</label>
                    </div>
                    <div className="input-box">
                      <input
                        type="radio"
                        id="price-50-100"
                        name="price"
                        value="50-100"
                        checked={
                          filters.priceMin === "50" && filters.priceMax === "100"
                        }
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="price-50-100">$50 - $100</label>
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
