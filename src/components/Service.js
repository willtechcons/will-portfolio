import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: "/images/icons/business.svg",
      title: "Business",
      des: (
        <>
        Strong in business model and finance. Hands-on experience in business development, sales, and marketing.
        <br />
        <small>@GoodWill Consulting @Aspiro Studio @Allianz</small>
         </>
      ),
    },
    {
      id: 2,
      icon: "/images/icons/strategy.svg",
      title: "Strategy",
      des: (
        <>
        Developing IT and digital strategies aligned with business goals. Fast technology adoption and implementation.
        <br />
        <small>@GoodWill Consulting @Surfline Media @Aspiro Studio</small>
        </>),
    },
    {
      id: 3,
      icon: "/images/icons/technology.svg",
      title: "Technology",
      des: (
        <> 
        Experienced with Java, ERP, CRM (GoHighLevel) and automation tools (Zapier). Proficient in Cloud & Analytics.
        <br />
        <small>@Aspiro Studio @Allianz @Surfline Media</small>
        </>
        ),
    },
    {
      id: 4,
      icon: "/images/icons/problemsolving.svg",
      title: "Problem-Solving",
      des: (
        <>
        Analyze problems from all angles. Experience as employee and founder. Strong decision-making skills.
        <br />
        <small>@GoodWill Consulting @Aspiro Studio @Allianz</small>
        </>
      ),
    },
    {
      id: 5,
      icon: "/images/icons/communication.svg",  
      title: "Communication",
      des: (
        <>
        Strong client-facing communication. Secured contracts via negotiaion, proposals and presentations.
          <br />
          <small>@GoodWill Consulting, @Aspiro Studio</small>
        </>
      ),
      
    },
  ];
  

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            <div className="section_title wow fadeInUp">
              <p>Skills</p>
              <h2>My Core Skills & Expertise</h2>
            </div>
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="/images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="/images/icons/arrow-right.svg"
                  alt="service right btn"
                />
              </a>
            </div>
          </div>
          <Swiper {...doraSlider.serviceSlider} className="swiper services-cont wow fadeInUp">
            {serviceData.map((service, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="service-item">
                  <span className={`service-item-logo service-item-logo-cont-${service.id}`}>
                    <img src={service.icon} alt="service" />
                  </span>
                  <h4>{service.title}</h4>
                  <p>{service.des}</p>
                  
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