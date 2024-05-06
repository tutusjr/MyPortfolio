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
import bgImage from "../assets/bgImages/bg-mountain.jpg";

export default function Hero() {

  return (
    <section id="home" className="h-[90vh] scroll-item relative ">
      <div className="mx-auto h-full flex overflow-hidden relative transition-none">
        {/* yildizlar */}
        <div className="stars">
        <div className="star top-[10vh] right-[12vw] animate-twinkle-fast "></div>
        <div className="star top-[15vh] right-[44vw] animate-twinkle-normal"></div>
        <div className="star top-[4vh] right-[36vw] animate-twinkle-fast"></div>
        <div className="star top-[35vh] left-[5vw] animate-twinkle-slow "></div>
        <div className="star top-[20vh] left-[1vw] animate-twinkle-fast"></div>
        <div className="star top-[40vh] left-[23vw] animate-twinkle-slow"></div>
        <div className="star top-[20vh] left-[35vw] animate-twinkle-fast"></div>
        <div className="star top-[5vh] left-[42vw] animate-twinkle-fast"></div>
        <div className="star top-[8vh] left-[12vw] animate-twinkle-fast"></div>
        <div className="star top-[30vh] right-[3vw] animate-twinkle-fast"></div>
        </div>
        {/* kenarliklar */}
        <div
          className="z-10 text-[6vh] color-changing duration-2000 transition-colors ease-in-out"
        >
          <RxCornerTopLeft className="absolute h-[7vh]" />
          <RxCornerTopLeft className="absolute bottom-0  -rotate-90 " />
          <RxCornerTopLeft className="absolute top-0 right-0 rotate-90 " />
          <RxCornerTopLeft className="absolute bottom-0 right-0 -rotate-180 " />
        </div>
        {/* img */}
        <div className=" absolute w-[18vw] z-10 right-[21vw] bottom-[20vh] ">
          <img className=" rounded-full filter " src={pp} alt="" />
        </div>
        {/* sol */}
        <div className="h-full w-full overflow-hidden relative">
          <img className="absolute h-full w-full " src={bgImage} alt="bg-image" />
          {/* sol tasarim */}
          <div>
            <div
              className="flex text-[2vh] color-changing absolute duration-2000 ease-in-out transition-colors bottom-[5vh] left-[30vw]"
            >
              <GoDot />
              <GoDot />
              <GoDot />
              <GoDot />
            </div>
            {/* iconlar */}
            <div
            className="absolute text-[3vh] ease-in-out left-[10vw] top-[22vh] grid grid-cols-2 gap-[1vh] color-changing-icons"
            >
                <BiLogoTailwindCss/>
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
            {/* pool tasarim */}
            <div className="color-changing-icons rotating ">
              <GiPoolTriangle
                className="text-[6vh] absolute top-[4vh] right-[20vw]  "
              />
            </div>
            <div className="color-changing-icons ">
              <GiPoolTriangle
                className="text-[7vh] color-changing absolute  bottom-[15vh] left-[20vw]  rotate-45 "
              />
            </div>
            <div
              className="  text-[2vh] color-changing absolute  bottom-[11vh] right-[2vw]"
            >
              <GoDot />
              <GoDot />
              <GoDot />
              <GoDot />
            </div>

            <div />
            {/* sol yazi */}
            <div className="flex flex-col w-[40vw] mt-[23vh] ml-[16vw]">
              <div className="flex flex-col gap-[0.3vh] z-10">
                <motion.h1 className="h1 leading-[4vh] text-orange-100">
                  Hi I'm <span className="font-bold z-10">TUTUS</span>
                </motion.h1>
                <h2
                  className=" z-10 w-fit font-semibold color-changing ease-in-out h2"
                >
                  Frontend Developer
                </h2>
                <div
                  className=" color-changing ease-in-out rounded-full w-[37.5vw] mt-[0.4vh] border-[0.3vh]"
                ></div>
              </div>
              <p className="p z-10 text-orange-100 mt-[1vh]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident recusandae maiores saepe nisi iste reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
