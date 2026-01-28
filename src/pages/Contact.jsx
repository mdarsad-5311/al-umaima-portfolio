import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer";
const Contact =()=>{
    return (
        <div className="font-inter w-full flex flex-col justify-center items-center">
            <Header />
            <div
                className="w-full h-[827px] font-inter pt-20 px-[5vw] flex flex-row gap-10"
            >
                {/* Left Section */}
                <div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 p-10"
                >
                    <h1 className="text-6xl font-semibold">Contact Us</h1>
                    <h1 className="mt-5 text-lg">
                        Have a question or ready to take the next step? At AL-UMAIMA,{" "}
                        <br />
                        we're here to guide you.
                    </h1>
                    <h1 className="text-xl py-5 font-medium">Office Locations</h1>
                    <div className="flex flex-col justify-center space-y-5 py-5">
                        {[
                            {
                                country: "INDIA",
                                address: "NASHIK.MAHARASTRA",
                                // icon: image.uae,
                            },
                            {
                                country: "INDIA",
                                address: "RANCHI,JHARKHAND",
                                // icon: image.uganda,
                            },
                        ].map((location, index) => (
                            <div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="h-[112px] w-[440px] bg-[#f5f5f7] flex px-5 space-y-3 flex-col justify-center items-start rounded-2xl transition-all duration-700"
                            >
                                <p className="text-base font-medium space-x-2 flex items-center">
                                    {/* <img src={location.icon} alt={location.country} /> */}
                                    <span>{location.country}</span>
                                </p>
                                <p className="text-sm text-start text-gray-500">
                                    {location.address}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Section */}
                <div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-[550px] h-[550px] bg-[#f5f5f7] rounded-3xl p-6"
                >
                    <h1 className="text-4xl py-8">Send us an email</h1>
                    <div className="flex flex-wrap gap-4 px-2">
                        {["First Name", "Last Name"].map((label, index) => (
                            <div key={index} className="flex-1">
                                <label className="text-md">
                                    {label} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder={label}
                                    className="w-full py-2 px-5 rounded-md border-gray-300 shadow-sm border-[1px] mt-1"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="px-2 mt-5">
                        <label className="block text-md">Message</label>
                        <textarea
                            placeholder="Enter Message"
                            className="w-full px-4 py-2 block rounded-md border-gray-300 shadow-sm border-[1px] mt-1"
                            rows="4"
                        ></textarea>
                    </div>
                    <button className="px-2 mt-5" type="submit">
                        <div className="flex justify-start w-[126px] h-[48px] top-[583px] left-[25px] gap-[10px] opacity-100 rounded-full pt-4 pr-11 pb-4 pl-11
                         border-gray-300 shadow-sm border-[1px] hover:bg-[#00E6C1]">
                            <button>Send</button>
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-full">
                <Footer/>
            </div>
        </div>

    );
};

export default Contact;