import React from "react";
import { useEffect, useState, useRef } from "react";
import "./index.css";
import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";

let MenuPreview = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [activeLink, setActiveLink] = useState('');

  const t = useLanguage()

  useUpdateDomTitle('Online QR Generator - Scanned Page | Menu',"#FF6228");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };
  const sectionRefs = useRef({});
  useEffect(() => {

    const currSecRefs = sectionRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id);
            setActiveLink(id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
      //{ rootMargin: '-130px 0px -70% 0px' }
    );

    Object.values(currSecRefs).forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      Object.values(currSecRefs).forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, [activeLink]);

  function scrollToSection(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
  
    const section = sectionRefs.current[id];
 
    if (section) { // Add a check for null or undefined value of section
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);

    }
  }
  return (
    <>
      {visible ? (
        <div className="flex flex-col items-center relative w-full min-h-screen animated">
          <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
            <svg className="hidden sm:block top-0 absolute" width="2080" height="379" viewBox="0 0 2080 379" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H2080V354.388C2080 354.388 1754 300.776 1040 354.388C326 408 0 354.388 0 354.388V0Z" fill="#FF6228" />
            </svg>
          </div>
          <div className="flex flex-col items-center w-full z-10 bg-[#F7F7F7] relative max-w-[700px] min-h-screen sm:rounded-[20px] sm:mt-[20px] shadow-md">
            <div className="sticky top-0 w-full bg-[#F7F7F7] max-w-[700px] rounded-t-[10px]">
              <div 
                className="absolute top-4 left-4 mt-4 flex justify-center items-center rounded-full w-[35px] bg-white h-[35px] cursor-pointer border-[2px] border-[#EAEAEC]"
                onClick={() => { 
                  setVisible(false);
                  window.scrollTo(0, 0);
                }}
              >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#000000"/>
                </svg>
              </div>
              <div className="w-full overflow-x-auto custom-scrollbar">
                <div className="min-w-min flex flex-row justify-start px-[12px] xs:px-[20px] mt-[80px] py-[10px] space-x-5 w-full text-black" >
                  <a
                    key={1}
                    href="#1"
                    onClick={scrollToSection}
                    className={`text-black font-medium pb-[8px] whitespace-nowrap ${activeLink === 1 ? 'border-b-[3px] border-black' : ''} `}
                  >
                    {t('menu.section_1')}
                  </a>
                  <a
                    key={2}
                    href="#2"
                    onClick={scrollToSection}
                    className={`text-black font-medium pb-[8px] whitespace-nowrap ${activeLink === 2 ? 'border-b-[3px] border-black' : ''} `}
                  >
                    {t('menu.section_2')}
                  </a>
                  <a
                    href="#3"
                    onClick={scrollToSection}
                    className={`text-black font-medium pb-[8px] whitespace-nowrap ${activeLink === 3 ? 'border-b-[3px] border-black' : ''} `}
                  >
                    {t('menu.section_3')}
                  </a>
                  <a
                    href="#4"
                    onClick={scrollToSection}
                    className={`text-black font-medium pb-[8px] whitespace-nowrap ${activeLink === 4 ? 'border-b-[3px] border-black' : ''} `}
                  >
                   {t('menu.section_4')}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center px-[20px] bg-white">
              <div className="w-full bg-white flex flex-col items-center justify-center px-[20] content">
                <div id="1" ref={ref => (sectionRefs.current[1] = ref)} className="bg-white mb-4 pb-[20px] w-full flex flex-col justify-center items-center my-[30px] px-[20px] border-[2px] rounded-lg border-[#EAEAEC] scroll-mt-[130px]">
                  <h1 className="text-2xl font-medium text-black mt-[15px] mb-[6px]">
                  {t('menu.section_1')}
                  </h1>
                  <h2 className="text-md text-black mb-[5px]"> </h2>
                  <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]"></div>
                  <div className="product w-full flex flex-col">
                    <div
                      className="w-full h-24 xxs:h-32 xs:h-44 sm:h-52 rounded-md my-[10px]"
                      style={{
                        backgroundImage: "url(https://online-qr-generator.com/uploads/menu/645d593b275ff_1_productImages_vegetable-salad.jpeg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                    </div>
                    <div className="flex flex-row justify-between text-black text-lg xs:text-xl font-bold">
                      <span className="text-left">{t('menu.section_1_product_name')}</span>
                      <span className="text-right">12</span>
                    </div>
                    <div className="flex flex-col text-left mt-[5px] mb-[25px] space-y-[5px] text-sm">
                      <p>Salat</p>
                      <p>{t('menu.section_1_product_desc')}</p>
                    </div>
                    <div className="w-full bg-[#FDE6DD] grid sm:grid-cols-10 xs:grid-cols-5 xxs:grid-cols-3 grid-cols-2 justify-center justify-items-center items-center gap-2 rounded-lg px-[12px] py-[10px] mb-[5px]">
                      <img src="/images/allergens-icons/cereals.svg" className="w-[35px] cursor-pointer" alt=""/>
                      <img src="/images/allergens-icons/crustaceans.svg" className="w-[35px] cursor-pointer" alt=""/>
                    </div>
                    <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]" style={{ marginTop: "10px", marginBottom: "10px" }}></div>
                  </div>
                </div>
                <div id="2" ref={ref => (sectionRefs.current[2] = ref)} className="bg-white mb-4 pb-[20px] w-full flex flex-col justify-center items-center my-[30px] px-[20px] border-[2px] rounded-lg border-[#EAEAEC] scroll-mt-[130px]">
                  <h1 className="text-2xl font-medium text-black mt-[15px] mb-[6px]">
                  {t('menu.section_2')}
                  </h1>
                  <h2 className="text-md text-black mb-[5px]"> </h2>
                  <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]"></div>
                  <div className="product w-full flex flex-col">
                    <div
                      className="w-full h-24 xxs:h-32 xs:h-44 sm:h-52 rounded-md my-[10px]"
                      style={{
                        backgroundImage: "url(https://online-qr-generator.com/uploads/menu/645d593b275ff_78_productImages_Orange.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                    </div>
                    <div className="flex flex-row justify-between text-black text-lg xs:text-xl font-bold">
                      <span className="text-left">{t('menu.section_2_product_name')}</span>
                      <span className="text-right">8</span>
                    </div>
                    <div className="flex flex-col text-left mt-[5px] mb-[25px] space-y-[5px] text-sm">
                      <p>Orangensaft</p>
                      <p>{t('menu.section_2_product_desc')}</p>
                    </div>
                    <div className="w-full bg-[#FDE6DD] grid sm:grid-cols-10 xs:grid-cols-5 xxs:grid-cols-3 grid-cols-2 justify-center justify-items-center items-center gap-2 rounded-lg px-[12px] py-[10px] mb-[5px]">
                      <img src="/images/allergens-icons/peanuts.svg" className="w-[35px] cursor-pointer" alt=""/>
                      <img src="/images/allergens-icons/soy.svg" className="w-[35px] cursor-pointer" alt=""/>
                    </div>
                    <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]" style={{ marginTop: "10px", marginBottom: "10px" }}></div>
                  </div>
                </div>
                <div id="3" ref={ref => (sectionRefs.current[3] = ref)} className="bg-white mb-4 pb-[20px] w-full flex flex-col justify-center items-center my-[30px] px-[20px] border-[2px] rounded-lg border-[#EAEAEC] scroll-mt-[130px]">
                  <h1 className="text-2xl font-medium text-black mt-[15px] mb-[6px]">
                  {t('menu.section_3')}
                  </h1>
                  <h2 className="text-md text-black mb-[5px]"> </h2>
                  <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]"></div>
                  <div className="product w-full flex flex-col">
                    <div
                      className="w-full h-24 xxs:h-32 xs:h-44 sm:h-52 rounded-md my-[10px]"
                      style={{
                        backgroundImage: "url(https://online-qr-generator.com/uploads/menu/645d593b275ff_8_productImages_donuts.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                    </div>
                    <div className="flex flex-row justify-between text-black text-lg xs:text-xl font-bold">
                      <span className="text-left">{t('menu.section_3_product_name')}</span>
                      <span className="text-right">6</span>
                    </div>
                    <div className="flex flex-col text-left mt-[5px] mb-[25px] space-y-[5px] text-sm">
                      <p>Glasierter Hefe-Donut</p>
                      <p>{t('menu.section_3_product_desc')}</p>
                    </div>
                    <div className="w-full bg-[#FDE6DD] grid sm:grid-cols-10 xs:grid-cols-5 xxs:grid-cols-3 grid-cols-2 justify-center justify-items-center items-center gap-2 rounded-lg px-[12px] py-[10px] mb-[5px]">
                      <img src="/images/allergens-icons/milk.svg" className="w-[35px] cursor-pointer" alt=""/>
                      <img src="/images/allergens-icons/fruits.svg" className="w-[35px] cursor-pointer" alt=""/>
                    </div>
                    <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]" style={{ marginTop: "10px", marginBottom: "10px" }}></div>
                  </div>
                </div>
                <div id="4" ref={ref => (sectionRefs.current[4] = ref)} className="bg-white mb-4 pb-[20px] w-full flex flex-col justify-center items-center my-[30px] px-[20px] border-[2px] rounded-lg border-[#EAEAEC] scroll-mt-[130px]">
                  <h1 className="text-2xl font-medium text-black mt-[15px] mb-[6px]">
                  {t('menu.section_4')}
                  </h1>
                  <h2 className="text-md text-black mb-[5px]"> </h2>
                  <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]"></div>
                  <div className="product w-full flex flex-col">
                    <div
                      className="w-full h-24 xxs:h-32 xs:h-44 sm:h-52 rounded-md my-[10px]"
                      style={{
                        backgroundImage: "url(https://online-qr-generator.com/uploads/menu/645d593b275ff_139_productImages_fish.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                    </div>
                    <div className="flex flex-row justify-between text-black text-lg xs:text-xl font-bold">
                      <span className="text-left">{t('menu.section_4_product_name')}</span>
                      <span className="text-right">45</span>
                    </div>
                    <div className="flex flex-col text-left mt-[5px] mb-[25px] space-y-[5px] text-sm">
                      <p>Gebratener Lachs mit Walnuss</p>
                      <p>{t('menu.section_4_product_desc')}</p>
                    </div>
                    <div className="w-full bg-[#FDE6DD] grid sm:grid-cols-10 xs:grid-cols-5 xxs:grid-cols-3 grid-cols-2 justify-center justify-items-center items-center gap-2 rounded-lg px-[12px] py-[10px] mb-[5px]">
                      <img src="/images/allergens-icons/eggs.svg" className="w-[35px] cursor-pointer" alt=""/>
                      <img src="/images/allergens-icons/fish.svg" className="w-[35px] cursor-pointer" alt=""/>
                    </div>
                    <div className="w-full h-[2px] bg-[#F2F2F2] rounded-full my-[10px]" style={{ marginTop: "10px", marginBottom: "10px" }}></div>
                  </div>
                </div>
                <div className="w-full bg-[#FDE6DD] grid sm:grid-cols-5 xs:grid-cols-3 grid-cols-2 justify-center items-center gap-3 rounded-xl p-[20px] mb-[20px]">
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/cereals.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.cereals')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/crustaceans.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.crustaceans')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/milk.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.milk')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/fruits.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.fruits')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/peanuts.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.peanuts')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/soy.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.soy')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/eggs.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.eggs')}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-[6px] cursor-pointer space-y-[5px] ">
                    <img src="/images/allergens-icons/fish.svg" className="w-[40px]" alt=""/>
                    <span>{t('menu.fish')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
            <svg className="hidden md:block top-0 absolute" width="2080" height="379" viewBox="0 0 2080 379" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H2080V354.388C2080 354.388 1754 300.776 1040 354.388C326 408 0 354.388 0 354.388V0Z" fill="#FF6228" />
            </svg>
            <svg className="md:hidden top-0 absolute" width="770" height="364" viewBox="0 0 770 364" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H770V354.616C770 354.616 648.853 333.501 385 354.616C121.147 375.73 0 354.616 0 354.616V0Z" fill="#FF6228" />
            </svg>
          </div>
          <div
            className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[16px]"
          >
            <img src="/images/images/new/tastyfood.png" className="w-[120px] rounded-[5px]" width="240" height="240" alt=""/>
            <div className="mt-[15px] xs:mt-[31px]">
              <h1 className="text-white text-xl xs:text-2xl mb-[10px] xs:mb-[14px] font-bold">TastyFood</h1>
              <h2 className="text-white text-sm xs:text-[15px]">{t('menu.restaurant_desc')}</h2>
            </div>
            <div className="my-[20px] w-full flex flex-col items-start justify-center space-y-[10px] xs:space-y-[15px]">
              <a
                onClick={() => {
                  setVisible(true);
                  handleLinkClick(1);
                }}
                href="#1"
                className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
              >
                <div className="flex flex-row justify-between items-center px-[12px] xs:px-[24px] py-[18px] rounded-[4px]">
                  <div className="flex flex-row items-center">
                    <p className="text-lg xs:text-xl text-[#131D29] font-medium">{t('menu.section_1')}</p>
                  </div>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                    <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
                  </svg>
                </div>
              </a>
              <a
                onClick={() => {
                  setVisible(true);
                  handleLinkClick(2);
                }}
                href="#2"
                className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
              >
                <div className="flex flex-row justify-between items-center px-[12px] xs:px-[24px] py-[18px] rounded-[4px]">
                  <div className="flex flex-row items-center">
                    <p className="text-lg xs:text-xl text-[#131D29] font-medium">{t('menu.section_2')}</p>
                  </div>
                  <svg width="24" className="rtl:rotate-180" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                    <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
                  </svg>
                </div>
              </a>
              <a
                onClick={() => {
                  setVisible(true);
                  handleLinkClick(3);
                }}
                href="#3"
                className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
              >
                <div className="flex flex-row justify-between items-center px-[12px] xs:px-[24px] py-[18px] rounded-[4px]">
                  <div className="flex flex-row items-center">
                    <p className="text-lg xs:text-xl text-[#131D29] font-medium">{t('menu.section_3')}</p>
                  </div>
                  <svg width="24" className="rtl:rotate-180" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                    <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
                  </svg>
                </div>
              </a>
              <a
                onClick={() => {
                  setVisible(true);
                  handleLinkClick(4);
                }}
                href="#4"
                className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
              >
                <div className="flex flex-row justify-between items-center px-[12px] xs:px-[24px] py-[18px] rounded-[4px]">
                  <div className="flex flex-row items-center">
                    <p className="text-lg xs:text-xl text-[#131D29] font-medium">{t('menu.section_4')}</p>
                  </div>
                  <svg width="24" className="rtl:rotate-180" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                    <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="w-full grid grid-cols-4 justify-center items-center gap-3 p-[20px] mb-[20px] bg-white shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/cereals.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/crustaceans.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/milk.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/fruits.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/peanuts.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/soy.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/eggs.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
              <div className="flex items-center justify-center">
                <img src="/images/allergens-icons/fish.svg" className="w-[53px] mb-[10px]" alt=""/>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
              <div className="flex flex-row justify-start items-center space-x-[8px] xs:space-x-[17px] w-full mb-[10px]">
                <div className="w-[35px] xs:w-[44px] h-[35px] xs:h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="#767C83" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4311 15.6925C15.3001 15.6925 15.1681 15.6585 15.0471 15.5875L11.2771 13.3385C11.0511 13.2025 10.9111 12.9575 10.9111 12.6935V7.84546C10.9111 7.43146 11.2471 7.09546 11.6611 7.09546C12.0761 7.09546 12.4111 7.43146 12.4111 7.84546V12.2675L15.8161 14.2975C16.1711 14.5105 16.2881 14.9705 16.0761 15.3265C15.9351 15.5615 15.6861 15.6925 15.4311 15.6925Z" fill="#767C83" />
                  </svg>
                </div>
                <p className="font-medium text-sm xs:text-base sm:text-xl text-black">{t('menu.open_hours')} - <span className="text-[#FE4256]">{t('menu.closed')}</span></p>
              </div>
              <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
              <div className="flex flex-col items-center justify-center text-[10px] xs:text-sm sm:text-base w-full px-[10px] mb-[10px] mt-[20px] space-y-[10px]">
                <div className="flex flex-row items-start justify-between w-full">
                  <p className="text-black">{t('menu.saturday')} :</p>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#767C83]">10:00 am  -  02:00 pm</p>
                    <p className="text-[#767C83]">05:00 pm  -  11:00 pm</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>

                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-black">{t('menu.sunday')} :</p>
                  <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
                </div>
                <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>

                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-black">{t('menu.monday')} :</p>
                  <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
                </div>
                <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>

                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-black">{t('menu.tuesday')} :</p>
                  <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
                </div>
                <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>

                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-black">{t('menu.wednesday')} :</p>
                  <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
                </div>
                <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>

                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-black">{t('menu.thursday')} :</p>
                  <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-start justify-center mb-[20px]">
              <p className="text-lg xs:text-xl text-[#131D29] font-medium mb-[10px]">{t('menu.social_network')}</p>
              <div className="w-full space-y-[8px] xs:space-y-[15px]">
                {/* Facebook */}
                <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
                  <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                    <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                      <img src="/images/social/facebook.png" width="132" height="132" className="w-[44px]" alt=""/>
                      <p className="text-base xs:text-xl text-[#131D29] font-medium">Facebook</p>
                    </div>
                    <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                      <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                    </svg>
                  </div>
                </div>
                {/* Instagram */}
                <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
                  <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                    <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                      <img src="/images/social/instagram.webp" width="132" height="132" className="w-[44px]" alt=""/>
                      <p className="text-base xs:text-xl text-[#131D29] font-medium">Instagram</p>
                    </div>
                    <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                      <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                    </svg>
                  </div>
                </div>
                {/* Google */}
                <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
                  <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                    <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                      <img src="/images/social/google.png" width="132" height="132" className="w-[44px]" alt=""/>
                      <p className="text-base xs:text-xl text-[#131D29] font-medium">Google</p>
                    </div>
                    <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                      <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                    </svg>
                  </div>
                </div>
                {/* Twitter */}
                <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
                  <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                    <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                      <img src="/images/social/twitter.png" width="132" height="132" className="w-[44px]" alt=""/>
                      <p className="text-base xs:text-xl text-[#131D29] font-medium">X</p>
                    </div>
                    <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                      <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                    </svg>
                  </div>
                </div>
                {/* Tiktok */}
                <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
                  <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                    <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                      <img src="/images/ListOfLinks/tiktok.png" width="132" height="132" className="w-[44px]" alt=""/>
                      <p className="text-base xs:text-xl text-[#131D29] font-medium">TikTok</p>
                    </div>
                    <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                      <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
              <div className="flex flex-row justify-start items-center space-x-[17px] w-full mb-[10px]">
                <div className="w-[44px] h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.25 1.5C1.5 1.5 1.5 1.708 1.5 4.25V4.275C1.5 5.382 1.5 6.182 1.771 6.52C2.036 6.848 2.823 7 4.25 7C5.677 7 6.464 6.847 6.729 6.519C7 6.182 7 5.382 7 4.274C7 1.708 7 1.5 4.25 1.5ZM4.25 8.5C2.564 8.5 1.299 8.323 0.604 7.46C0 6.711 0 5.689 0 4.275L0.75 4.25H0C0 1.38 0.181 0 4.25 0C8.319 0 8.5 1.38 8.5 4.25C8.5 5.688 8.5 6.711 7.896 7.46C7.201 8.323 5.936 8.5 4.25 8.5Z" fill="#767C83" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.25 1.5C12.5 1.5 12.5 1.708 12.5 4.25V4.275C12.5 5.382 12.5 6.182 12.771 6.52C13.036 6.848 13.823 7 15.25 7C16.677 7 17.464 6.847 17.729 6.519C18 6.182 18 5.382 18 4.274C18 1.708 18 1.5 15.25 1.5ZM15.25 8.5C13.564 8.5 12.299 8.323 11.604 7.46C11 6.711 11 5.689 11 4.275L11.75 4.25H11C11 1.38 11.181 0 15.25 0C19.319 0 19.5 1.38 19.5 4.25C19.5 5.688 19.5 6.711 18.896 7.46C18.201 8.323 16.936 8.5 15.25 8.5Z" fill="#767C83" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.25 12.5C1.5 12.5 1.5 12.708 1.5 15.25V15.275C1.5 16.382 1.5 17.182 1.771 17.52C2.036 17.848 2.823 18 4.25 18C5.677 18 6.464 17.847 6.729 17.519C7 17.182 7 16.382 7 15.274C7 12.708 7 12.5 4.25 12.5ZM4.25 19.5C2.564 19.5 1.299 19.323 0.604 18.46C0 17.711 0 16.689 0 15.275L0.75 15.25H0C0 12.38 0.181 11 4.25 11C8.319 11 8.5 12.38 8.5 15.25C8.5 16.688 8.5 17.711 7.896 18.46C7.201 19.323 5.936 19.5 4.25 19.5Z" fill="#767C83" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.25 12.5C12.5 12.5 12.5 12.708 12.5 15.25V15.275C12.5 16.382 12.5 17.182 12.771 17.52C13.036 17.848 13.823 18 15.25 18C16.677 18 17.464 17.847 17.729 17.519C18 17.182 18 16.382 18 15.274C18 12.708 18 12.5 15.25 12.5ZM15.25 19.5C13.564 19.5 12.299 19.323 11.604 18.46C11 17.711 11 16.689 11 15.275L11.75 15.25H11C11 12.38 11.181 11 15.25 11C19.319 11 19.5 12.38 19.5 15.25C19.5 16.688 19.5 17.711 18.896 18.46C18.201 19.323 16.936 19.5 15.25 19.5Z" fill="#767C83" />
                  </svg>
                </div>
                <p className="font-medium text-lg xs:text-xl text-black">{t('menu.contact')}</p>
              </div>
              <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
              <div className="flex flex-col items-center justify-center w-full xs:px-[10px] mb-[10px] mt-[20px] space-y-[15px] xs:space-y-[25px]">
                {/* Name */}
                <div className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer">
                  <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_797_12711" maskUnits="userSpaceOnUse" x="3" y="10" width="12" height="7">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 10.8721H14.8799V16.4026H3V10.8721Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_797_12711)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.94075 11.9971C5.745 11.9971 4.125 12.5461 4.125 13.6298C4.125 14.7233 5.745 15.2776 8.94075 15.2776C12.1357 15.2776 13.755 14.7286 13.755 13.6448C13.755 12.5513 12.1357 11.9971 8.94075 11.9971ZM8.94075 16.4026C7.4715 16.4026 3 16.4026 3 13.6298C3 11.1578 6.39075 10.8721 8.94075 10.8721C10.41 10.8721 14.88 10.8721 14.88 13.6448C14.88 16.1168 11.49 16.4026 8.94075 16.4026Z" fill="#767C83" />
                      </g>
                      <mask id="mask1_797_12711" maskUnits="userSpaceOnUse" x="4" y="1" width="9" height="9">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.95703 1.5H12.9221V9.46395H4.95703V1.5Z" fill="white" />
                      </mask>
                      <g mask="url(#mask1_797_12711)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.9403 2.57076C7.33455 2.57076 6.02805 3.87651 6.02805 5.48226C6.0228 7.08276 7.31955 8.38776 8.91855 8.39376L8.9403 8.92926V8.39376C10.5453 8.39376 11.8511 7.08726 11.8511 5.48226C11.8511 3.87651 10.5453 2.57076 8.9403 2.57076ZM8.9403 9.46401H8.91631C6.72481 9.45726 4.94955 7.67001 4.95705 5.48001C4.95705 3.28626 6.74355 1.49976 8.9403 1.49976C11.1363 1.49976 12.9221 3.28626 12.9221 5.48226C12.9221 7.67826 11.1363 9.46401 8.9403 9.46401Z" fill="#767C83" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-col text-left rtl:text-right">
                    <p className="text-xs text-[#767C83]">{t('menu.name')}</p>
                    <p className="text-sm xs:text-base text-black font-medium break-all">TastyFood</p>
                  </div>
                </div>
                {/* website */}
                <div className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer">
                  <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z" fill="#767C83" />
                      <path d="M6.74969 16.3125H5.99969C5.69219 16.3125 5.43719 16.0575 5.43719 15.75C5.43719 15.4425 5.67719 15.195 5.98469 15.1875C4.80719 11.1675 4.80719 6.8325 5.98469 2.8125C5.67719 2.805 5.43719 2.5575 5.43719 2.25C5.43719 1.9425 5.69219 1.6875 5.99969 1.6875H6.74969C6.92969 1.6875 7.10219 1.7775 7.20719 1.92C7.31219 2.07 7.34219 2.2575 7.28219 2.43C5.87219 6.6675 5.87219 11.3325 7.28219 15.5775C7.34219 15.75 7.31219 15.9375 7.20719 16.0875C7.10219 16.2225 6.92969 16.3125 6.74969 16.3125Z" fill="#767C83" />
                      <path d="M11.2498 16.3125C11.1898 16.3125 11.1298 16.305 11.0698 16.2825C10.7773 16.185 10.6123 15.8625 10.7173 15.57C12.1273 11.3325 12.1273 6.66751 10.7173 2.42251C10.6198 2.13001 10.7773 1.80751 11.0698 1.71001C11.3698 1.61251 11.6848 1.77001 11.7823 2.06251C13.2748 6.53251 13.2748 11.4525 11.7823 15.915C11.7073 16.1625 11.4823 16.3125 11.2498 16.3125Z" fill="#767C83" />
                      <path d="M9 12.9001C6.9075 12.9001 4.8225 12.6076 2.8125 12.0151C2.805 12.3151 2.5575 12.5626 2.25 12.5626C1.9425 12.5626 1.6875 12.3076 1.6875 12.0001V11.2501C1.6875 11.0701 1.7775 10.8976 1.92 10.7926C2.07 10.6876 2.2575 10.6576 2.43 10.7176C6.6675 12.1276 11.34 12.1276 15.5775 10.7176C15.75 10.6576 15.9375 10.6876 16.0875 10.7926C16.2375 10.8976 16.32 11.0701 16.32 11.2501V12.0001C16.32 12.3076 16.065 12.5626 15.7575 12.5626C15.45 12.5626 15.2025 12.3226 15.195 12.0151C13.1775 12.6076 11.0925 12.9001 9 12.9001Z" fill="#767C83" />
                      <path d="M15.7498 7.31252C15.6898 7.31252 15.6298 7.30502 15.5698 7.28252C11.3323 5.87252 6.65984 5.87252 2.42234 7.28252C2.12234 7.38002 1.80734 7.22252 1.70984 6.93002C1.61984 6.63002 1.77734 6.31502 2.06984 6.21752C6.53984 4.72502 11.4598 4.72502 15.9223 6.21752C16.2148 6.31502 16.3798 6.63752 16.2748 6.93002C16.2073 7.16252 15.9823 7.31252 15.7498 7.31252Z" fill="#767C83" />
                    </svg>
                  </div>
                  <div className="flex-col text-left truncate rtl:text-right">
                    <p className="text-xs text-[#767C83]">{t('menu.website')}</p>
                    <p className="text-sm xs:text-base text-[#0079FF] font-medium truncate">www.tastyfood.com</p>
                  </div>
                </div>
                {/* phone */}
                <div className="flex flex-row items-center space-x-[10px] xs:space-x-[16px] w-full cursor-pointer">
                  <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_797_11795" maskUnits="userSpaceOnUse" x="1" y="1" width="16" height="16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1.50024H16.8747V16.8749H1.5V1.50024Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_797_11795)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.26931 3.79562C3.27081 3.79562 3.23331 3.83462 3.18606 3.88112C3.00456 4.05737 2.62881 4.42412 2.62506 5.19137C2.61906 6.26462 3.32481 8.25737 6.72306 11.6549C10.1056 15.0359 12.0953 15.7499 13.1708 15.7499H13.1866C13.9538 15.7461 14.3198 15.3696 14.4968 15.1889C14.5508 15.1334 14.5943 15.0929 14.6251 15.0674C15.3721 14.3159 15.7546 13.7564 15.7508 13.3979C15.7456 13.0319 15.2903 12.5991 14.6611 12.0006C14.4608 11.8101 14.2433 11.6031 14.0138 11.3736C13.4191 10.7804 13.1243 10.8816 12.4763 11.1096C11.5801 11.4239 10.3501 11.8514 8.43906 9.93962C6.52506 8.02712 6.95331 6.79862 7.26681 5.90237C7.49331 5.25437 7.59681 4.95887 7.00131 4.36337C6.76806 4.13087 6.55881 3.91037 6.36606 3.70787C5.77131 3.08237 5.34231 2.63012 4.97856 2.62487H4.97256C4.61331 2.62487 4.05531 3.00887 3.26556 3.79862C3.26781 3.79637 3.26856 3.79562 3.26931 3.79562ZM13.1716 16.8749C11.3026 16.8749 8.86581 15.3869 5.92806 12.4506C2.97906 9.50237 1.48881 7.05812 1.50006 5.18537C1.50681 3.94787 2.15556 3.31412 2.39931 3.07637C2.41206 3.06062 2.45556 3.01787 2.47056 3.00287C3.54606 1.92662 4.27131 1.49162 4.99281 1.49987C5.83056 1.51112 6.42681 2.13812 7.18131 2.93237C7.36806 3.12887 7.57056 3.34262 7.79631 3.56762C8.89131 4.66262 8.57931 5.55587 8.32881 6.27287C8.05581 7.05512 7.81956 7.73012 9.23406 9.14462C10.6501 10.5591 11.3251 10.3229 12.1043 10.0476C12.8221 9.79712 13.7131 9.48362 14.8096 10.5786C15.0316 10.8006 15.2423 11.0009 15.4366 11.1861C16.2346 11.9444 16.8646 12.5436 16.8751 13.3836C16.8841 14.0999 16.4491 14.8296 15.3751 15.9044L14.8996 15.5819L15.3016 15.9749C15.0638 16.2186 14.4308 16.8681 13.1926 16.8749H13.1716Z" fill="#767C83" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-col text-left rtl:text-right">
                    <p className="text-xs text-[#767C83]">{t('menu.phone')}</p>
                    <p className="text-sm xs:text-base text-black font-medium break-all">555-100-1000</p>
                  </div>
                </div>
                {/* email */}
                <div className="flex flex-row items-center space-x-[10px] xs:space-x-[16px] w-full cursor-pointer">
                  <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.83279 10.0986C8.33104 10.0986 7.83079 9.93287 7.41229 9.60137L4.04854 6.88937C3.80629 6.69437 3.76879 6.33962 3.96304 6.09812C4.15879 5.85737 4.51279 5.81912 4.75429 6.01337L8.11504 8.72237C8.53729 9.05687 9.13204 9.05687 9.55729 8.71937L12.8843 6.01487C13.1258 5.81762 13.4798 5.85512 13.6763 6.09662C13.872 6.33737 13.8353 6.69137 13.5945 6.88787L10.2615 9.59687C9.84004 9.93137 9.33604 10.0986 8.83279 10.0986Z" fill="#767C83" />
                      <mask id="mask0_797_11802" maskUnits="userSpaceOnUse" x="0" y="1" width="17" height="16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.75 1.5H16.8749V16.125H0.75V1.5Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_797_11802)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.12925 15H12.4943C12.4958 14.9985 12.5017 15 12.5063 15C13.362 15 14.121 14.694 14.703 14.1128C15.3787 13.44 15.75 12.4732 15.75 11.391V6.24C15.75 4.14525 14.3805 2.625 12.4943 2.625H5.13075C3.2445 2.625 1.875 4.14525 1.875 6.24V11.391C1.875 12.4732 2.247 13.44 2.922 14.1128C3.504 14.694 4.26375 15 5.11875 15H5.12925ZM5.1165 16.125C3.95925 16.125 2.92575 15.705 2.12775 14.91C1.239 14.0235 0.75 12.774 0.75 11.391V6.24C0.75 3.53775 2.63325 1.5 5.13075 1.5H12.4943C14.9918 1.5 16.875 3.53775 16.875 6.24V11.391C16.875 12.774 16.386 14.0235 15.4972 14.91C14.7 15.7042 13.6658 16.125 12.5063 16.125H12.4943H5.13075H5.1165Z" fill="#767C83" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-col text-left truncate rtl:text-right">
                    <p className="text-xs text-[#767C83]">{t('menu.email')}</p>
                    <p className="text-sm xs:text-base text-black font-medium truncate">TastyFood@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuPreview;
