// src/components/ServiceCard.jsx
import React from 'react';

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Web = () => {
  return (
    <div>
      <Header />

      <div className="bg-[#f5f5f7] w-[100%] p-5 text-center ">

        <ul className="mt-4">
          <div className="flex items-center justify-center h-screen">
            <img src="/facebook banner.png" alt="Centered image" className="w-[80%] h-auto rounded-2xl" />
          </div>

          <li>
            <a href="#" className="text-[#660BC2] text-2xl">
              🌐 Web Development & Design
            </a>
          </li>
        </ul>
      </div>
      < div>
        <Footer />

      </div>
    </div>
  );
}
export default Web;
