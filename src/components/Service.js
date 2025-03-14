import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { doraSlider } from "../sliderProps";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: "/images/icons/business.svg",
      title: "Business",
      des: "Strong in business models and finance. Hands-on experience in business developing.",
      tag: "@GoodWill Consulting @Aspiro Studio @Allianz",
    },
    {
      id: 2,
      icon: "/images/icons/communication.svg",
      title: "Communication",
      des: "Client-facing skills. Secured contracts via negotiation & presentations.",
      tag: "@GoodWill Consulting @Aspiro Studio",
    },
    {
      id: 3,
      icon: "/images/icons/technology.svg",
      title: "Technology",
      des: "Java, ERP, CRM, Cloud & Analytics, Automation via Zapier, GoHighLevel, SAP, AWS.",
      tag: "@Aspiro Studio @Allianz @Surfline Media",
    },
    {
      id: 4,
      icon: "/images/icons/problemsolving.svg",
      title: "Strategy",
      des: "Analyze issues from all angles. Experience as both employee & founder.",
      tag: "@GoodWill Consulting @Aspiro Studio @Allianz",
    },
  ];

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            {/* Service Title */}
            <div className="section_title wow fadeInUp">
              <p>Skills</p>
              <h2>My Core Skills & Expertise</h2>
            </div>
            {/* Arrow icon */}
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
                  alt="service left btn"
                />
              </a>
            </div>
          </div>
          <Swiper
            {...doraSlider.serviceSlider}
            className="swiper services-cont wow fadeInUp"
          >
            {" "}
            {serviceData.map((skills, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="service-item">
                  <span
                    className={`service-item-logo service-item-logo-cont-${Service.id}`}
                  >
                    <img src={Service.icon} alt="service" />
                  </span>
                  <h4>{Service.title}</h4>
                  <p>
                    {Service.des}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Service;

