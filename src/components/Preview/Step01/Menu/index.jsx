import React from "react";
import { useEffect, useState, useRef } from "react";
import "../../index.css";
import useUpdateDomTitle from "../../../../utils/updateDomTitle";
import useLanguage from "../../../../utils/useLanguage";
import { useAdjustZoom } from "../../../../utils/utils";

let MenuPreview = () => {
  const [activeLink, setActiveLink] = useState('');

  const t = useLanguage()

  useUpdateDomTitle('Online QR Generator - Scanned Page | Menu',"#FF6228");

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


  return (
    <>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
            {/* <svg className="hidden md:block top-0 absolute" width="2080" height="379" viewBox="0 0 2080 379" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H2080V354.388C2080 354.388 1754 300.776 1040 354.388C326 408 0 354.388 0 354.388V0Z" fill="#FF6228" />
            </svg>
            <svg className="block md:hidden top-0 absolute" width="770" height="364" viewBox="0 0 770 364" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H770V354.616C770 354.616 648.853 333.501 385 354.616C121.147 375.73 0 354.616 0 354.616V0Z" fill="#FF6228" />
            </svg> */}
            <div
              className={"qr-backdrop menu-with-image menu-with-image-bigscreen"}
              style={{'--height':'364px'}}
              id="color_palette"
            >
              <svg
                width="375"
                height="526"
                viewBox="0 0 375 526"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="375" height="526" className="duration-500" fill="#FF6228"></rect>
              </svg>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[16px]" 
          >
            <img src="/images/images/new/tastyfood.webp" className="w-[120px] rounded-[5px]" width="240" height="240" alt=""/>
            <div className="mt-[15px] xs:mt-[31px]">
              <h1 className="text-white text-xl xs:text-2xl mb-[10px] xs:mb-[14px] font-bold">TastyFood</h1>
              <h2 className="text-white text-sm xs:text-[15px]">{t('menu.restaurant_desc')}</h2>
            </div>
            <div className="my-[20px] w-full flex flex-col items-start justify-center space-y-[10px] xs:space-y-[15px]">
              <a
                href="#1"
                className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
              >
                <div className="flex flex-row justify-between items-center px-[12px] xs:px-[24px] py-[18px] rounded-[4px]">
                  <div className="flex flex-row items-center">
                    <p className="text-lg xs:text-xl text-[#131D29] font-medium">{t('menu.section_1')}</p>
                  </div>
                  <svg width="24" className="rtl:rotate-180" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                    <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
                  </svg>
                </div>
              </a>
              <a

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

          </div>
        </div>
    </>
  );
};

let MenuShowcase = () => {
  const t = useLanguage()
  const container = useAdjustZoom();

  return (
    <div className="flex flex-col justify-center items-center" ref={container}>
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="block md:hidden top-0 absolute" width="770" height="270" viewBox="0 0 770 364" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V354.616C770 354.616 648.853 333.501 385 354.616C121.147 375.73 0 354.616 0 354.616V0Z" fill="#FF6228" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[16px]" >
        <img src="/images/images/new/tastyfood.webp" className="w-[88px] rounded-[5px]" width="240" height="240" alt=""/>
        <div className="mt-[15px] xs:mt-[31px]">
          <h1 className="text-white text-lg mb-[10px] font-bold">TastyFood</h1>
          <h2 className="text-white text-xs">{t('menu.restaurant_desc')}</h2>
        </div>
        <div className="my-[20px] w-full flex flex-col items-start justify-center space-y-[10px]">
          <a
            href="#1"
            className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
          >
            <div className="flex flex-row justify-between items-center px-[12px] py-[9px] rounded-[4px]">
              <div className="flex flex-row items-center">
                <p className="text-[15px] text-[#131D29] font-medium">{t('menu.section_1')}</p>
              </div>
              <svg width="18" height="19" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
              </svg>
            </div>
          </a>
          <a

            href="#2"
            className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
          >
            <div className="flex flex-row justify-between items-center px-[12px] py-[9px] rounded-[4px]">
              <div className="flex flex-row items-center">
                <p className="text-[15px] text-[#131D29] font-medium">{t('menu.section_2')}</p>
              </div>
              <svg width="18" height="19" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
              </svg>
            </div>
          </a>
          <a
            href="#3"
            className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
          >
            <div className="flex flex-row justify-between items-center px-[12px] py-[9px] rounded-[4px]">
              <div className="flex flex-row items-center">
                <p className="text-[15px] text-[#131D29] font-medium">{t('menu.section_3')}</p>
              </div>
              <svg width="18" height="19" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="#767C83" />
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="#767C83" />
              </svg>
            </div>
          </a>
          <a

            href="#4"
            className="flex flex-col w-full cursor-pointer bg-white rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
          >
            <div className="flex flex-row justify-between items-center px-[12px] py-[9px] rounded-[4px]">
              <div className="flex flex-row items-center">
                <p className="text-[15px] text-[#131D29] font-medium">{t('menu.section_4')}</p>
              </div>
              <svg width="18" height="19" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
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

      </div>
    </div>
  );
};

export {MenuPreview,MenuShowcase};
