
import React from "react";

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Digital = () => {
  return (
    <div>
      <Header />

      <div className="bg-[#f5f5f7] w-[100%] p-5 text-center ">

        <ul className="mt-4">
          <div className="flex items-center justify-center h-screen">
            <img src="/public/digital.png" alt="Centered image" className="w-[80%] h-auto rounded-2xl" />
          </div>

          <li>
            <a href="#" className="text-[#660BC2] text-2xl">
            📱 Digital Marketing
            </a>
          </li><br/>
          <p className="text-black text-2xl mb-5">SEO, social media, ads, and growth strategies to maximize your online presence.</p>
        </ul>
      </div>
      < div>
        <Footer />

      </div>
    </div>
  );
}
export default Digital;
