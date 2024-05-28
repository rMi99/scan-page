import { useEffect, useState, React, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Drawer } from "@mui/material";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import { isLight } from "../../utils/Color";
import { useAdjustBackdropHeight } from "../backdrop";
import useScroller from "../../utils/Scroller";
import WelcomeScreen from "../common/WelcomeScreen";
import WeekHours from "../common/weekHours";
import SocialNetWorks from "../common/socialNetwork";
import useLanguage from "../../utils/useLanguage";
// import ShortenedUrl from "../../utils/shortenedurl";
import linkFixer from "../../utils/LinkFixer";
import ShareOrCopy from "../../utils/share";
import ContactDetails from "../common/contactDetails";

let Business = ({ qrData }) => {
  const [drawer, setDrawer] = useState(false);
  let backdropElement = useRef(null);
  let backdropEndElement = useRef(null);
  let backdropEndFallbackElement = useRef(null);
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const data = qrData


  const t = useLanguage();
  useUpdateDomTitle(data?.companyTitle,data?.primaryColor);

  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen])

  const light = isLight(data.primaryColor);
  const secondaryLight = isLight(data.SecondaryColor);

  const openURL = (url) => {
    window.open(linkFixer(url), "_blank");
  };

  const areAllDaysNull = Object.values(data.weekDays).every(day => day.length === 0);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const d = setTimeout(() => {
      showWelcomeScreen(false);
      data.screen = false;
    }, 3000);

    return ()=>clearTimeout(d)
  }, [data,data?.screen]);

  useAdjustBackdropHeight(backdropElement, backdropEndElement, backdropEndFallbackElement,data);

  useScroller(data);

  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <div className="flex flex-col justify-center items-center relative">
      <div
        className=" bottom-3 right-3 fixed z-[300] p-2 rounded-md cursor-pointer duration-500"
        style={{ backgroundColor: light ? "#000000" : data.primaryColor }}
        onClick={() => {
          setDrawer(true);
        }}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          className="bi bi-three-dots-vertical"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </div>
      <Drawer anchor="bottom" open={drawer}>
        <div className="p-3 w-full flex flex-col space-y-[10px]">
          <div className="flex flex-row absolute right-[10px] justify-end mt-[10px]">
            <svg
              onClick={() => {
                setDrawer(false);
              }}
              className="cursor-pointer"
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-[10px]">
            <div className="flex items-center justify-center cursor-pointer ">
              <p style={{ fontFamily: data?.font_text }}>{t('bushiness.actions')}</p>
            </div>

            <div className="w-full flex flex-col items-center b-share custom-scroll-bar">

              {data?.contactMobiles?.length > 0 ? (
                data?.contactMobiles.map((e,i) => (
                    <a
                      className="flex flex-row items-center w-[95%] border-[1px] py-[10px] rounded-full xs:space-x-[5px] space-x-[10px] px-[15px] duration-500 mb-2 cursor-pointer"
                      style={{
                        borderColor: light ? "#000000" : data.primaryColor,
                      }}
                      href={e.number === '555-100-1000' ? null : `tel:${e.number}`}
                      key={i}
                    >
                      <span>
                        <svg
                          fill={light ? "#000000" : data?.primaryColor}
                          width="25"
                          height="25"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="duration-500"
                        >
                          <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z"></path>
                        </svg>
                      </span>
                      <div className="w-[90%]">
                        <p
                          className="sm:text-2xl xs:text-lg xxs:text-base text-sm font-medium duration-500 truncate"
                          style={{
                            fontFamily: data?.font_text,
                            color: light ? "#000000" : data.primaryColor,
                          }}
                        >
                          Call{e.label && `:  ${e.label}`}
                        </p>
                      </div>
                    </a>
                ))
              ) : (
                <></>
              )}
              {data?.contactEmails?.length > 0 ? (
                data?.contactEmails.map((e,i) => (
                  <a
                    className="flex flex-row items-center w-[95%] border-[1px] py-[10px] rounded-full xs:space-x-[5px] space-x-[10px] px-[15px] duration-500 mb-2 cursor-pointer"
                    style={{
                      borderColor: light ? "#000000" : data.primaryColor,
                    }}
                    href={e.email === 'Boulangerie@gmail.com' ? null : `mailto:${e.email}`}
                    target="_blank"
                    key={i} 
                    rel="noreferrer"
                  >
                    <span>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" fill="white" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
                          fill={light ? "#000000" : data?.primaryColor}
                          className="duration-500"
                        />
                      </svg>
                    </span>
                    <div className="w-[90%]">
                      <p
                        className="sm:text-2xl xs:text-lg xxs:text-base text-sm font-medium duration-500 truncate"
                        style={{
                          fontFamily: data?.font_text,
                          color: light ? "#000000" : data.primaryColor,
                        }}
                      >
                        Email{e.title && `: ${e.title}`}
                      </p>
                    </div>
                  </a>
                ))
              ) : (
                <></>
              )}
              {data?.contactWebsite?.length > 0 ?(
                data?.contactWebsite.map((e,i) => (
                <button
                  className="flex flex-row items-center w-[95%] border-[1px] py-[10px] rounded-full cursor-pointer xs:space-x-[5px] space-x-[10px] px-[15px] duration-500 mb-2"
                  style={{
                    borderColor: light ? "#000000" : data.primaryColor,
                  }}
                  onClick={() => {
                    if (e.website === "#" || e.website === "www.boulangerie.com") {
                      //do noting :D
                    } else {
                      openURL(e.website);
                    }
                  }}
                  key={i}
                >
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.982 19.61c.454-.7.909-1.6 1.236-2.755.755.29 1.273.636 1.591.909a8.182 8.182 0 0 1-2.864 1.845h.037v.001zm-8.8-1.855c.336-.273.845-.61 1.6-.91.336 1.164.773 2.064 1.236 2.764A8.2 8.2 0 0 1 6.2 17.755h-.018zm10.636-6.664c-.028-.81-.11-1.619-.245-2.418 1-.364 1.727-.8 2.236-1.2a8.136 8.136 0 0 1 1.282 3.618h-3.273zm-8.973-4.2a5.936 5.936 0 0 1-1.481-.8 8.2 8.2 0 0 1 2.654-1.7c-.427.636-.845 1.454-1.182 2.5h.01-.001zm7.137-2.5a8.145 8.145 0 0 1 2.654 1.7 6.01 6.01 0 0 1-1.481.8 9.58 9.58 0 0 0-1.182-2.5h.009zM14.8 9.118c.09.6.182 1.246.2 1.973H9c.027-.727.09-1.382.182-1.973 1.855.334 3.754.334 5.609 0h.009zM12 7.545c-.91 0-1.71-.072-2.39-.181.726-2.237 1.854-3.137 2.39-3.455.518.318 1.655 1.227 2.382 3.455A15.04 15.04 0 0 1 12 7.545zm-6.818-.072a8.03 8.03 0 0 0 2.245 1.2 18.368 18.368 0 0 0-.245 2.418h-3.31a8.13 8.13 0 0 1 1.319-3.618h-.01.001zm-1.3 5.436h3.3c.036.782.09 1.5.2 2.155a7.682 7.682 0 0 0-2.31 1.272 8.11 8.11 0 0 1-1.2-3.427h.01zM12 14.364c-1.09 0-2.027.09-2.845.236A16.91 16.91 0 0 1 9 12.91h6c-.027.608-.073 1.18-.145 1.69A15.388 15.388 0 0 0 12 14.355v.009zm0 5.727c-.545-.327-1.745-1.3-2.473-3.727A14.095 14.095 0 0 1 12 16.182c.955 0 1.773.063 2.482.182-.727 2.454-1.927 3.4-2.473 3.727H12zm6.927-3.764a7.634 7.634 0 0 0-2.309-1.272 17.95 17.95 0 0 0 .2-2.146h3.31a8.11 8.11 0 0 1-1.2 3.418h-.001zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                        fill={light ? "#000000" : data?.primaryColor}
                        className="duration-500"
                      />
                    </svg>
                  </span>
                  <div className="w-[90%] text-start">
                    <p
                      className="sm:text-2xl xs:text-lg xxs:text-base text-sm font-medium duration-500 truncate"
                      style={{
                        fontFamily: data?.font_text,
                        color: light ? "#000000" : data.primaryColor,
                      }}
                    >
                      {t('bushiness.website')}{e.title && `: ${e.title}`}
                    </p>
                  </div>
                </button>
                ))
                ) : (
                  <></>
                )}
              <div
                className="flex flex-row items-center w-[95%] cursor-pointer border-[1px] py-[10px] rounded-full xs:space-x-[5px] space-x-[10px] px-[15px] duration-500 mb-2"
                style={{
                  borderColor: light ? "#000000" : data.primaryColor,
                }}
                onClick={()=>ShareOrCopy(data)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rtl:ml-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 5.75a3.25 3.25 0 0 1-5.532 2.314L9.31 10.906a3.245 3.245 0 0 1-.001 2.192l5.156 2.84a3.25 3.25 0 1 1-.922 1.775l-5.478-3.017a3.25 3.25 0 1 1 .004-5.389l5.474-3.018A3.25 3.25 0 1 1 20 5.75z"
                    fill={light ? "#000000" : data?.primaryColor}
                    className="duration-500"
                  />
                </svg>
                <p
                  className="xs:text-[1.125rem] xxs:text-[1rem] text-[0.875rem] leading-[1]  font-medium duration-500"
                  style={{
                    fontFamily: data?.font_text,
                    color: light ? "#000000" : data.primaryColor,
                  }}
                >
                  {t('bushiness.share')}
                </p>
              </div>
            </div>

            <div
              className="flex items-center justify-center cursor-pointer "
              onClick={() => {
                setDrawer(false);
              }}
            >
              <p className="mt-[10px]" style={{ fontFamily: data?.font_text, textTransform: "uppercase" }}>
                {t('bushiness.cancel')}
              </p>
            </div>
          </div>
        </div>
      </Drawer>
      {/* {JSON.stringify(data?.companyLogo ? '500' : '100')}*/}
      {/* height: data?.companyLogo ? '250px' : '100px' */}
      <div className="flex flex-col items-center justify-center relative w-full h-full z-10 overflow-x-clip" id="company" style={{borderTop:`1px solid ${data?.primaryColor}`}}>
        <div
          ref={backdropElement}
          className={
            data?.companyLogo
              ? "qr-backdrop with-image buisness-with-image-bigscreen"
              : "qr-backdrop no-image buisness-no-image-bigscreen"
          }
          style={{ "--bg-color": data?.primaryColor }}
          id="color_palette"
        >
          <svg
            width="375"
            height="526"
            viewBox="0 0 375 526"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z"
              fill={"var(--bg-color)"}
              className="duration-500"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center mt-[50px] xs:mt-[73px] w-full max-w-[700px] px-[16px] relative z-[100]">
          {data?.company ? (
            <>
              <h1
                className="text-lg xs:text-xl font-medium mb-[14px] xs:mb-[10px] duration-500 break-all"
                style={{
                  color: light ? "#000000" : "#ffffff",
                  fontFamily: data?.font_title,
                }}
              >
                {data?.company}
              </h1>
              <div
                ref={backdropEndFallbackElement}
                style={{ margin: "15px 0 5px" }}
              ></div>
            </>
          ) : (
            <div ref={backdropEndFallbackElement}></div>
          )}

          {data?.companyLogo ||
          data?.companyTitle ||
          data?.companySubtitle ||
          data?.businessButtons ||
          data?.businessButtonUrls ||
          data?.businessButtonsCreated === "1" ? (
            <div 
              className="w-full break-words inline-block bg-white  flex-col justify-center items-center p-[8px] rounded-[4px] mb-[10px] xs:mb-[20px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]" 
              ref={backdropEndElement}
            >
              {data.companyLogo ? (
                <img
                  src={data?.companyLogo}
                  className="w-full"
                  ref={backdropEndElement}
                  alt={data?.companyTitle}
                />
              ) : (
                <></>
              )}
              {data.companyTitle ? (
                <h1
                  className="text-lg text-pretty xs:text-2xl text-black my-[10px] xs:my-[14px] font-bold leading-[1.25]"
                  style={{
                    fontFamily: data?.font_title,
                  }}
                >
                  {data.companyTitle}
                </h1>
              ) : (
                <div className="h-2"></div>
              )}
              {data.companySubtitle ? (
                <h2
                  className="text-[#767C83] 2xl:text-[15px] xl:text-[14px] lg:text-[13px] xs:text-base-[14px] mb-[10px] xs:mb-[17px] text-pretty leading-[1.25]"
                  style={{
                    fontFamily: data?.font_text,
                  }}
                >
                  {data?.companySubtitle}
                </h2>
              ) : (
                <div className="h-2"></div>
              )}
              {data?.businessButtons ||
              data?.businessButtonUrls ||
              data?.businessButtonsCreated === "1" ? (
                <div
                  className="w-full flex justify-center items-center rounded-[4px] py-[14px] cursor-pointer hover:opacity-80 duration-500"
                  style={{
                    backgroundColor: data.SecondaryColor,
                  }}
                  onClick={() => {
                    if (
                      data.businessButtonUrls === "#" ||
                      data.businessButtonUrls === ""
                    ) {
                      //do noting :D
                    } else {
                      openURL(data.businessButtonUrls);
                    }
                  }}
                  id="websiteLink"
                >
                  <p
                    className="text-base xs:text-lg font-medium duration-500"
                    style={{
                      color: secondaryLight ? "#000000" : "#ffffff",
                      fontFamily: data?.font_text,
                    }}
                  >
                    {data.businessButtons ? data.businessButtons : ""}
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <>
              <span className="w-full h-4" ref={backdropEndFallbackElement}></span>
            </>
          )}
          {/* Card + Title end */}
        </div>{" "}
        {/* Card + Title end */}
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-[700px] px-[16px] relative z-[100]">
        {!areAllDaysNull && <WeekHours data={data} />}

        {data?.offer_street ||
        data?.offer_city ||
        data?.offer_number ||
        data?.offer_postalcode ||
        data?.offer_state ||
        data?.offer_country ||
        data?.latitude ||
        data?.longitude ||
        data?.offer_url1 ? (
          <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]" id="locationBlock">
            <div className="flex flex-row justify-start items-center space-x-[10px] xs:space-x-[17px] w-full mb-[10px]">
              <div className="w-[44px] h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.251 8.5C11.286 8.5 10.501 9.285 10.501 10.251C10.501 11.216 11.286 12 12.251 12C13.216 12 14.001 11.216 14.001 10.251C14.001 9.285 13.216 8.5 12.251 8.5ZM12.251 13.5C10.459 13.5 9.00098 12.043 9.00098 10.251C9.00098 8.458 10.459 7 12.251 7C14.043 7 15.501 8.458 15.501 10.251C15.501 12.043 14.043 13.5 12.251 13.5Z"
                    fill="#767C83"
                  />
                  <mask
                    id="mask0_797_11935"
                    maskUnits="userSpaceOnUse"
                    x="4"
                    y="2"
                    width="17"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 2H20.4995V21.5H4V2Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_797_11935)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.249 3.5C8.52702 3.5 5.49902 6.557 5.49902 10.313C5.49902 15.092 11.123 19.748 12.249 19.996C13.375 19.747 18.999 15.091 18.999 10.313C18.999 6.557 15.971 3.5 12.249 3.5ZM12.249 21.5C10.455 21.5 3.99902 15.948 3.99902 10.313C3.99902 5.729 7.70002 2 12.249 2C16.798 2 20.499 5.729 20.499 10.313C20.499 15.948 14.043 21.5 12.249 21.5Z"
                      fill="#767C83"
                    />
                  </g>
                </svg>
              </div>
              <p
                className="font-medium text-base xs:text-xl text-black"
                style={{ fontFamily: data?.font_text }}
              >
                {t('bushiness.address')}
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full mb-[15px]"></div>
            <div className="flex flex-col items-start justify-center w-full px-[10px] mb-[10px] mt-[20px] space-y-[4px]">
              {data.ship_address ||
              data.offer_city ||
              data.offer_state ||
              data.offer_country ||
              data.offer_street ||
              data.offer_postalcode ||
              data.offer_state ||
              data.offer_country ? (
                <p
                  className="text-sm xs:text-base text-left text-[#767C83] rtl:text-right"
                  style={{ fontFamily: data?.font_text }}
                >
                  {(data?.street_number &&
                  data?.offer_number
                  ? data.offer_number + " "
                  : "") +
                  (data?.offer_street
                    ? data.offer_street + ""
                    : "") +
                  (!data?.street_number &&
                  data?.offer_number
                    ? " " + data.offer_number + ", "
                    : "") +
                  ((data?.street_number &&
                    data?.offer_number !== "") ||
                  (data?.street_number &&
                    data?.offer_number === "" &&
                    data.offer_street !== "") ||
                  (!data?.street_number &&
                    data?.offer_number === "" &&
                    data.offer_street !== "")
                    ? ", "
                    : "") +
                  (data?.offer_city ? data.offer_city + "," : "") +
                  (data?.offer_postalcode
                    ? " " + data.offer_postalcode + ", "
                    : "") +
                  (data?.offer_state
                    ? data?.offer_state + ", "
                    : "") +
                  (data?.offer_country || "")}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="w-full flex flex-row items-start px-[10px]">
              <p
                onClick={() => {
                  if (data.offer_url1 === "#") {
                    //
                  } else if (
                    data.ship_address ||
                    data.offer_city ||
                    data.offer_state ||
                    data.offer_country ||
                    data.offer_street ||
                    data.offer_postalcode
                  ) {
                    window.open(
                      "http://maps.google.com/?q=" +
                        (data?.ship_address ||
                          (data?.offer_street ? data.offer_street + " " : "") +
                            (data?.offer_number
                              ? data.offer_number + " "
                              : "") +
                            (data?.offer_postalcode
                              ? data.offer_postalcode + " "
                              : "") +
                            (data?.offer_city ? data?.offer_city + " " : "") +
                            (data?.offer_state ? data?.offer_state + " " : "") +
                            data?.offer_country),
                      "_blank"
                    );
                  } else if (data.offer_url1) {
                    window.open(data.offer_url1);
                  } else {
                    window.open(
                      "http://maps.google.com/?q=" +
                        (data?.latitude + "," + data?.longitude)
                    );
                  }
                }}
                className="text-base xs:text-lg font-medium text-[#0E80FF] cursor-pointer"
                style={{ fontFamily: data?.font_text }}
                target="_blank"
              >
                {t('bushiness.show_on')}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}

        <SocialNetWorks data={data} title={t('bushiness.social_network')}/>

        {data?.ficons?.length ? (
          <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
            <div className="flex flex-row justify-start items-center space-x-[17px] w-full mb-[10px]">
              <div className="w-[44px] h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25 1.5C1.5 1.5 1.5 1.708 1.5 4.25V4.275C1.5 5.382 1.5 6.182 1.771 6.52C2.036 6.848 2.823 7 4.25 7C5.677 7 6.464 6.847 6.729 6.519C7 6.182 7 5.382 7 4.274C7 1.708 7 1.5 4.25 1.5ZM4.25 8.5C2.564 8.5 1.299 8.323 0.604 7.46C0 6.711 0 5.689 0 4.275L0.75 4.25H0C0 1.38 0.181 0 4.25 0C8.319 0 8.5 1.38 8.5 4.25C8.5 5.688 8.5 6.711 7.896 7.46C7.201 8.323 5.936 8.5 4.25 8.5Z"
                    fill="#767C83"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.25 1.5C12.5 1.5 12.5 1.708 12.5 4.25V4.275C12.5 5.382 12.5 6.182 12.771 6.52C13.036 6.848 13.823 7 15.25 7C16.677 7 17.464 6.847 17.729 6.519C18 6.182 18 5.382 18 4.274C18 1.708 18 1.5 15.25 1.5ZM15.25 8.5C13.564 8.5 12.299 8.323 11.604 7.46C11 6.711 11 5.689 11 4.275L11.75 4.25H11C11 1.38 11.181 0 15.25 0C19.319 0 19.5 1.38 19.5 4.25C19.5 5.688 19.5 6.711 18.896 7.46C18.201 8.323 16.936 8.5 15.25 8.5Z"
                    fill="#767C83"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25 12.5C1.5 12.5 1.5 12.708 1.5 15.25V15.275C1.5 16.382 1.5 17.182 1.771 17.52C2.036 17.848 2.823 18 4.25 18C5.677 18 6.464 17.847 6.729 17.519C7 17.182 7 16.382 7 15.274C7 12.708 7 12.5 4.25 12.5ZM4.25 19.5C2.564 19.5 1.299 19.323 0.604 18.46C0 17.711 0 16.689 0 15.275L0.75 15.25H0C0 12.38 0.181 11 4.25 11C8.319 11 8.5 12.38 8.5 15.25C8.5 16.688 8.5 17.711 7.896 18.46C7.201 19.323 5.936 19.5 4.25 19.5Z"
                    fill="#767C83"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.25 12.5C12.5 12.5 12.5 12.708 12.5 15.25V15.275C12.5 16.382 12.5 17.182 12.771 17.52C13.036 17.848 13.823 18 15.25 18C16.677 18 17.464 17.847 17.729 17.519C18 17.182 18 16.382 18 15.274C18 12.708 18 12.5 15.25 12.5ZM15.25 19.5C13.564 19.5 12.299 19.323 11.604 18.46C11 17.711 11 16.689 11 15.275L11.75 15.25H11C11 12.38 11.181 11 15.25 11C19.319 11 19.5 12.38 19.5 15.25C19.5 16.688 19.5 17.711 18.896 18.46C18.201 19.323 16.936 19.5 15.25 19.5Z"
                    fill="#767C83"
                  />
                </svg>
              </div>
              <p
                className="font-medium text-lg xs:text-xl text-black"
                style={{ fontFamily: data?.font_text }}
              >
                {t('bushiness.facilities')}
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full mb-[15px]"></div>
            <div className="flex flex-col items-center justify-center w-full px-[10px] mb-[20px] mt-[20px] space-y-[25px]">
              <div className="w-full grid grid-cols-4 justify-center items-center gap-3" id="facilitiesBlock">
                {data.ficons.filter((i) => i === "ficon").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.54297 12.0013C9.54845 8.90873 14.7556 8.90873 18.7611 12.0013"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.83203 8.75958C8.47696 4.40013 15.8172 4.40013 21.4622 8.75958"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.29297 15.4007C10.2272 13.1278 14.0557 13.1278 16.99 15.4007"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.72363 18.8103C11.1954 17.6739 13.105 17.6739 14.5768 18.8103"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon1").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.62147 21.2334H3.82695C3.05845 21.2334 2.42969 20.6046 2.42969 19.8361V12.8498C2.42969 11.6621 3.33791 10.7539 4.52558 10.7539C5.71325 10.7539 6.62147 11.6621 6.62147 12.8498V21.2334Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.2008 21.2334H16.4062V12.8498C16.4062 11.6621 17.3145 10.7539 18.5021 10.7539C19.6898 10.7539 20.598 11.6621 20.598 12.8498V19.8361C20.598 20.6046 19.9693 21.2334 19.2008 21.2334Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.4058 14.2461H6.625V21.2324H16.4058V14.2461Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.53125 10.7539V6.42237C4.53125 4.95525 5.71892 3.76758 7.18604 3.76758H15.7792C17.3162 3.76758 18.5039 4.95525 18.5039 6.42237V10.7539"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon2").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.502 17.2745C13.8816 19.685 11.6933 21.4662 9.08904 21.4662C6.00231 21.4662 3.5 18.964 3.5 15.8772C3.5 13.6216 4.83622 11.678 6.76027 10.7949"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.08594 6.5625L10.0174 14.9461L17.0037 14.4803L18.401 19.6036H19.7983"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.9448 4.69895C10.9448 5.72785 10.1107 6.56196 9.08176 6.56196C8.05287 6.56196 7.21875 5.72785 7.21875 4.69895C7.21875 3.67004 8.05287 2.83594 9.08176 2.83594C10.1107 2.83594 10.9448 3.67004 10.9448 4.69895Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.3438 10.2891H16.0698"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon3").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                    <svg 
                    id="Layer_1" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                  >
                  <path 
                  className="cls-1 fill-[#767c83]" 
                  d="M12.28,10.59A3.63,3.63,0,0,0,9.77,8.68a.3.3,0,0,1,0-.1,3,3,0,0,0,.3-2.72A2.53,2.53,0,0,0,6.66,4.48,2.74,2.74,0,0,0,5.3,7.66a2.83,2.83,0,0,0,.45,1h0a3.59,3.59,0,0,0-2.66,2.25,7.36,7.36,0,0,0-.24.8v5.91c0,.13.09.26.15.38a1.56,1.56,0,0,0,1.86.82v7.09a1.68,1.68,0,0,0,1,1.65,1.59,1.59,0,0,0,1.83-.22c.13-.11.19,0,.27.06a1.65,1.65,0,0,0,1.68.21,1.59,1.59,0,0,0,1-1.34c.08-.66,0-5.23,0-6.55h0c0-.3,0-.59,0-.9h0a1.53,1.53,0,0,0,2-1.47c0-1.76,0-3.52,0-5.27A3.27,3.27,0,0,0,12.28,10.59Zm-5-5.25a1.48,1.48,0,0,1,2,1.26,1.68,1.68,0,0,1-.69,1.78,1.5,1.5,0,0,1-2.3-1.3V6.93A1.54,1.54,0,0,1,7.27,5.34ZM9.63,19.77c0,1.3,0,5.67,0,6.24a.67.67,0,0,1-.43.67.6.6,0,0,1-.67-.1.81.81,0,0,1-.25-.69v-7a1.38,1.38,0,0,0,0-.35.48.48,0,0,0-.47-.4.5.5,0,0,0-.5.39,2.19,2.19,0,0,0,0,.36v7a1,1,0,0,1-.07.48.7.7,0,0,1-.75.36A.71.71,0,0,1,5.89,26c0-3,0-5.91,0-8.87,0-.18.06-.22.24-.22,1.08,0,2.15,0,3.23,0,.24,0,.28.07.28.29,0,.85,0,1.69,0,2.54A.13.13,0,0,0,9.63,19.77Zm2-2.45a.49.49,0,0,1-.51.55c-.29,0-.47-.22-.47-.56V12.55a1.42,1.42,0,0,0,0-.35.5.5,0,0,0-1,.07c0,.23,0,.46,0,.69q0,1.33,0,2.67c0,.18-.05.23-.23.23H6.11c-.18,0-.23,0-.23-.23,0-1.05,0-2.1,0-3.16a.65.65,0,0,0-.09-.41.5.5,0,0,0-.9.11,1.11,1.11,0,0,0,0,.36v4.75c0,.37-.2.6-.5.59s-.48-.23-.48-.58c0-.87,0-1.74,0-2.62V12.31A2.53,2.53,0,0,1,6.37,9.66c1,0,1.94,0,2.9,0a2.51,2.51,0,0,1,2.36,2.41C11.66,13.83,11.64,15.57,11.63,17.32Z"/>

                  <path 
                    className="cls-1 fill-[#767c83]" 
                    d="M29.1,15.91c-.29-1.37-.57-2.74-.87-4.12a6.14,6.14,0,0,0-.37-1.46,2.74,2.74,0,0,0-2.38-1.69c-.1,0-.22,0-.12-.16a3,3,0,0,0,.25-2.57,2.53,2.53,0,0,0-3.88-1.18A3,3,0,0,0,21,8.29c.06.11.17.19.17.33A2.85,2.85,0,0,0,18.43,11c-.35,1.68-.71,3.36-1.06,5a1.5,1.5,0,0,0,1.45,1.89c.15,0,.18,0,.14.19-.16.67-.3,1.35-.44,2a.52.52,0,0,0,.57.69c.42,0,.83,0,1.24,0,.17,0,.21.05.21.21,0,1,0,2,0,3v2.11a1.58,1.58,0,0,0,.92,1.49,1.52,1.52,0,0,0,1.67-.17c.12-.1.18-.05.28,0a1.57,1.57,0,0,0,2.47-.85,47.85,47.85,0,0,0,.06-5.78H27.1c.86,0,1-.17.8-1-.14-.62-.27-1.25-.4-1.87.19,0,.36,0,.53-.07A1.53,1.53,0,0,0,29.1,15.91ZM22.82,5.32a1.46,1.46,0,0,1,1.84,1,1.78,1.78,0,0,1-.54,2,1.44,1.44,0,0,1-1.48.15,1.39,1.39,0,0,1-.88-1.23c0-.1,0-.21,0-.31A1.55,1.55,0,0,1,22.82,5.32ZM22.74,26a.89.89,0,0,1-.08.43.55.55,0,0,1-.56.32.54.54,0,0,1-.5-.41.93.93,0,0,1,0-.33V21.06c0-.21.05-.26.25-.25a4.33,4.33,0,0,0,.72,0c.17,0,.21.05.21.22,0,.84,0,1.67,0,2.51S22.73,25.17,22.74,26Zm2.19-4.92c0,.48,0,4.52,0,5a.6.6,0,0,1-.36.62c-.41.18-.8-.12-.81-.62,0-1.68,0-3.35,0-5,0-.2.07-.22.23-.22h1A1.93,1.93,0,0,0,24.93,21.06Zm2.83-4.19c-.31.06-.52-.11-.6-.48-.29-1.36-.58-2.71-.88-4.06-.07-.37-.25-.55-.54-.55s-.56.31-.47.74.21,1,.32,1.48c.4,1.84.8,3.69,1.21,5.53.05.22,0,.27-.22.26H19.9c-.18,0-.26,0-.21-.24.52-2.35,1-4.69,1.53-7,.08-.38-.07-.66-.38-.72s-.54.12-.62.5l-.87,4,0,.13c-.09.35-.31.51-.6.44a.49.49,0,0,1-.34-.65c.36-1.72.71-3.44,1.09-5.16a1.67,1.67,0,0,1,1.64-1.38c1.41,0,2.82,0,4.23,0a1.75,1.75,0,0,1,1.71,1.5l1.05,5C28.18,16.55,28,16.81,27.76,16.87Z"/>
                    <path className="cls-1" d="M16,4.67a.5.5,0,0,0-.47-.44.52.52,0,0,0-.52.38A1.34,1.34,0,0,0,15,5V27c0,.48.19.74.53.73s.5-.25.5-.72V5A1.51,1.51,0,0,0,16,4.67Z"/>
                  </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon4").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_797_11981)">
                          <path
                            d="M4.83965 7.48178H9.61199C10.3854 7.48178 10.049 6.4499 10.049 6.4499L8.36389 0.792049C8.20215 0.249563 7.69111 0.501768 7.42877 0.675727C5.6029 2.03771 4.34048 4.09447 4.05194 6.44781C4.0495 6.46947 3.94331 7.48178 4.83965 7.48178ZM7.16958 2.81388C7.34738 2.68569 7.67748 2.51417 7.7952 2.9075L8.54518 5.42606C8.69644 5.93362 8.3307 6.01955 8.14242 6.03212H6.27149C5.71049 6.03212 5.64971 5.68421 5.65879 5.48824C5.80166 4.4134 6.35917 3.46885 7.16958 2.81388Z"
                            fill="#767C83"
                          />
                          <path
                            d="M20.3034 9.912C20.2992 8.90877 19.3305 8.8183 19.0542 8.81445H4.84305C4.055 8.81445 4.026 9.43519 4.04172 9.66608C4.48431 13.6165 7.96279 16.6936 12.1916 16.6936C16.3313 16.6936 19.7466 13.7419 20.3034 9.912ZM17.9756 11.9303C17.221 13.0516 15.9076 14.4419 13.8411 14.9579C13.3789 15.093 12.8892 15.1664 12.3816 15.1664C12.2821 15.1664 12.1853 15.1577 12.0871 15.1524C12.0851 15.1542 12.084 15.1563 12.0816 15.158C9.63042 15.1943 7.85345 13.7101 6.75415 12.3806C6.67975 12.2797 6.36327 11.8056 6.02688 11.1053C5.95352 10.9456 5.73136 10.3424 6.55924 10.3424H7.36092H7.81572H16.0424H17.403H17.614C17.7695 10.3434 18.6962 10.3909 18.3046 11.3543C18.2609 11.4504 18.2131 11.5478 18.1579 11.6453C18.1034 11.7347 18.0475 11.8245 17.9853 11.9174C17.9815 11.9213 17.9787 11.9258 17.9756 11.9303Z"
                            fill="#767C83"
                          />
                          <path
                            d="M6.58201 17.5371C5.15156 17.5371 3.99219 18.6968 3.99219 20.1276C3.99219 21.5581 5.15156 22.7178 6.58201 22.7178C8.01245 22.7178 9.17183 21.5581 9.17183 20.1276C9.17183 18.6972 8.0128 17.5371 6.58201 17.5371ZM6.58201 21.2629C5.95499 21.2629 5.44674 20.7543 5.44674 20.1276C5.44674 19.5006 5.95499 18.992 6.58201 18.992C7.20938 18.992 7.71763 19.5006 7.71763 20.1276C7.71763 20.7543 7.20938 21.2629 6.58201 21.2629Z"
                            fill="#767C83"
                          />
                          <path
                            d="M17.7148 17.5371C16.284 17.5371 15.125 18.6968 15.125 20.1276C15.125 21.5581 16.284 22.7178 17.7148 22.7178C19.1449 22.7178 20.3046 21.5581 20.3046 20.1276C20.3046 18.6972 19.1446 17.5371 17.7148 17.5371ZM17.7148 21.2629C17.0871 21.2629 16.5788 20.7543 16.5788 20.1276C16.5788 19.5006 17.0871 18.992 17.7148 18.992C18.3418 18.992 18.8501 19.5006 18.8501 20.1276C18.8501 20.7543 18.3418 21.2629 17.7148 21.2629Z"
                            fill="#767C83"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_797_11981">
                            <rect
                              width="22.3562"
                              height="22.3562"
                              fill="white"
                              transform="translate(0.96875 0.412109)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon5").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.44261 15.9466C4.21905 18.6387 6.24973 20.837 8.9511 20.837H13.413C16.4497 20.837 18.5363 18.3872 18.0333 15.3877C17.5023 12.2392 14.4656 9.65894 11.2706 9.65894C7.80535 9.65894 4.73138 12.4907 4.44261 15.9466Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.0876 7.33014C11.3737 7.33014 12.4163 6.28752 12.4163 5.00137C12.4163 3.71523 11.3737 2.67261 10.0876 2.67261C8.80141 2.67261 7.75879 3.71523 7.75879 5.00137C7.75879 6.28752 8.80141 7.33014 10.0876 7.33014Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.4519 8.44795C17.4808 8.44795 18.3149 7.61385 18.3149 6.58494C18.3149 5.55602 17.4808 4.72192 16.4519 4.72192C15.423 4.72192 14.5889 5.55602 14.5889 6.58494C14.5889 7.61385 15.423 8.44795 16.4519 8.44795Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.8973 12.1739C20.6689 12.1739 21.2945 11.5483 21.2945 10.7767C21.2945 10.005 20.6689 9.37939 19.8973 9.37939C19.1256 9.37939 18.5 10.005 18.5 10.7767C18.5 11.5483 19.1256 12.1739 19.8973 12.1739Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.03294 10.311C5.06185 10.311 5.89595 9.47689 5.89595 8.44797C5.89595 7.41906 5.06185 6.58496 4.03294 6.58496C3.00402 6.58496 2.16992 7.41906 2.16992 8.44797C2.16992 9.47689 3.00402 10.311 4.03294 10.311Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon6").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="19"
                        height="25"
                        viewBox="0 0 19 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.76768 23.5166H6.51768V22.7666V17.3686H9.90868C12.1195 17.3686 13.9809 16.6262 15.4284 15.1202C16.892 13.6177 17.6086 11.7054 17.6086 9.44604C17.6086 7.18667 16.8921 5.27443 15.4285 3.77195C13.981 2.26593 12.1195 1.52344 9.90868 1.52344H2.4375H1.6875V2.27344V22.7666V23.5166H2.4375H5.76768ZM11.8752 11.9254L11.8747 11.9259C11.3088 12.5444 10.6054 12.8532 9.70597 12.8532H6.51768V6.03886H9.70597C10.599 6.03886 11.3007 6.35247 11.8685 6.98862L11.8749 6.99577L11.8815 7.00276C12.4694 7.62844 12.7784 8.42328 12.7784 9.44604C12.7784 10.4686 12.4693 11.2773 11.8752 11.9254Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon7").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                    <svg 
                    id="Layer_1" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28"
                    height="28"
                    viewBox="0 0 32 32">
                    <path 
                      className="fill-[#767c83]"  
                      d="M29.35,8.56a1.75,1.75,0,0,0-1.3-.38c-.25,0-.34,0-.33-.31,0-.76,0-1.51,0-2.27a2.81,2.81,0,0,0-3-3H7.13A2.79,2.79,0,0,0,4.27,5.46V7.73c0,.45,0,.45-.46.45A1.66,1.66,0,0,0,2,10c0,1.2,0,2.39,0,3.59a1.68,1.68,0,0,0,1.89,1.89c.3,0,.35.09.35.37,0,2.85,0,5.7,0,8.55a2.82,2.82,0,0,0,1.4,2.46c.27.17.7.11.81.42a3.33,3.33,0,0,1,0,1v.07a1.12,1.12,0,0,0,1.09,1.1q1.7,0,3.39,0a1.11,1.11,0,0,0,1.11-1.11c0-.3,0-.61,0-.91s0-.21.21-.21h7.4c.17,0,.22,0,.21.21s0,.63,0,.94A1.1,1.1,0,0,0,21,29.4q1.71,0,3.42,0a1.11,1.11,0,0,0,1.09-1.1c0-.32,0-.65,0-1,0-.15,0-.22.19-.27a2.77,2.77,0,0,0,2.05-2.88V16c0-.56,0-.56.55-.57A1.66,1.66,0,0,0,30,13.79c0-1.33,0-2.66,0-4A1.61,1.61,0,0,0,29.35,8.56Zm-25.08,1v2.29c0,.75,0,1.49,0,2.23,0,.2,0,.28-.25.28-.71,0-.87-.15-.87-.85V10a.74.74,0,0,1,1-.7C4.32,9.35,4.27,9.45,4.27,9.53Zm5.86,18.76H7.83c-.17,0-.21-.05-.21-.21,0-.91,0-.91.87-.91.75,0,1.49,0,2.24,0,.19,0,.25.06.25.25C11,28.29,11,28.29,10.13,28.29Zm13.38,0H21.28c-.18,0-.26,0-.26-.24,0-.88,0-.88.87-.88h2.23c.18,0,.26,0,.26.23C24.39,28.29,24.4,28.29,23.51,28.29Zm3.1-6.83v2.83a1.67,1.67,0,0,1-1.75,1.76H7.13a1.66,1.66,0,0,1-1.74-1.73c0-1.76,0-3.53,0-5.3a2.3,2.3,0,0,1,0-.23,3.64,3.64,0,0,0,2.45.56H24.18a3.6,3.6,0,0,0,2.43-.57ZM15.45,17.94c0,.25-.07.3-.31.3h-8a1.66,1.66,0,0,1-1.76-1.74c0-2.54,0-5.07,0-7.61,0-.5.19-.7.69-.7h9.07c.26,0,.3.08.3.31,0,1.59,0,3.17,0,4.75S15.43,16.37,15.45,17.94Zm1.1-9.45c0-.26.07-.32.32-.32h9c.55,0,.74.18.74.73v7.53a1.67,1.67,0,0,1-1.79,1.79H16.87c-.28,0-.32-.08-.32-.33,0-1.57,0-3.14,0-4.71S16.56,10.06,16.55,8.49Zm9.78-1.4a1.35,1.35,0,0,0-.45,0H6.13a2.77,2.77,0,0,0-.74.09c0-.66,0-1.3,0-1.94A1.66,1.66,0,0,1,7,3.71H24.7a1.7,1.7,0,0,1,1.91,1.91c0,.4,0,.81,0,1.22C26.62,7.06,26.62,7.2,26.33,7.09Zm2.51,6.62a.75.75,0,0,1-1.05.61c-.08,0-.06-.11-.06-.18V9.48c0-.07,0-.14.06-.18a.74.74,0,0,1,1.05.61c0,.64,0,1.28,0,1.92S28.85,13.08,28.84,13.71Z"/>
                    <path 
                      className="fill-[#767c83]"  
                      d="M10.91,21.31c-.8-.19-1.6-.37-2.41-.54a1.67,1.67,0,0,0-2,1.58c0,.3,0,.6,0,.91a1.66,1.66,0,0,0,1.68,1.67c.55,0,1.09,0,1.64,0h1.71a1.09,1.09,0,0,0,1.08-.9A2.28,2.28,0,0,0,10.91,21.31Zm.41,2.51c-.51,0-1,0-1.54,0H8.28a.58.58,0,0,1-.66-.66c0-.25,0-.49,0-.74a.54.54,0,0,1,.69-.54c.78.16,1.56.33,2.34.52a1.13,1.13,0,0,1,.89,1.21C11.53,23.78,11.48,23.82,11.32,23.82Z"/>
                    <path 
                      className="fill-[#767c83]"  
                      d="M23.44,20.79l-2.14.47a2.26,2.26,0,0,0-1.95,2.51,1.11,1.11,0,0,0,1.16,1.16c.56,0,1.12,0,1.68,0h0c.56,0,1.11,0,1.67,0a1.67,1.67,0,0,0,1.63-1.62c0-.31,0-.61,0-.91A1.67,1.67,0,0,0,23.44,20.79Zm.94,1.77c0,.22,0,.44,0,.67a.56.56,0,0,1-.59.59H22.25c-.53,0-1.05,0-1.57,0-.17,0-.21,0-.22-.21a1.18,1.18,0,0,1,1-1.26l2.11-.47C24.11,21.76,24.37,22,24.38,22.56Z"/>
                    <path 
                      className="fill-[#767c83]"  
                      d="M18.11,21c-.71,0-1.42,0-2.12,0s-1.42,0-2.13,0c-.41,0-.65.22-.65.56s.25.55.66.55h4.25c.41,0,.66-.21.67-.54S18.54,21,18.11,21Z"/>
                    <path 
                      className="fill-[#767c83]"  
                      d="M17.59,23.26H14.42c-.41,0-.65.22-.65.56s.24.55.65.56h3.17c.4,0,.65-.23.64-.57A.56.56,0,0,0,17.59,23.26Z"/>
                    <path 
                      className="fill-[#767c83]"  
                      d="M20.44,4.83H11.73a1.29,1.29,0,0,0-.28,0,.51.51,0,0,0-.47.52.5.5,0,0,0,.39.55,1,1,0,0,0,.34,0h8.72a.56.56,0,1,0,0-1.11Z"/>
                    </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon8").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                    <svg 
                    id="Layer_1" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28"
                    height="28"
                    viewBox="0 0 32 32">
                    <path 
                    className="fill-[#767c83]"
                    d="M28.31,15.33l-.12-.2h1.73l-.1-.65c-.06-.38-.12-.75-.21-1.11a2,2,0,0,0-1.51-1.54,3.21,3.21,0,0,0-.78-.09,5,5,0,0,0-.85.08h0c-.06,0-.08,0-.13-.15-.45-1.14-.91-2.28-1.37-3.42a2.88,2.88,0,0,0-2.92-2H19.63c-.13,0-.17,0-.21-.14s-.17-.45-.26-.68l-.11-.26a1.31,1.31,0,0,0-1.29-.88H14.24A1.31,1.31,0,0,0,13,5.2l-.11.27c-.09.21-.18.43-.25.65s-.08.16-.25.16H10a2.9,2.9,0,0,0-3,2L6.75,9c-.36.92-.73,1.84-1.1,2.75l-.08.13a2.3,2.3,0,0,0-.63-.08l-.56,0a2,2,0,0,0-2,1.57c-.08.37-.14.75-.2,1.13l-.11.66H3.81A5.25,5.25,0,0,0,3,18V26.3a1.29,1.29,0,0,0,1.36,1.37h.91l.49,0H6a1.56,1.56,0,0,0,1.21-.44A1.67,1.67,0,0,0,7.5,25.9c0-.12,0-.15,0-.16s.08,0,.19,0H23.86l.24,0,.21,0a.3.3,0,0,1,.17,0c.06.06.05.22,0,.37a2.11,2.11,0,0,0,0,.25,1.3,1.3,0,0,0,1.32,1.33h1.93A1.29,1.29,0,0,0,29,26.36c0-2.84,0-5.67,0-8.51A4.88,4.88,0,0,0,28.31,15.33ZM13.68,6.16c.09-.23.17-.43.26-.64s.13-.17.33-.17h.22a.34.34,0,0,1,.37.21.35.35,0,0,0,.35.19.43.43,0,0,0,.42-.25c0-.13.11-.15.31-.15h.14c.16,0,.24,0,.31.17a.39.39,0,0,0,.36.23.56.56,0,0,0,.47-.26.53.53,0,0,1,.42-.16.45.45,0,0,1,.4.17,5.36,5.36,0,0,1,.28.64l.05.13h-.16c-.09,0-.17,0-.24-.17a.4.4,0,0,0-.37-.23.59.59,0,0,0-.48.27.37.37,0,0,1-.33.14.42.42,0,0,1-.34-.14A.52.52,0,0,0,16,5.89a.54.54,0,0,0-.46.28.38.38,0,0,1-.32.12.41.41,0,0,1-.33-.12.59.59,0,0,0-.49-.29A.38.38,0,0,0,14,6.1a.25.25,0,0,1-.28.17h-.12ZM28,26.18c0,.41,0,.45-.44.46H25.89c-.29,0-.36-.06-.36-.35V26c0-.29,0-.57,0-.86a.39.39,0,0,0-.47-.49H6.93a.51.51,0,0,0-.38.11.45.45,0,0,0-.08.35c0,.33,0,.67,0,1v.18c0,.25-.08.32-.33.32H4.34c-.26,0-.34-.07-.35-.33V23.83C4,22,4,20.11,4,18.26a4.64,4.64,0,0,1,.84-2.8l.51-.75.39-.61H3.39l0,.12h0l0-.19a2.47,2.47,0,0,0,.06-.29,1.62,1.62,0,0,1,0-.2,1,1,0,0,1,.9-.74h.85a.8.8,0,0,1,.53.28,1.64,1.64,0,0,0,.25.21l.07,0,.07-.05a.55.55,0,0,0,.2-.34L8,8.55A1.82,1.82,0,0,1,9.87,7.31H22.13A1.82,1.82,0,0,1,24,8.55l1.82,4.53.06.13.09.08h.15l0,0a1.38,1.38,0,0,1,1.17-.47h.23a1.08,1.08,0,0,1,1.12.93,2.27,2.27,0,0,1,.06.36,1.53,1.53,0,0,1-.36,0H26.27l.93,1.41a4.47,4.47,0,0,1,.69,1.5A4.72,4.72,0,0,1,28,18.14Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M20.77,16.84H11.19a.45.45,0,0,0-.35.11.41.41,0,0,0-.05.32.29.29,0,0,1,0,.13.43.43,0,0,0,.06.36.48.48,0,0,0,.41.13h9.33c.54,0,.6-.06.63-.61a.48.48,0,0,0-.09-.34A.5.5,0,0,0,20.77,16.84Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M7.37,16.06A2.13,2.13,0,0,0,5.3,18.14a2.06,2.06,0,0,0,.61,1.47,2.1,2.1,0,0,0,2.95,0,2.05,2.05,0,0,0,.6-1.48A2.08,2.08,0,0,0,7.37,16.06Zm0,3.13a1,1,0,0,1-1-1.05,1,1,0,0,1,1-1V17h0l0,.12a1,1,0,0,1,1,1A1,1,0,0,1,7.39,19.19Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M24.61,16.06a2.08,2.08,0,1,0,2.09,2.08A2.1,2.1,0,0,0,24.61,16.06Zm0,3.13a1,1,0,0,1-1-1,1,1,0,0,1,1-1V17h0l0,.12a1,1,0,0,1,.74.32,1,1,0,0,1-.77,1.77Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M20.43,19.43a.48.48,0,0,1,0-.17.42.42,0,0,0-.06-.34A.45.45,0,0,0,20,18.8H12.21c-.56,0-.62.05-.64.61a.43.43,0,0,0,.08.33.45.45,0,0,0,.34.1h8.06a.4.4,0,0,0,.32-.11A.39.39,0,0,0,20.43,19.43Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M11.29,15.14h0a.52.52,0,0,0,0-1,.45.45,0,0,0-.34.15.54.54,0,0,0-.15.38A.51.51,0,0,0,11.29,15.14Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M12.87,15.13h0a.49.49,0,0,0,.5-.51.51.51,0,0,0-.53-.51.5.5,0,0,0-.36.16.47.47,0,0,0-.13.38A.49.49,0,0,0,12.87,15.13Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M19.12,15.14h0a.5.5,0,0,0,.49-.51c0-.3-.18-.5-.53-.52a.45.45,0,0,0-.34.15.54.54,0,0,0-.15.38A.51.51,0,0,0,19.12,15.14Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M20.69,15.14h0a.49.49,0,0,0,.49-.49.52.52,0,0,0-.51-.54h0a.5.5,0,0,0-.51.49.44.44,0,0,0,.13.37A.48.48,0,0,0,20.69,15.14Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M8.17,15.14h0a.5.5,0,0,0,.47-.52.48.48,0,0,0-.51-.51.52.52,0,0,0,0,1Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M16,15.13h0a.47.47,0,0,0,.49-.5.52.52,0,0,0-.53-.52h0a.51.51,0,0,0,0,1Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M6.59,22.34h0a.48.48,0,0,0-.49.52.48.48,0,0,0,.49.5h0A.61.61,0,0,0,7,23.17a.51.51,0,0,0,.11-.35A.49.49,0,0,0,6.59,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M9.73,22.34a.53.53,0,0,0-.38.16.5.5,0,0,0-.13.36.49.49,0,0,0,.51.49h0c.29,0,.47-.18.51-.53A.51.51,0,0,0,9.73,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M14.45,22.34a.51.51,0,0,0,0,1h0a.51.51,0,0,0,.53-.49.48.48,0,0,0-.12-.36A.52.52,0,0,0,14.45,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M17.57,22.34a.51.51,0,0,0-.4.84.52.52,0,0,0,.38.17h0a.5.5,0,0,0,.52-.45.54.54,0,0,0-.15-.41A.46.46,0,0,0,17.57,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M22.28,22.34a.51.51,0,0,0-.4.17.47.47,0,0,0-.13.35.49.49,0,0,0,.52.49h0a.5.5,0,0,0,.5-.52A.49.49,0,0,0,22.28,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M25.39,22.34a.49.49,0,0,0-.51.49.47.47,0,0,0,.13.35.57.57,0,0,0,.38.18h0a.51.51,0,0,0,.38-.16.51.51,0,0,0-.38-.86Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M23.83,15.13h0a.47.47,0,0,0,.49-.5.52.52,0,0,0-.53-.52h0a.51.51,0,0,0,0,1Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M6.57,15.14h0A.56.56,0,0,0,7,15a.46.46,0,0,0,.13-.34.52.52,0,0,0-.89-.35.52.52,0,0,0,.34.87Z"/>
                    <path 
                    className="fill-[#767c83]" 
                    d="M9.73,14.11a.5.5,0,0,0-.51.49.49.49,0,0,0,.13.36.52.52,0,0,0,.37.18h0a.53.53,0,0,0,.51-.53A.52.52,0,0,0,9.73,14.11Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M14.43,15.14h0a.52.52,0,0,0,0-1,.52.52,0,0,0-.36.16.5.5,0,0,0-.14.38A.51.51,0,0,0,14.43,15.14Z"/>
                    <path
                    className="fill-[#767c83]"
                    d="M17.56,15.14h0a.53.53,0,0,0,.49-.54.52.52,0,0,0-.53-.49.5.5,0,0,0-.51.5.49.49,0,0,0,.13.36A.52.52,0,0,0,17.56,15.14Z"/>
                    <path
                    className="fill-[#767c83]"
                    d="M22.23,15.14h0a.55.55,0,0,0,.41-.17.48.48,0,0,0,.14-.34.52.52,0,0,0-.53-.52.51.51,0,0,0-.36.15.54.54,0,0,0-.14.37A.51.51,0,0,0,22.23,15.14Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M25.39,15.13h0c.28,0,.46-.17.52-.5a.54.54,0,0,0-.54-.52.52.52,0,0,0-.36.16.51.51,0,0,0,.37.86Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M5,22.34a.49.49,0,0,0-.36.14.51.51,0,0,0-.14.37.47.47,0,0,0,.5.5H5c.3,0,.48-.18.51-.52A.49.49,0,0,0,5,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M11.27,22.34a.51.51,0,0,0,0,1h0a.51.51,0,0,0,.37-.14.51.51,0,0,0,.13-.37A.49.49,0,0,0,11.27,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M12.86,22.34a.51.51,0,0,0-.37.14.53.53,0,0,0-.13.38.47.47,0,0,0,.5.49h0a.5.5,0,0,0,.5-.53A.49.49,0,0,0,12.86,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M19.13,22.33a.49.49,0,0,0-.5.5.47.47,0,0,0,.49.52h0a.47.47,0,0,0,.5-.49A.49.49,0,0,0,19.13,22.33Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M20.69,22.34a.47.47,0,0,0-.5.49.53.53,0,0,0,.13.38.51.51,0,0,0,.37.14h0a.51.51,0,1,0,0-1Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M27,22.34h0a.47.47,0,0,0-.5.51.46.46,0,0,0,.5.5h0c.29,0,.47-.17.51-.52A.49.49,0,0,0,27,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M8.17,22.34a.46.46,0,0,0-.5.5.49.49,0,0,0,.48.52h0a.5.5,0,0,0,.5-.51A.47.47,0,0,0,8.17,22.34Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M16,22.33a.49.49,0,0,0-.5.51.46.46,0,0,0,.49.51h0a.48.48,0,0,0,.51-.5A.51.51,0,0,0,16,22.33Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M23.82,22.34a.47.47,0,0,0-.49.49.48.48,0,0,0,.47.53h0a.49.49,0,0,0,.52-.5A.48.48,0,0,0,23.82,22.34Z"/>
                    </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon9").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px] ">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.0625 6.30156C4.0625 5.52985 4.68808 4.9043 5.45976 4.9043H17.5693C18.3411 4.9043 18.9666 5.52985 18.9666 6.30156V11.4248H4.0625V6.30156Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.125 17.0156V18.8786"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.8984 17.0156V18.8786"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.65272 9.09766H6.8582C6.08649 9.09766 5.46094 9.72321 5.46094 10.4949V11.4264H11.05V10.4949C11.05 9.72321 10.4244 9.09766 9.65272 9.09766Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1762 9.09766H13.3816C12.6099 9.09766 11.9844 9.72321 11.9844 10.4949V11.4264H17.5734V10.4949C17.5734 9.72321 16.9479 9.09766 16.1762 9.09766Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.20312 12.823C2.20312 12.0513 2.8287 11.4258 3.60039 11.4258H19.436C20.2077 11.4258 20.8333 12.0513 20.8333 12.823V17.0148H2.20312V12.823Z"
                          stroke="#767C83"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon10").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                    <svg 
                    id="Layer_1" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28"
                    height="28"
                    viewBox="0 0 32 32">
                    <path 
                    className="fill-[#767c83]"
                    d="M28.49,13.44H24.68c-.18,0-.24,0-.23-.22s0-.45,0-.67c0-.55-.17-.72-.72-.72H13c-.42,0-.67.19-.67.51s.24.51.67.52H23.24c.11,0,.19,0,.19.15,0,1.56.09,3.12-.06,4.66A9.66,9.66,0,0,1,18.7,25.2a.49.49,0,0,1-.29.08H8.85a.59.59,0,0,1-.31-.09,9.71,9.71,0,0,1-4.7-8.3c0-1.27,0-2.54,0-3.81,0-.17,0-.22.21-.22H6.52c.28,0,.56,0,.85,0a.49.49,0,0,0,.43-.47.5.5,0,0,0-.38-.51,1.63,1.63,0,0,0-.31,0H3.5c-.51,0-.7.18-.7.69,0,1.31,0,2.63,0,3.94A13.09,13.09,0,0,0,3,18.63a10.77,10.77,0,0,0,2.7,5.51,15.47,15.47,0,0,0,1.16,1.1l0,0H3.44c-.45,0-.66.2-.63.65a3.37,3.37,0,0,0,1.88,2.9,6.51,6.51,0,0,0,1,.36h17c.22-.05.46,0,.68-.1a3.53,3.53,0,0,0,2.38-3A.72.72,0,0,0,25,25.2c-1.35,0-2.7,0-4,0a.62.62,0,0,1-.27,0s0,0,0-.06a11.17,11.17,0,0,0,2.05-2.29.38.38,0,0,1,.38-.17h1.24a4.89,4.89,0,0,0,3.85-1.92,4.52,4.52,0,0,0,1-2.48V13.83A.68.68,0,0,0,28.49,13.44ZM24.58,26.31a2.31,2.31,0,0,1-2,1.83,2.48,2.48,0,0,1-.38,0H6.34a2.38,2.38,0,0,1-2.28-1.38A1.17,1.17,0,0,1,4,26.54c0-.07,0-.15-.07-.23Zm-.13-9.61c0-.13,0-.17.16-.16H26c.12,0,.16,0,.16.15s0,.36,0,.62a2.07,2.07,0,0,1-.47,1.58,1.84,1.84,0,0,1-1.34.62c-.15,0-.17,0-.14-.17A10.24,10.24,0,0,0,24.45,16.7Zm3.71.95a3.91,3.91,0,0,1-3.82,3.92h-1c.13-.32.26-.61.38-.91s.18-.11.28-.11a2.94,2.94,0,0,0,2.17-.77,2.83,2.83,0,0,0,.93-2.05c0-.53,0-1.07,0-1.6s-.19-.61-.61-.62H24.67c-.16,0-.24,0-.22-.21s-.11-.63.06-.79.5,0,.77,0H28c.17,0,.21,0,.21.22C28.16,15.67,28.18,16.66,28.16,17.65Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M16.05,7.31a1.78,1.78,0,0,1,0,2.47,2.54,2.54,0,0,0-.23.34.51.51,0,0,0,.46.71.72.72,0,0,0,.39-.17,2.87,2.87,0,0,0,.21-3.94c-.06-.08-.12-.15-.17-.23a1.31,1.31,0,0,1-.07-1.62c.22-.34.19-.64-.07-.82S16,4,15.8,4.32a2.27,2.27,0,0,0-.33,1.91A2.76,2.76,0,0,0,16.05,7.31Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M13.68,7.2a1.8,1.8,0,0,1-.45,1.4,1,1,0,0,0-.29.53.49.49,0,0,0,.28.48.45.45,0,0,0,.57-.08,3.12,3.12,0,0,0,.92-1.87,2.84,2.84,0,0,0-.66-2.1,2.17,2.17,0,0,1-.4-.6,1.43,1.43,0,0,1,.2-1.34.5.5,0,0,0-.1-.71A.5.5,0,0,0,13,3a2.26,2.26,0,0,0-.49,1.22,2.43,2.43,0,0,0,.64,1.91A1.93,1.93,0,0,1,13.68,7.2Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M10.35,9.79a2,2,0,0,0-.21.3.5.5,0,0,0,.78.61,3,3,0,0,0,.94-2.36,3.11,3.11,0,0,0-.79-1.78,1.34,1.34,0,0,1-.3-1.34A5.12,5.12,0,0,1,11,4.7.49.49,0,0,0,10.62,4a.47.47,0,0,0-.43.18,2.34,2.34,0,0,0-.51,1.63,2.65,2.65,0,0,0,.66,1.53A1.77,1.77,0,0,1,10.35,9.79Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M19.64,22.61A8.49,8.49,0,0,0,22,17.26a3.84,3.84,0,0,0,0-.48.52.52,0,0,0-.5-.47.54.54,0,0,0-.51.43,1.41,1.41,0,0,0,0,.2,7.44,7.44,0,0,1-.29,1.88,7.6,7.6,0,0,1-1.79,3.11.52.52,0,0,0,0,.79A.54.54,0,0,0,19.64,22.61Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M18,23.63a.52.52,0,0,0-.5-.51.55.55,0,0,0-.53.52.5.5,0,0,0,.51.51A.52.52,0,0,0,18,23.63Z"/>
                    <path 
                    className="fill-[#767c83]"
                    d="M10.17,12.86a.5.5,0,0,0,.52-.48.52.52,0,0,0-.5-.54.53.53,0,0,0-.52.5A.52.52,0,0,0,10.17,12.86Z"/>
                    </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon11").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_797_12001)">
                          <path
                            d="M6.3071 21.524H10.1828M10.1828 21.524H14.0586H10.221V16.0445L15.2531 10.2786M10.1828 21.524V16.0445L5.18571 10.2786M15.2531 10.2786L18.469 6.59375H13.3331H1.99219L5.18571 10.2786M15.2531 10.2786H5.18571"
                            stroke="#767C83"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M12.7578 6.59527C12.7578 5.7546 13.0012 4.93191 13.4587 4.22658C13.9161 3.52127 14.568 2.96349 15.3356 2.62064C16.1032 2.2778 16.9537 2.16455 17.7842 2.29458C18.6147 2.42461 19.3899 2.79235 20.016 3.35339C20.642 3.91442 21.0923 4.64474 21.3123 5.45611C21.5323 6.26748 21.5126 7.12522 21.2557 7.92568C20.9988 8.72613 20.5155 9.43507 19.8644 9.96681C19.2133 10.4986 18.4221 10.8305 17.5865 10.9223"
                            stroke="#767C83"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_797_12001">
                            <rect
                              width="22.3562"
                              height="22.3562"
                              fill="white"
                              transform="translate(0.0703125 0.712891)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {data.ficons.filter((i) => i === "ficon12").length > 0 ? (
                  <div className="flex items-center justify-center mb-[10px]">
                    <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                    <svg 
                    id="Layer_1" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28"
                    height="28"
                    viewBox="0 0 32 32">
                    <path 
                    className="fill-[#767c83]" 
                    d="M19.6,12.43a1,1,0,0,0,.69.28.94.94,0,0,0,.68-.28l5.26-5.27a1,1,0,1,0-1.37-1.37L19.6,11.05A1,1,0,0,0,19.6,12.43Z"/>
                    <path 
                    className="fill-[#767c83]" 
                    d="M28.86,9.79a1,1,0,0,0,0-1.37,1,1,0,0,0-1.38,0l-4.77,4.77a5.79,5.79,0,0,1-3.57,2l-.17,0c-.16,0-.3.06-.43.08l-.07,0L16.7,13.5a3.54,3.54,0,0,0,.08-.69,5.55,5.55,0,0,1,1.95-3.5L23.6,4.54a1,1,0,0,0-1.37-1.39L17.35,7.93A8.47,8.47,0,0,0,15,11.76L6.56,3.35a1,1,0,0,0-1.38,0,7.32,7.32,0,0,0,0,10.44l4.88,4.88L4.12,23.51a3.09,3.09,0,0,0-1.26,2.33,3,3,0,0,0,1,2.36,3.12,3.12,0,0,0,2.2.93h.17a3.19,3.19,0,0,0,2.3-1.19l4.83-6a1,1,0,0,0,1,.19,2.73,2.73,0,0,1,3.18.76l4,4.95a3.33,3.33,0,0,0,2.39,1.28h.26a3.44,3.44,0,0,0,2.42-1,3.3,3.3,0,0,0,0-4.79l-6.39-6.39a8.42,8.42,0,0,0,4-2.36ZM7,26.71a1.25,1.25,0,0,1-.89.47,1.18,1.18,0,0,1-.92-.39,1.09,1.09,0,0,1-.35-.85,1.15,1.15,0,0,1,.51-.88l6.14-5,.47.47Zm18.19,0a1.54,1.54,0,0,1-1.17.42,1.37,1.37,0,0,1-1-.54l-4-4.95a4.5,4.5,0,0,0-3.59-1.72,5.37,5.37,0,0,0-1.19.14L14.14,20a1,1,0,0,0-.26-.35l-.18-.09L6.56,12.41a5.35,5.35,0,0,1-.63-6.93l8.81,8.81a.92.92,0,0,0,.45.44l10,10A1.37,1.37,0,0,1,25.15,26.73Z"/></svg>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {data?.contactMobiles?.length || data?.contactEmails?.length || data?.contactWebsite?.length || data?.contactName ? (
          <ContactDetails
            fontText={data?.font_text}
            phones={data?.contactMobiles}
            emails={data?.contactEmails}
            websites={data?.contactWebsite}
            contactName={data?.contactName}
            className="mb-[20px]"
            t={t}
            showContactTitle={true}
          />
        ) : null }

        {data?.aboutCompany ? (
          <div 
            className="w-full bg-white flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] py-[20px] mb-[20px] whitespace-break-spaces"
            id="aboutCompanyBlock"
          >
            <h1
              className="text-[#131D29] font-medium text-lg xs:text-xl mb-[10px] "
              style={{ fontFamily: data?.font_text }}
            >
              {t('bushiness.about_company')}
            </h1>
            <div className="w-[38%] h-[1px] bg-[#F2F2F2] rounded-full"></div>
            <p
              className="text-xs mt-[17px] text-[#767C83] max-w-[250px] text-balance"
              style={{ fontFamily: data?.font_text, overflowWrap: "anywhere"}}
            >
              {data.aboutCompany}
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Business;
