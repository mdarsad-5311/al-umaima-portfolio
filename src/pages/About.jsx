import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer"
const About = () => {
  return (
    <div>
      <Header />

      <section id="about" className="px-4">
        <section className="  bg-[#f5f5f7]  p-[75px_30px] max-w-5xl mx-auto mt-10 mb-10 rounded-xl shadow-lg">
        
          <h2 className="text-center text-[2.5rem] mb-[20px ] text-blue-600 md:text-[2rem]">
            About Us
          </h2>

          <p className="text-[1.1rem] leading-[1.7] mb-[15px] text-center md:text-[1rem]">
            We are a team of passionate{" "}
            <span className="text-[#0073e6] font-bold">Software Developers</span> and{" "}
            <span className="text-[#0073e6] font-bold">Digital Marketing Professionals</span>.
            With expertise in{" "}
            <span className="text-[#0073e6] font-bold">
              HTML, CSS, and modern web technologies
            </span>
            , we design responsive, user-friendly, and performance-driven websites that
            create lasting impressions.
          </p>

          <p className="text-[1.1rem] leading-[1.7] mb-[15px] text-center md:text-[1rem]">
            Alongside development, our{" "}
            <span className="text-[#0073e6] font-bold">Digital Marketing Agency</span> helps
            businesses grow online through{" "}
            <span className="text-[#0073e6] font-bold">
              SEO, Social Media Marketing, Content Strategy, and Paid Campaigns
            </span>
            . We combine creativity with technology to deliver complete digital solutions
            that enhance both visibility and conversion.
          </p>

          <div
            className="
            bg-[#f0f8ff] 
            p-[20px ] 
            mt-[25px]
            border-l-[6px] 
            border-[#0073e6]
            rounded-[8px ] 
            text-center
          "
          >
            <h3 className="text-[1.4rem] font-semibold mb-2">Our Mission</h3>
            <p className="text-[1.1rem] md:text-[1rem]">
              To empower businesses with innovative websites and smart marketing strategies
              that drive real results.
            </p>
          </div>
        </section>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
