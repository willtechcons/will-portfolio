import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      icon: "/images/icons/business.svg",
      title: "Business",
      des: (
        <>
        Understanding business models, financials, and digital transformation. Hands-on experience in building a business and consult others (Marketing, HR)
        <br />
        @GoodWill Consulting @Aspiro Studio @Allianz
         </>
      ),
    },
    {
      id: 2,
      icon: "/images/icons/strategy.svg",
      title: "Strategy",
      des: (
        <>
        Developing IT and digital strategies aligned with business goals. 
        <br />
        @GoodWill Consulting @Surfline Media @Aspiro Studio
        </>),
    },
    {
      id: 3,
      icon: "/images/icons/technology.svg",
      title: "Technology",
      des: (
        <> 
        Deep knowledge in Cloud, Data Analytics (PowerBI, TableAu), Java OOP and automation tools (Zapier, GoHighLevel, Metricool). Junior SAP executive.
        <br />
        @Aspiro Studio @Allianz @Surfline Media
        </>
        ),
    },
    {
      id: 4,
      icon: "/images/icons/problemsolving.svg",
      title: "Problem-Solving",
      des: (
        <>
        Experienced in analyzing problems from multiple perspectives. Having worked both as an employee and a business owner, I understand different stakeholders' mindsets and needs. 
        <br />
        @GoodWill Consulting @Aspiro Studio @Allianz
        </>
      ),
    },
    {
      id: 5,
      icon: "/images/icons/communication.svg",  
      title: "Communication",
      des: (
        <>
          Strong client-facing communication, successfully convinced 4 companies (each with 20+ employees) to enter a contract through strategic negotiation, presentation with proposals, and persuasive communication.
          <br />
          @GoodWill Consulting, @Aspiro Studio
        </>
      ),
      
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
            {serviceData.map((service, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="service-item">
                  <span
                    className={`service-item-logo service-item-logo-cont-${service.id}`}
                  >
                    <img src={service.icon} alt="service" />
                  </span>
                  <h4>{service.title}</h4>
                  <p>
                    Will's Skills: 
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

