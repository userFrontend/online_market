import { Icons } from "../../utils/icons";
import "./Catalog.scss";
import ProdCard from "./../../components/Cards/ProdCard/ProdCard";
import CustomSwiper from './../../components/Swiper/CustomSwiper';

const Catalog = () => {
  let arr = [];
  for (let i = 0; i < 18; i++) {
    arr[i] = i;
  }
  console.log(arr);

  const toggleAccordion = (e) => {
    e.preventDefault();
    e.target.children[0].classList.toggle("open");
    let accardion = e.currentTarget.nextElementSibling;
    console.log(e.target.children[0]);
    if (accardion.style.maxHeight) {
      accardion.style.maxHeight = null;
      accardion.style.padding = "0";
    } else {
      accardion.style.padding = "10px 0";
      accardion.style.maxHeight = accardion.scrollHeight + "px";
    }
  };
  return (
    <main>
      <section className="catalog">
        <div className="container catalog__container">
          <div className="catalog__container__aside">
            <ul className="links">
              <li>Double-Cleanse</li>
              <li>Cleansing Balms</li>
              <li>Oil Cleansers</li>
              <li>Water Cleansers</li>
            </ul>
            <ul className="links">
              <li>Double-Cleanse</li>
              <li>Cleansing Balms</li>
              <li>Oil Cleansers</li>
              <li>Water Cleansers</li>
            </ul>
            <form className="filter">
              <h2>Filters</h2>
              <button type="button" onClick={(e) => toggleAccordion(e)}>
                Product Type
                <Icons.accordionIcon className="button__icon" />
              </button>
              <div className="accordion">
                <div className="input-box">
                  <input type="checkbox" id="all" name="all" value="all" />
                  <label htmlFor="all">All</label>
                </div>
                <div className="input-box">
                  <input type="checkbox" id="oily" name="oily" value="oily" />
                  <label htmlFor="oily">Oily</label>
                </div>
                <div className="input-box">
                  <input type="checkbox" id="dry" name="dry" value="dry" />
                  <label htmlFor="dry">Dry</label>
                </div>
                <div className="input-box">
                  <input
                    type="checkbox"
                    id="normal"
                    name="normal"
                    value="normal"
                  />
                  <label htmlFor="normal">Normal</label>
                </div>
                <div className="input-box">
                  <input
                    type="checkbox"
                    id="sensitive"
                    name="sensitive"
                    value="sensitive"
                  />
                  <label htmlFor="sensitive">Sensitive</label>
                </div>
              </div>
              <button type="button" onClick={(e) => toggleAccordion(e)}>
                Ingredient Type
                <Icons.accordionIcon className="button__icon" />
              </button>
              <div className="accordion">
                <div className="input-box">
                  <input type="checkbox" id="all" name="all" value="all" />
                  <label htmlFor="all">All</label>
                </div>
                <div className="input-box">
                  <input type="checkbox" id="oily" name="oily" value="oily" />
                  <label htmlFor="oily">Oily</label>
                </div>
                <div className="input-box">
                  <input type="checkbox" id="dry" name="dry" value="dry" />
                  <label htmlFor="dry">Dry</label>
                </div>
                <div className="input-box">
                  <input
                    type="checkbox"
                    id="normal"
                    name="normal"
                    value="normal"
                  />
                  <label htmlFor="normal">Normal</label>
                </div>
                <div className="input-box">
                  <input
                    type="checkbox"
                    id="sensitive"
                    name="sensitive"
                    value="sensitive"
                  />
                  <label htmlFor="sensitive">Sensitive</label>
                </div>
              </div>
              <button type="button" onClick={(e) => toggleAccordion(e)}>
                Skin Type
                <Icons.accordionIcon className="button__icon" />
              </button>
              <div className="accordion">
                <div className="input-box">
                  <input type="checkbox" id="all" name="all" value="all" />
                  <label htmlFor="all">All</label>
                </div>
                <div className="input-box">
                  <input type="checkbox" id="oily" name="oily" value="oily" />
                  <label htmlFor="oily">Oily</label>
                </div>
                <div className="input-box">
                  <input type="checkbox" id="dry" name="dry" value="dry" />
                  <label htmlFor="dry">Dry</label>
                </div>
                <div className="input-box">
                  <input
                    type="checkbox"
                    id="normal"
                    name="normal"
                    value="normal"
                  />
                  <label htmlFor="normal">Normal</label>
                </div>
                <div className="input-box">
                  <input
                    type="checkbox"
                    id="sensitive"
                    name="sensitive"
                    value="sensitive"
                  />
                  <label htmlFor="sensitive">Sensitive</label>
                </div>
              </div>
              <button type="button" onClick={(e) => toggleAccordion(e)}>
                Price Range
                <Icons.accordionIcon className="button__icon" />
              </button>
              <div className="accordion">
                <div className="input-box">
                  <input type="radio" id="under" name="price" value="all" />
                  <label htmlFor="under">Under $25</label>
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
                  <label htmlFor="normal">Normal</label>
                </div>
              </div>
              <button className="apply" type="submit">
                Apply
              </button>
            </form>
          </div>
          <div className="catalog__container__mside">
            <div className="catalog__container__mside__top">
              <p>{arr.length} product</p>
              <div className="sort">
                <span>sort by</span>
              </div>
            </div>
            <div className="catalog__container__mside__down">
              {arr.map((el) => (
                <ProdCard key={el} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="recently">
        <div className="container recently__container">
           <CustomSwiper text="Recently Viewed Products"/>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
