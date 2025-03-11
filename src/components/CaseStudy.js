import { useContext } from "react";
import { DoraContext } from "../Context";

const CaseStudy = () => {
  const { blogDetails, blogs } = useContext(DoraContext);
  return (
    <section className="case-study-section fill-section" id="case-study">
      <div className="container">
        {/* Case Study Title */}
        <div className="section_title wow fadeInUp center">
          <p>My Case Study</p>
          <h2>Real-world solutions, proven impact.</h2>
        </div>
        <div className="case-study-items">
          {blogs.map((blog) => (
            <div className="case-study-item" key={blog.id}>
              <div className="wow fadeInUp item__">
                <div className="case-study-date-cont">
                  <p>{blog.date}</p>
                </div>
                <a
                  href="#"
                  className="case-study-item-img"
                  onClick={() => blogDetails(blog)}
                >
                  <img src={blog.img} alt="case-study-img" />
                </a>
                <div className="case-study-info">
                  <a
                    href="#"
                    onClick={() => blogDetails(blog)}
                    className="category"
                  >
                    {blog.catagory}
                  </a>
                  <h4>
                    <a href="#" onClick={() => blogDetails(blog)}>
                      {blog.title}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CaseStudy;
