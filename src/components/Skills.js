import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      icon: "images/icons/ui-ux.svg",
      title: "UI/UX Design",
      des: "Creating intuitive and engaging user experiences.",
    },
    {
      id: 2,
      icon: "images/icons/web-design.svg",
      title: "Web Design",
      des: "Designing responsive and visually appealing websites.",
    },
    {
      id: 3,
      icon: "images/icons/digital-marketing.svg",
      title: "Digital Marketing",
      des: "Developing data-driven marketing strategies.",
    },
    {
      id: 4,
      icon: "images/icons/app-design.svg",
      title: "App Development",
      des: "Building scalable and efficient mobile applications.",
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
                  src="images/icons/arrow-left.svg"
                  alt="skill left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active skill-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
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
