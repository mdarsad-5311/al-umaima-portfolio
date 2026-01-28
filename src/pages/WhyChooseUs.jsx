import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"



const WhyChooseUs = () => {

    return (
        <div>
            <Header />
            <section id="whychooseus" className="flex justify-center">
                <div className=" bg-[#f5f5f7]  p-[75px_30px] w-5xl h-[500px] mx-auto mt-10 mb-10 rounded-xl shadow-lg">
                    <h2 className="text-center text-4xl mb-5 text-blue-600 font-bold">
                        Why Choose Us?
                    </h2>

                    <ul className="list-none text-black font-bold space-y-3 text-center">
                        <li>
                            <strong>Innovation First</strong> – Turning bold ideas into powerful
                            solutions
                        </li>
                        <li>
                            <strong>Global + Arabic Touch</strong> – A unique blend of culture
                            and modern technology
                        </li>
                        <li>
                            <strong>Client-Centric</strong> – We succeed when your brand
                            succeeds
                        </li>
                        <li>
                            <strong>End-to-End Solutions</strong> – From strategy to execution
                            under one roof
                        </li>
                    </ul>
                </div>
            </section>
            <div>
                <Footer />

            </div>
        </div>
    );
};

export default WhyChooseUs;
