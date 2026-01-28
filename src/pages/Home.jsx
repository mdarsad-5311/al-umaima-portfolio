import React, { useState, useEffect } from "react";
// import Header from "../components/Header";

import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
    const slides = [
        {
            img: "https://admin.wac.co/uploads/Web_Development_Services_dbde4811a3.png",
            text: "Web Development – Responsive & Modern",
        },
        {
            img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
            text: "Digital Marketing – SEO & Social Media Growth",
        },
        {
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            text: "Creative Solutions – UI/UX & Branding",
        },
    ];

    const [index, setIndex] = useState(0);
    const total = slides.length;

    const nextSlide = () => setIndex((index + 1) % total);
    const prevSlide = () => setIndex((index - 1 + total) % total);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    });
    return (
        <div>
            <Header />
        
        <section
            className="
        text-center "
        >
            <div className=" text-white
             py-[50px] px-[20px ] h-[500px]
       bg-[linear-gradient(rgba(0,115,230,0.7),rgba(0,115,230,0.7)),url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')]
        bg-center bg-cover bg-no-repeat">
                <h1 className="text-white text-[3rem] font-bold mb-[15px]">
                    WELCOME TO AL-UMAIMA TECHFORGE
                </h1>

                <p className="text-white text-[1.3rem] max-w-[700px] mx-auto mb-6 leading-relaxed">
                    We craft <b>modern websites</b> with clean code and innovative design,
                    and boost your business with <b>powerful digital marketing strategies</b>.
                </p>
            </div>
            {/* craousl */}
            <div className="relative max-w-[100% ] mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className="w-full flex-shrink-0 relative">
                            <img
                                src={slide.img}
                                className="w-full h-[500px] object-cover"
                                alt="carousel slide"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-lg">
                                {slide.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
                >
                    ❮
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
                >
                    ❯
                </button>
            </div>



        </section>
       < div>
                <Footer />

            </div>
        </div>
    )
}

export default Home
