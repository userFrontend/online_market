import { Icons } from "./../../utils/icons";
import "./About.scss";
const About = () => {
  const toggleAccordion = (e) => {
    e.preventDefault();
    e.target.children[0].classList.toggle("open");
    let accardion = e.currentTarget.nextElementSibling;
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
      <section className="about">
        <div className="container about__container">
          <div className="about__container__aside">
            <ul className="links">
              <li>About Us</li>
              <li>Shipping & Returns</li>
              <li>Contact us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="about__container__mside">
            <div className="accordions">
              <h2>Shipping</h2>
              <div className="accordion">
                <button type="button" onClick={(e) => toggleAccordion(e)}>
                  Domestic Shipping
                  <Icons.accordionIcon className="button__icon" />
                </button>
                <p className="content">
                  We're pleased to offer international shipping via BorderGuru.
                  International shipping and import fees including customs
                  duties, taxes and fees are calculated at check-out. Depending
                  on destination, transit time can take from 4 to 12 business
                  days. Please note we do not accept returns on international
                  orders. All products are shipped directly from Los Angeles,
                  CA. Orders placed before 3 pm PST/PDT will be processed and
                  shipped by the next business day. Orders placed on Fridays and
                  over the weekend will be processed and shipped by the
                  following Monday. Shipping confirmation email along with
                  tracking information will be sent when your order is
                  processed. Please note we are not responsible for lost or
                  stolen packages, or returned or delayed packages by the postal
                  service.
                </p>
              </div>
              <div className="accordion">
                <button type="button" onClick={(e) => toggleAccordion(e)}>
                  International Shipping
                  <Icons.accordionIcon className="button__icon" />
                </button>
                <p className="content">
                  We're pleased to offer international shipping via BorderGuru.
                  International shipping and import fees including customs
                  duties, taxes and fees are calculated at check-out. Depending
                  on destination, transit time can take from 4 to 12 business
                  days. Please note we do not accept returns on international
                  orders. All products are shipped directly from Los Angeles,
                  CA. Orders placed before 3 pm PST/PDT will be processed and
                  shipped by the next business day. Orders placed on Fridays and
                  over the weekend will be processed and shipped by the
                  following Monday. Shipping confirmation email along with
                  tracking information will be sent when your order is
                  processed. Please note we are not responsible for lost or
                  stolen packages, or returned or delayed packages by the postal
                  service.
                </p>
              </div>
              <div className="accordion">
                <button type="button" onClick={(e) => toggleAccordion(e)}>
                  Shipping Restriction
                  <Icons.accordionIcon className="button__icon" />
                </button>
                <p className="content">
                  We're pleased to offer international shipping via BorderGuru.
                  International shipping and import fees including customs
                  duties, taxes and fees are calculated at check-out. Depending
                  on destination, transit time can take from 4 to 12 business
                  days. Please note we do not accept returns on international
                  orders. All products are shipped directly from Los Angeles,
                  CA. Orders placed before 3 pm PST/PDT will be processed and
                  shipped by the next business day. Orders placed on Fridays and
                  over the weekend will be processed and shipped by the
                  following Monday. Shipping confirmation email along with
                  tracking information will be sent when your order is
                  processed. Please note we are not responsible for lost or
                  stolen packages, or returned or delayed packages by the postal
                  service.
                </p>
              </div>
            </div>
            <div className="accordions">
              <h2>Returns</h2>
              <div className="accordion">
                <button type="button" onClick={(e) => toggleAccordion(e)}>
                  Return policy <Icons.accordionIcon className="button__icon" />
                </button>
                <p className="content">
                  We're pleased to offer international shipping via BorderGuru.
                  International shipping and import fees including customs
                  duties, taxes and fees are calculated at check-out. Depending
                  on destination, transit time can take from 4 to 12 business
                  days. Please note we do not accept returns on international
                  orders. All products are shipped directly from Los Angeles,
                  CA. Orders placed before 3 pm PST/PDT will be processed and
                  shipped by the next business day. Orders placed on Fridays and
                  over the weekend will be processed and shipped by the
                  following Monday. Shipping confirmation email along with
                  tracking information will be sent when your order is
                  processed. Please note we are not responsible for lost or
                  stolen packages, or returned or delayed packages by the postal
                  service.
                </p>
              </div>
              <div className="accordion">
              <button type="button" onClick={(e) => toggleAccordion(e)}>
                How to return <Icons.accordionIcon className="button__icon" />
              </button>
                <p className="content">
                  We're pleased to offer international shipping via BorderGuru.
                  International shipping and import fees including customs
                  duties, taxes and fees are calculated at check-out. Depending
                  on destination, transit time can take from 4 to 12 business
                  days. Please note we do not accept returns on international
                  orders. All products are shipped directly from Los Angeles,
                  CA. Orders placed before 3 pm PST/PDT will be processed and
                  shipped by the next business day. Orders placed on Fridays and
                  over the weekend will be processed and shipped by the
                  following Monday. Shipping confirmation email along with
                  tracking information will be sent when your order is
                  processed. Please note we are not responsible for lost or
                  stolen packages, or returned or delayed packages by the postal
                  service.
                </p>
              </div>
              <div className="accordion">
              <button type="button" onClick={(e) => toggleAccordion(e)}>
                Refunds <Icons.accordionIcon className="button__icon" />
              </button>
                <p className="content">
                  We're pleased to offer international shipping via BorderGuru.
                  International shipping and import fees including customs
                  duties, taxes and fees are calculated at check-out. Depending
                  on destination, transit time can take from 4 to 12 business
                  days. Please note we do not accept returns on international
                  orders. All products are shipped directly from Los Angeles,
                  CA. Orders placed before 3 pm PST/PDT will be processed and
                  shipped by the next business day. Orders placed on Fridays and
                  over the weekend will be processed and shipped by the
                  following Monday. Shipping confirmation email along with
                  tracking information will be sent when your order is
                  processed. Please note we are not responsible for lost or
                  stolen packages, or returned or delayed packages by the postal
                  service.
                </p>
              </div>
            </div>
            <div className="about__container__mside__down"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
