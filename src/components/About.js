import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="home-about">
        <div className="breadcrumb">
          <Link to="/" className="home-link">Home</Link> &gt; About
        </div>
        <h2 className="about-title">About Me</h2>
      </div>
      <div className="about-content">
      <p>
  I am Mubeen Tariq, a skilled web developer with a passion for creating
  dynamic, user-friendly websites. I specialize in React and modern
  front-end development practices. With a strong foundation in HTML, CSS,
  and JavaScript, I enjoy crafting visually appealing interfaces that
  provide seamless user experiences. My expertise also extends to leveraging 
  tools like Redux for state management and integrating APIs to build scalable 
  and efficient applications.
</p>
<p>
  My goal is to build applications that are not only functional but also
  optimized for performance and accessibility. I am continuously learning
  and exploring new technologies to stay updated in this ever-evolving
  field. This includes gaining proficiency in libraries and frameworks such
  as Next.js and Tailwind CSS to enhance development speed and code
  maintainability. I am also committed to writing clean, maintainable code
  and adhering to best practices in software development.
</p>
<p>
  Beyond development, I am enthusiastic about collaborating with teams to
  bring innovative ideas to life. I thrive in environments where I can share
  knowledge, mentor others, and contribute to the growth of the community. 
  I actively participate in tech meetups and contribute to open-source projects 
  to enhance my skills and give back to the developer community.
</p>
<p>
  When I’m not coding, I enjoy exploring new technologies, experimenting 
  with creative solutions to complex problems, and staying inspired by the 
  latest advancements in the tech industry. I also have a keen interest in 
  personal growth and continuously strive to improve my problem-solving 
  and analytical skills.
</p>
<p>
  Whether it’s building a small personal project or collaborating on a large-scale
  application, I am driven by the opportunity to make a meaningful impact through 
  technology and innovation.
</p>

        <div className="contact-info">
          <p>Email: <a href="mailto:mubeentariq35951@gmail.com">mubeentariq35951@gmail.com</a></p>
          <p>Contact: <a href="tel:+923100045017">+92-310-004-5017</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
