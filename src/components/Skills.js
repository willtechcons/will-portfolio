import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      icon: "public/images/icons/business.svg",
      title: "Business",
      des: "Understanding business models, financials, and digital transformation. Hands-on experience in building a business and consult others (Marketing, HR) @GoodWill Consulting @Aspiro Studio @Allianz",
    },
    {
      id: 2,
      icon: "public/images/icons/strategy.svg",
      title: "Strategy",
      des: "Developing IT and digital strategies aligned with business goals. @GoodWill Consulting @Surfline Media @Aspiro Studio",
    },
    {
      id: 3,
      icon: "public/images/icons/technology.svg",
      title: "Technology",
      des: "Deep knowledge in Cloud, Data Analytics (PowerBI, TableAu), Java OOP and automation tools (Zapier, GoHighLevel, Metricool). Junior SAP executive. @Aspiro Studio @Allianz @Surfline Media",
    },
    {
      id: 4,
      icon: "public/images/icons/problemsolving.svg",
      title: "Problem-Solving",
      des: "Experienced in analyzing problems from multiple perspectives. Having worked both as an employee and a business owner, I understand different stakeholders' mindsets and needs. @GoodWill Consulting @Aspiro Studio @Allianz",
    },
    {
      id: 5,
      icon: "public/images/icons/communication.svg",  
      title: "Communication",
      des: "Strong client-facing communication, successfully convinced 4 companies (each with 20+ employees) to enter a contract through strategic negotiation, presentation with proposals and persuasive communication. @GoodWill Consulting, @Aspiro Studio",
    },
  ];
  

  return (
    <section className="skill-section" id="skills">
      <div className="container">
        <div className="row align-items-center">
          <div className="skill-title-container">
            {/* Skill Title */}
            <div className="section_title wow fadeInUp">
              <p>Skills</p>
              <h2>My Core Skills & Expertise</h2>
            </div>
            {/* Arrow icon */}
            <div className="skill-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow skill-swiper-button-left">
                <img
                  className="svg"
                  src="public/images/icons/arrow-left.svg"
                  alt="skill left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active skill-swiper-button-right"
              >
                <img
                  className="svg"
                  src="public/images/icons/arrow-right.svg"
                  alt="skill right btn"
                />
              </a>
            </div>
          </div>
          <Swiper
            {...doraSlider.serviceSlider}
            className="swiper skills-cont wow fadeInUp"
          >
            {skillData.map((skill, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="skill-item">
                  <span
                    className={`skill-item-logo skill-item-logo-cont-${skill.id}`}
                  >
                    <img src={skill.icon} alt="skill" />
                  </span>
                  <h4>{skill.title}</h4>
                  <p>{skill.des}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Skills;
