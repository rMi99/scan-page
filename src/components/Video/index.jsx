import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import { isLight } from "../../utils/Color";
import { useAdjustBackdropHeight } from "../backdrop";
import useScroller from "../../utils/Scroller";
import WelcomeScreen from "../common/WelcomeScreen";
import useLanguage from "../../utils/useLanguage";
import linkFixer from "../../utils/LinkFixer";
import SocialNetWorks from "../common/socialNetwork";

let Video = ({ qrData }) => {
  const location = useLocation();
  const [hasWindow, setHasWindow] = useState(false);
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const data = qrData

  const t = useLanguage()
  useUpdateDomTitle(data?.videoTitle,data?.primaryColor)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [data?.direct_video]);

  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen])

  const light = isLight(data.primaryColor);

  const openURL = (url) => {
    window.open(linkFixer(url), "_blank");
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const d = setTimeout(() => {
      showWelcomeScreen(false);
      data.screen = false;
    }, 3000);

    if (!location.search && data?.direct_video && data?.videos?.length) {
      // window.open(data?.videos[0].url, "_self");
    }

    return ()=>clearTimeout(d);
  }, [data, location.search]);

  let backdropElement = useRef(null);
  let backdropEndElement = useRef(null);

  useAdjustBackdropHeight(backdropElement, backdropEndElement,null,data);

  useScroller(data);

  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : data?.direct_video && data?.videos?.length ? (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: data?.primaryColor }}>
      {hasWindow && (
        <ReactPlayer
          url={data.videos[0].url}
          width="100%"
          controls={true}
          muted={data?.Autoplay ? true : false}
          playing={data?.Autoplay ? true : false}
          style={{
            height: "100%",
            minHeight: "600px"
          }}
        />
      )}
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <div ref={backdropElement} className="qr-backdrop" style={{'--bg-color': data?.primaryColor || "#28C254"}} id="color_palette">
          <svg width="375" height="526" viewBox="0 0 375 526" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z" className="duration-500" fill={'var(--bg-color)'}/>
          </svg>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[14px] sm:px-[20px]"
      >
        <div id="anchorLocTop"></div>
        {data?.companyName ? (
          <p className="w-full text-sm xs:text-base font-medium mb-[10px] xs:mb-[21px] duration-500" style={{ color: light ? "#000000" : "#ffffff", fontFamily: data?.font_text }}>
            {data?.companyName === 'Emily’s Kitchen' ? 'Emily’s Kitchen' : data?.companyName }
          </p>
        ) : (
          <></>
        )}
        {data?.videoTitle ? (
          <h1 className="text-lg xxs:text-xl xs:text-2xl sm:text-[28px] font-bold text-center mb-[10px] xs:mb-[21px] duration-500" style={{ color: light ? "#000000" : "#ffffff", fontFamily: data?.font_title }}>{data?.videoTitle}</h1>
        ) : (
          <></>
        )}
        {data?.videoDescription ? (
          <p className="text-sm xs:text-base sm:text-lg w-full mb-[10px] xs:mb-[27px] duration-500 whitespace-break-spaces text-balance" style={{ color: light ? "#000000" : "#ffffff", fontFamily: data?.font_text, overflowWrap: "anywhere" }}>{data?.videoDescription}</p>
        ) : (
          <></>
        )}



        {data?.button_text ? (
          <div
            className="w-full max-w-[500px] flex justify-center items-center bg-transparent rounded-[4px] border-[1px] mb-[15px] xs:mb-[33px] py-[14px] cursor-pointer hover:opacity-80 duration-500"
            style={{ borderColor: light ? "#000000" : "#ffffff" }}

            onClick={() => {
              if (data.button_url === "#" || data.button_url === "") {
                //do noting :D
              } else {
                openURL(data.button_url);
              }
            }}
          >
            <p className="text-base xs:text-lg sm:text-xl font-medium duration-500" style={{ color: light ? "#000000" : "#ffffff", fontFamily: data?.font_text }}>{data?.button_text}</p>
          </div>
        ) : (
          <></>
        )}
        {data.videos.length > 0 && (
          <>
            {data?.videos?.map((e, i) => {
              return (
                <div key={i} id={`video${i+1}`} className="flex flex-col items-center justify-center w-full bg-white my-[20px] px-[10px] p-[10px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
                  ref={(el) => {
                    backdropEndElement.current = (i === 0) ? el : backdropEndElement.current;
                  }}
                >
                  <div className="w-full relative">
                    {e.url.includes("online-qr-generator.com") ? (
                      <video width="100%" className="h-fit" controls>
                        <source src={e.url} />
                      </video>
                    ) : (
                      <div className="w-full min-[350px]:h-[200px] min-[400px]:h-[220px] min-[450px]:h-[250px] min-[500px]:h-[300px] min-[600px]:h-[360px]" >
                        <ReactPlayer
                          url={e.url}
                          width="100%"
                          height="100%"
                          controls={true}
                          muted={data?.Autoplay && i === 0 ? true : false}
                          playing={data?.Autoplay && i === 0 ? true : false}
                        />
                      </div>
                    )}
                    {e.description ? (
                      <p className="w-full text-[#767C83] text-xs xxs:text-sm mt-[13px] text-left whitespace-break-spaces whitespace-break-spaces" style={{ fontFamily: data?.font_text }}>
                        {e.description}
                      </p>
                    ) : (
                      ""
                    )}

                  </div>
                </div>
              );
            })}
          </>
        )}
        {data.videos.length === 0 && data?.companyName === "Emily’s Kitchen" && (
          <div className="flex flex-col items-center justify-center w-full bg-white px-[10px] pb-[28px] mb-[30px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
            <div className="w-full relative"
              ref={backdropEndElement}
            >
              <div className="cursor-pointer hover:opacity-90">
                <img src="/images/images/new/play.webp" className="absolute m-auto inset-0 z-10 w-[90px]" alt="play"/>
              </div>
              <img src="/images/images/new/video.webp" className="w-full" alt="sample"/>
            </div>
            <p className="w-full text-[#767C83] text-xs xxs:text-sm mt-[13px] text-left rtl:text-right">
              {t('video.video_description')}
            </p>
          </div>
        )}
        {data.videos.length === 0 && data?.companyName !== "Emily’s Kitchen" && (
          <div className="flex flex-col items-center justify-center w-full bg-white p-[10px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
            ref={backdropEndElement}
          >
            <img src="/images/images/new/videoPlaceholder.png" className="w-full" alt="Placeholder"/>
          </div>
        )}

        <SocialNetWorks data={data} title={t('global.social_network_title')}  className="mt-4"/>

      </div>
    </div>

  );
};

export default Video;
