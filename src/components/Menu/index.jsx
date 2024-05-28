import React, { useMemo } from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import { isLight } from "../../utils/Color";
import { useAdjustBackdropHeight } from "../backdrop";
import useScroller from "../../utils/Scroller";
import WelcomeScreen from "../common/WelcomeScreen";
import WeekHours from "../common/weekHours";
import SocialNetWorks from "../common/socialNetwork";
import useLanguage from "../../utils/useLanguage";
// import ShortenedUrl from "../../utils/shortenedurl";
// import linkFixer from "../../utils/LinkFixer";
import ContactDetails from "../common/contactDetails";


let Menu = ( {qrData }) => {
  const location = useLocation();
  const urlParams = useMemo(()=>{return new URLSearchParams(location.search)},[location.search]);
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [commonAllergens, setAllergens] = useState([]);
  const tabHead = useRef();
  const sectionRefs = useRef({});
  const sectionLinksContainerRef = useRef();
  const sectionLinksRef = useRef({});
  const data = qrData

  const t = useLanguage();
  useUpdateDomTitle(data?.companyTitle,data?.primaryColor);

  const marginBottom = 20;
  const ignoredColors = ["#FF6228"];
  const light = isLight(data?.primaryColor, ignoredColors);

  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen])

  // const openURL = (url) => {
  //   window.open(linkFixer(url), "_blank");
  // };

  useEffect(() => {
    const current = sectionRefs.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
          sectionLinksContainerRef.current?.scroll({
            left:
              sectionLinksRef.current[entry.target.id].offsetLeft +
              sectionLinksRef.current[entry.target.id].offsetWidth / 2 -
              sectionLinksContainerRef.current.offsetWidth / 2,
            behavior: "smooth",
          });

        } else {
          // setActiveLink("");
        }
      });
    },
    {
      // root: document,
      rootMargin: `${-(tabHead?.current ? tabHead?.current?.getBoundingClientRect().height - marginBottom : 100)}px 0px -50% 0px`,
    });

    Object.values(current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(current).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };

  },[visible]);

  function getOpColor(hexColor) {
    // Convert hex string to RGB array
    if(/^#[0-9A-F]{6}$/i.test(hexColor)){
      const rgbColor = hexColor
        .match(/[A-Za-z0-9]{2}/g)
        .map((val) => parseInt(val, 16));
  
      // Create new RGB array with same color at 20% opacity
      const opRgbColor = rgbColor.map((val) =>
        Math.round(val + 0.8 * (255 - val))
      );
  
      // Convert RGB array back to hex string
      const opHexColor = opRgbColor.reduce(
        (acc, val) => acc + val.toString(16).padStart(2, "0"),
        ""
      );
  
      // Add alpha value to hex string and return
      return `#${opHexColor}CC`;
    }else{
      return `#000000CC`;
    }
  }
  const opColor = getOpColor(data.primaryColor);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    // all allergens value
    const allergenArray = [];
    data?.sections.forEach((s,i)=>{
      s.products.forEach((p,i)=>{
        p.allergens.forEach((a,i)=>{
          allergenArray.push(a);
        })
      })
    })
    // find duplicate value in array
    const uniqueAllergen = Array.from(new Set(allergenArray));
    setAllergens(uniqueAllergen); // Output: duplicate allergens

    const d = setTimeout(() => {
      showWelcomeScreen(false);
      data.screen = false;
    }, 3000);

    return ()=>clearTimeout(d);

  }, [data, data.screen, urlParams]);

  let backdropElement = useRef(null);
  let backdropEndElement = useRef(null);

  useAdjustBackdropHeight(backdropElement, backdropEndElement,null,data,visible);

  const scrollSection = useCallback((sectionId)=>{

    const d = setTimeout(()=>{
      const section = document.getElementById(sectionId)
      window.scroll({
        top: section?.offsetTop - tabHead.current.getBoundingClientRect().height - 10,
        behavior: "smooth",
      });
    },100)
    setActiveLink(sectionId)
    return ()=>clearTimeout(d);
  },[])

  useEffect(()=>{
    if(data?.activeId && data?.activeId !== ''){
      setVisible(true);
      scrollSection(data?.activeId);
    }else{
      setVisible(false);
    }
  },[data?.activeId, scrollSection])
  
  useScroller(data);
  
  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <>
      {visible ? (
        <div className="flex flex-col items-center relative w-full min-h-screen animated">
          <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
            <svg
              className="hidden sm:block top-0 absolute"
              width="2080"
              height="379"
              viewBox="0 0 2080 379"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H2080V354.388C2080 354.388 1754 300.776 1040 354.388C326 408 0 354.388 0 354.388V0Z"
                fill={data.primaryColor}
              />
            </svg>
          </div>
          <div className="flex flex-col items-center w-full z-10 bg-white relative max-w-[700px] mb-[20px] sm:rounded-[20px] sm:mt-[20px] shadow-md">
            <div
              ref={tabHead}
              className="sticky top-0 w-full bg-[#F7F7F7] max-w-[700px] rounded-t-[10px]"
            >
              <div
                className="absolute top-4 left-4 mt-4 flex justify-center items-center rounded-full w-[35px] bg-white h-[35px] cursor-pointer border-[2px] border-[#EAEAEC]"
                onClick={() => {
                  setVisible(false);
                  window.scrollTo(0, 0);
                }}
              >
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
                    d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <div
                className="w-full overflow-x-auto custom-scrollbar"
                ref={sectionLinksContainerRef}
              >
                <div className="min-w-min flex flex-row justify-start px-[12px] xs:px-[20px] mt-[80px] py-[10px] space-x-5 w-full text-black">
                  {data?.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      id={`th${section.id}`}
                      ref={(ref) => (sectionLinksRef.current[section.id] = ref)}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollSection(section.id);
                      }}
                      className={`text-black font-medium pb-[8px] whitespace-nowrap duration-200 w-32 truncate overflow-hidden ... ${
                        activeLink === `${section.id}`
                          ? "border-b-[3px] border-black"
                          : ""
                      }  `}
                      style={{
                        fontFamily: data?.font_text,
                      }}
                    >
                      {section.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center px-[20px] bg-white">
              <div className="w-full bg-white flex flex-col items-center justify-center px-[20]  content">
                {data?.sections.map((section, i) => (
                  <div
                    key={section.id}
                    id={section.id}
                    ref={(ref) => (sectionRefs.current[section.id] = ref)}
                    className="bg-white mb-4 pb-[20px] w-full flex flex-col justify-center items-center my-[30px] px-[20px] border-[2px] rounded-lg border-[#EAEAEC] scroll-mt-[130px]"
                  >
                    <h1
                      className="text-lg xs:text-2xl font-medium text-black mt-[15px] mb-[6px] text-balance "
                      style={{ fontFamily: data?.font_text,
                      overflowWrap:"anywhere"
                      }}
                      id={`menuSec_Name${section.id}`}
                    >
                      {section.name}
                    </h1>

                    {section.description ? (
                      <h2
                        className="text-sm xs:text-lg text-black mb-[5px]"
                        style={{ fontFamily: data?.font_text }}
                        id={`menuSec_Desc${section.id}`}
                      >
                        {section.description}
                      </h2>
                    ) : (
                      <></>
                    )}
                    <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]"></div>
                    <div className="product w-full flex flex-col">
                      {section.products.map((product, p) => (
                        <div
                          className=""
                          key={product.id}
                          id={`menuProd${i + 1}_${p + 1}`}
                        >
                          {product.image ? (
                            <div
                              className="w-full h-24 xxs:h-32 xs:h-44 sm:h-52 rounded-md my-[10px]"
                              style={{
                                backgroundImage: `url("${product.image}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></div>
                          ) : (
                            <></>
                          )}
                          <div className="flex flex-col justify-between space-x-1 text-black text-base xs:text-xl font-bold">
                            <span
                              className="text-left"
                              style={{ fontFamily: data?.font_text }}
                            >
                              {product.name}
                            </span>
                          </div>
                          <div className="flex flex-col text-left mt-[5px] space-y-[5px] text-xs xs:text-sm">
                            <p className="italic" style={{ fontFamily: data?.font_text }}>
                              {product.translated}
                            </p>
                            <p style={{ fontFamily: data?.font_text }}>
                              {product.description}
                            </p>
                          </div>
                          <div className="price-wrap mb-[15px] mt-[15px]">
                            <span
                                className="text-left text-lg w-full block text-blue-700 font-bold"
                                style={{ fontFamily: data?.font_text }}
                              >
                                {product.price}
                            </span>
                          </div>
                          {product.allergens.length ? (
                            <>
                              <div
                                className="w-full grid sm:grid-cols-10 xs:grid-cols-5 xxs:grid-cols-3 grid-cols-2 justify-center justify-items-center items-center gap-2 rounded-lg px-[12px] py-[10px] mb-[15px] duration-500"
                                style={{ backgroundColor: opColor }}
                              >
                                {product.allergens.map((allergen, i) => (
                                  <img
                                    key={i}
                                    src={`../images/allergens-icons/${allergen}.svg`}
                                    className="w-[35px] cursor-pointer"
                                    alt={allergen}
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                          <div
                            className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]"
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {commonAllergens.length ? (
                  <div
                    className="w-full grid sm:grid-cols-5 xs:grid-cols-3 grid-cols-2 justify-center items-center gap-3 rounded-xl p-[20px] mb-[20px] duration-500"
                    style={{ backgroundColor: opColor }}
                  >
                    <>
                      {commonAllergens.map((name, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] "
                        >
                          <img
                            src={`../images/allergens-icons/${name}.svg`}
                            className="w-[40px]"
                            alt={name}
                          />
                          <span
                            className="text-sm xs:text-base"
                            style={{ fontFamily: data?.font_text }}
                          >
                            {data?.live ? name : t(`menu.${name}`)}
                          </span>
                        </div>
                      ))}
                    </>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
            <div
              ref={backdropElement}
              className={
                data?.companyLogo
                  ? "qr-backdrop menu-with-image menu-with-image-bigscreen"
                  : "qr-backdrop menu-no-image menu-no-image-bigscreen"
              }
              style={{
                "--bg-color": data?.primaryColor,
              }}
              id="color_palette"
            >
              <svg
                width="375"
                height="526"
                viewBox="0 0 375 526"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="375"
                  height="526"
                  className="duration-500"
                  fill="var(--bg-color)"
                ></rect>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[16px]">
            {data?.companyLogo ? (
              <img
                src={data?.companyLogo}
                className="w-[120px] rounded-[5px]"
                alt={data?.companyTitle}
              />
            ) : (
              <></>
            )}
            {data?.companyTitle || data?.companyDescription ? (
              <div className="mt-[15px] xs:mt-[31px] whitespace-break-spaces" id="menu_info">
                <h1
                  className="text-xl xs:text-2xl mb-[10px] xs:mb-[14px] font-bold duration-500"
                  style={{
                    color: light ? "#000000" : "#ffffff",
                    fontFamily: data?.font_title,
                  }}
                >
                  {data?.companyTitle}
                </h1>
                <h2
                  className="text-sm xs:text-[15px] duration-500 text-balance"
                  style={{
                    color: light ? "#000000" : "#ffffff",
                    fontFamily: data?.font_title,
                    overflowWrap: "anywhere"
                  }}
                >
                  {data?.companyDescription}
                </h2>
              </div>
            ) : (
              <></>
            )}
            <div className="my-[20px] w-full flex flex-col items-start justify-center space-y-[10px] xs:space-y-[15px] cursor-pointer">
              {data?.sections
                .slice()
                .sort((a, b) => a.id - b.id)
                .map((section, index) => (
                  <a
                    ref={(el) => {
                      backdropEndElement.current =
                        index === 0 ? el : backdropEndElement.current;
                    }}
                    key={index}
                    onClick={(ev) => {
                      ev.preventDefault();
                      setVisible(true);
                      scrollSection(section.id);
                    }}
                    href={`#${section.id}`}
                    className="flex flex-col w-full bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
                  >
                    <div className="flex flex-row justify-between items-center px-[12px] xs:px-[24px] py-[18px] rounded-[4px]">
                      <div className="flex flex-row items-center text-balance" 
                      style={{overflowWrap:"anywhere"}}
                      >
                        <p className="text-lg xs:text-xl text-left text-[#131D29] font-medium text-balance">
                          {section.name}
                        </p>
                      </div>
                      <div className="arrow-icon w-6 min-w-6 max-w-6">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z"
                            fill="#767C83"
                          />
                          <path
                            d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z"
                            fill="#767C83"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
            {commonAllergens.length ? (
              <div className="w-full grid grid-cols-4 justify-center items-center gap-3 p-[20px] mb-[20px] bg-white shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
                <>
                  {commonAllergens.map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center mb-[10px]"
                    >
                      <img
                        src={`../images/allergens-icons/${name}.svg`}
                        className="w-[53px]"
                        alt={name}
                      />
                    </div>
                  ))}
                </>
              </div>
            ) : (
              <></>
            )}
            {!data?.areAllDaysNull && <WeekHours data={data} />}

            <SocialNetWorks data={data} title={t("menu.social_network")} />

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
            ) : null}

          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
