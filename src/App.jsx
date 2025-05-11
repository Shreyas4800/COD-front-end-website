import React, { useState } from "react"; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './index.css';
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 2,
      duration: 3,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 20,
      duration: 3,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration:2 ,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    // gsap.to(".text", {
    //   scale: 1,
    //   rotate: 0,
    //   duration:2 ,
    //   delay: "-1",
    //   ease: "Expo.easeInOut",
    // });

    gsap.to(".mw", {
      scale: 3.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });


    gsap.to(".m4", {
      scale: 4.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });


   

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      // gsap.to(".main .text", {
      //   x: `${xMove * 0.6}%`,
      // });

      gsap.to(".mw", {
        x: xMove * 1.7,
      });

      gsap.to(".m4", {
        x: xMove * 1.7,
      });
    });

  }, [showContent]);
      

      


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  COD
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./anime.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-2deg] scale-[1.5]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
          <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10  font-[ModernWarfare-OV7KP]">
          <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-1.5 bg-green-500"></div>
                  <div className="line w-8 h-1.5 bg-green-500"></div>
                  <div className="line w-5 h-1.5 bg-green-500"></div>
                </div>
              <h3 className="text-3xl -mt-[8px] leading-none  text-white" >
                      COD
                </h3>
            </div>
          </div>
          <div className="imagesdiv  overflow-hidden w-full h-screen">
          <div className="text text-white flex flex-col gap-5 absolute mt-[30px] top-30 left-20 scale-[1.5] rotate-[0deg]">
                <h1 className="text-6xl leading-none  ">CALL</h1>
                <h1 className="text-4xl ml-20 leading-none mt-[-20px]">OF</h1>
                <h1 className="text-6xl leading-none mt-[-20px] ml-[50px]">DUTY</h1>
          </div>
              <video
                className=" w-full h-full object-cover"
                src="./modern.mp4"
                autoPlay
                muted
                loop 
                playsInline
                preload="auto"
                poster="./modern.mp4"
                alt=""
              />
              <img 
              className="absolute mw h-[55px] top-100 left-50 -translate-x-1/2 -translate-y-1/2 scale-[3.0] scale-[3.5] rotate-[-10deg] object-cover"
              src="mw.png" 
              alt=""
               />
              <img 
              className="absolute m4 h-[55px] top-130 left-190 -translate-x-1/2 -translate-y-1/2 scale-[8.0] scale-[5.4] rotate-[-10deg] object-cover"
              src="m4.png" 
              alt=""
               />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent  " >
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
        <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[100%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[0.8] top-90 left-100 -translate-x-1/2 -translate-y-1/2"
                  src="./pngegg.png"
                  alt=""
                />
              </div>
              <div className="rg w-[20%] py-20">
                <h1 className= "text-5xl leading-none">It is fatal to enter any war</h1>
                <h1 className= "text-5xl leading-none"> without the will to win it.</h1>
                <p className="mt-10 ml-0 text-2xl font-[Helvetica_Now_Display] ">
                 “Be careful who you trust, Sergeant. People you know can hurt you the most.”

                </p>
            

                <button className="bg-green-500 px-5 py-5 text-black mt-0 text-4xl ml-0 mt-20">
                  Download Now
                </button>
              </div>

            </div>
        </div>
        </div>
      )}
    </>
  );  
}

export default App;
