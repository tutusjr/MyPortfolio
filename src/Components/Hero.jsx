/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { GoDot } from "react-icons/go";
import pp from "../assets/bgImages/pp.png";
import { BiLogoTailwindCss } from "react-icons/bi";
import { PiFileCss } from "react-icons/pi";
import { PiFileHtmlLight } from "react-icons/pi";
import { BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { RxCornerTopLeft } from "react-icons/rx";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GiPoolTriangle } from "react-icons/gi";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

export default function Hero() {
  const colors = [
   "#27374D",
   "#252A34",
   "#561C24",
   "#3C2A21",
   "#5F0F40",
   "#430A5D",
   "#262A56"

 ];

 const [currentColorIndex, setCurrentColorIndex] = useState(0);


const [currentColor, setCurrentColor] = useState("#800080");

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    setCurrentColor(colors[currentColorIndex]); // Her renk değişiminde mevcut rengi güncelle
  }, 4000);

  return () => clearInterval(intervalId);
}, [colors, currentColorIndex]);




  return (
    <section className="h-[680px]">
      <div className="mx-auto h-full flex shadow-2xl overflow-hidden relative">
        <div style={{ color: currentColor }} className="z-10 text-6xl duration-2000 ease-in-out">
          <RxCornerTopLeft className="absolute" />
          <RxCornerTopLeft className="absolute bottom-0 -rotate-90 " />
          <RxCornerTopLeft className="absolute top-0 right-0 rotate-90 " />
          <RxCornerTopLeft className="absolute bottom-0 right-0 -rotate-180 " />
        </div>
        {/* img */}
        <div className="w-72 rounded-md absolute z-10 right-1/4 bottom-36">
          <img
            className=" w-full h-full ml-5 rounded-full object-cover"
            src={pp}
            alt=""
          />
        </div>
        {/* sol */}
        <div className="bg-gradient-to-r  from-pink-500 to-purple-500 h-full w-full overflow-hidden relative">
          {/* sol tasarim */}
          <div>
            <div style={{ color: currentColor }} className="flex absolute duration-2000 ease-in-out bottom-10 left-1/4">
              <GoDot />
              <GoDot />
              <GoDot />
              <GoDot />
            </div>
            <div style={{ color: currentColor }} className="absolute text-2xl duration-2000 ease-in-out left-48 top-40 grid grid-cols-2 gap-2">
              <BiLogoTailwindCss />
              <PiFileCss />
              <BsFiletypeScss />
              <PiFileHtmlLight />
              <FaReact />
              <RiJavascriptLine />
              <TbBrandTypescript />
              <TbBrandNextjs />
              <SiRedux />
              <FaNodeJs />
            </div>
            <div style={{ borderColor: currentColor }} className=" absolute h-40 w-40 rotate-45 rounded-full -translate-x-24 mt-96 duration-2000 ease-in-out bg-transparent border-2"></div>
          </div>
          {/* sol yazi */}
          <div className=" h-60 w-3/4 ml-auto mt-36 flex justify-center">
            <div className="flex flex-col gap-5 px-20 py-5 ">
              <div>
                <motion.h1 className="h1 text-orange-200">Hi I'm <span className="font-bold">TUTUS</span></motion.h1>
                <h2 style={{ color: currentColor }} className={`w-fit font-semibold transition-colors duration-2000 ease-in-out h2`}>Frontend Developer</h2>
                  <div style={{borderColor: currentColor}} className=" duration-2000 ease-in-out rounded-full w-[436px] mt-2 border-2">
                  </div>
              </div>
              <p className="p text-orange-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae maiores saepe nisi iste reiciendis.
              </p>
            </div>
          </div>
        </div>
        {/* sag */}
        <div className="h-full w-1/2 bg-gradient-to-r relative from-purple-500 to-orange-400">
          <div style={{ color: currentColor }} className=" absolute duration-2000 ease-in-out bottom-20 right-7">
            <GoDot />
            <GoDot />
            <GoDot />
            <GoDot />
          </div>
          <div>
            <GiPoolTriangle style={{ color: currentColor }} className="text-6xl absolute top-8 right-2/3 duration-2000 ease-in-out" />
          </div>
          <div style={{ borderColor: currentColor }} className="absolute duration-2000 ease-in-out h-40 w-40 rotate-180 rounded-full translate-x-24 right-0 mt-28 bg-transparent border-2 "></div>
        </div>
      </div>
    </section>
  );
}
