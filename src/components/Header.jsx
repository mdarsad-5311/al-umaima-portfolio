import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [services, setServices] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const neumorphic = {
    boxShadow:
      "-3px -3px 7px #ffffff, 3px 3px 5px #ceced1, inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1",
  };

  const handleSelect = (value) => {
    setServices(value);
    setOpen(false);
    navigate("/" + value);
  };

  return (
    <nav className="w-full bg-[#ecf0f3]">
      <div className="max-w-[1270px] mx-auto px-7 flex justify-between items-center py-2 relative">
        
        {/* Mobile Toggle */}
        <input type="checkbox" id="menuToggle" className="hidden peer" />

        {/* Logo */}
        <div className="flex items-center ">
         <a href="/"> <img src="/logo.png" alt="logo" 
          style={neumorphic}
          className="w-[150px] h-[110px] rounded-xl" /></a>
  
        </div>

        {/* Menu */}
        <ul className="flex gap-7 list-none relative">

          {/* <label
            htmlFor="menuToggle"
            className="lg:hidden absolute top-6 right-6 text-2xl cursor-pointer"
          >
            ✖
          </label> */}

          <li>
            <a
              href="/"
              style={neumorphic}
              className="px-4 py-3 rounded-[10px] block text-[#31344b] hover:text-[#3498db]"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              style={neumorphic}
              className="px-4 py-3 rounded-[10px] block text-[#31344b] hover:text-[#3498db]"
            >
              About
            </a>
          </li>

          {/* CUSTOM DROPDOWN */}
          <li className="relative">
            <div
              onClick={() => setOpen(!open)}
              style={neumorphic}
              className="
                px-4 py-3 rounded-[10px] 
                bg-white cursor-pointer 
                text-[#31344b]
                flex items-center justify-between
                min-w-[130px]
              "
            >
              {services || "Services"}
              <span className="ml-2">▾</span>
            </div>

            {open && (
              <div
                className="
                  absolute mt-2 left-0 w-full
                  bg-white rounded-xl
                  shadow-lg border border-gray-200 
                  overflow-hidden z-50
                "
              >
                <div
                  className="px-4 py-3 hover:text-[#3498db] cursor-pointer text-gray-700"
                  onClick={() => handleSelect("web")}
                  style={neumorphic}
                >
                  Web
                </div>

                <div
                  className="px-4 py-3 hover:text-[#3498db] cursor-pointer text-gray-700"
                  onClick={() => handleSelect("digital")}
                  style={neumorphic}
                >
                  Digital
                </div>
              </div>
            )}
          </li>

          <li>
            <a
              href="/whychooseus"
              style={neumorphic}
              className="px-4 py-3 rounded-[10px] block text-[#31344b] hover:text-[#3498db]"
            >
              Why Choose Us
            </a>
          </li>

          <li>
            <a
              href="/contact"
              style={neumorphic}
              className="px-4 py-3 rounded-[10px] block text-[#31344b] hover:text-[#3498db]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
