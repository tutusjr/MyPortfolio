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
    <section className="h-[90vh]  snap-start relative">
      <div className="mx-auto h-full flex  overflow-hidden relative">
        <div style={{ color: currentColor }} className="z-10 text-[6vh] duration-2000 transition-colors  ease-in-out">
          <RxCornerTopLeft className="absolute h-[7vh]" />
          <RxCornerTopLeft className="absolute bottom-0  -rotate-90 " />
          <RxCornerTopLeft className="absolute top-0 right-0 rotate-90 " />
          <RxCornerTopLeft className="absolute bottom-0 right-0 -rotate-180 " />
        </div>
        {/* img */}
        <div className=" absolute w-[18vw] z-10 right-[15vw] bottom-[20vh] ">
          <img
            className=" rounded-full"
            src={pp}
            alt=""
          />
        </div>
        {/* sol */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-full w-full overflow-hidden relative">
          {/* sol tasarim */}
          <div>
            <div style={{ color: currentColor }} className="flex text-[2vh] absolute duration-2000 ease-in-out transition-colors bottom-[5vh] left-[30vw]">
              <GoDot />
              <GoDot />
              <GoDot />
              <GoDot />
            </div>
            {/* iconlar */}
            <div style={{ color: currentColor }} className="absolute text-[3vh] transition-colors duration-2000 ease-in-out left-[13vw] top-[22vh] grid grid-cols-2 gap-[1vh]">
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
            {/* sol circle */}
            <div style={{ borderColor: currentColor }} className=" circle -translate-x-24 bottom-20 "></div> 
             {/* pool tasarim */}
            <div>
            <GiPoolTriangle style={{ color: currentColor }} className="text-[6vh] transition-colors absolute top-[4vh] right-[20vw] duration-2000 ease-in-out" />
            </div>
            <div>
            <GiPoolTriangle style={{ color: currentColor }} className="text-[7vh] transition-colors absolute bottom-[15vh] left-[20vw] duration-2000 rotate-45 ease-in-out" />
            </div>
            <div style={{ color: currentColor }} className=" transition-colors text-[2vh] absolute duration-2000 ease-in-out bottom-[11vh] right-[2vw]">
              <GoDot />
              <GoDot />
              <GoDot />
              <GoDot />
            </div>  
            <div style={{ borderColor: currentColor }} className=" circle translate-x-24  right-0 top-20 "></div>
          
          <div/>
          {/* sol yazi */}
            <div className="flex flex-col w-[40vw] mt-[23vh] ml-[20vw]">
              <div>
                <motion.h1 className="h1 leading-[4vh] text-orange-100">Hi I'm <span className="font-bold">TUTUS</span></motion.h1>
                <h2 style={{ color: currentColor }} className={`w-fit font-semibold transition-colors duration-2000 ease-in-out h2`}>Frontend Developer</h2>
                  <div style={{borderColor: currentColor}} className=" transition-colors duration-2000 ease-in-out rounded-full w-[32.4vw] mt-[0.4vh] border-[0.2vh]">
                  </div>
              </div>
              <p className="p text-orange-100 mt-[1vh]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae maiores saepe nisi iste reiciendis.
              </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}
