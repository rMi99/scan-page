import {React, useEffect, useState} from "react";
import "../index.css";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import WelcomeScreen from "../common/WelcomeScreen";
import ShareOrCopy from "../../utils/share";
import useScroller from "../../utils/Scroller";



let Facebook = ({ qrData }) => {
  useUpdateDomTitle('Online QR Generator - Scanned Page | Facebook',"#0866FF");
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const data = qrData

  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen])

  useScroller(data);
  
  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[600px] relative">
        <div className="flex items-center w-full">
          {data?.cover ? (
            <>
            {/^#[0-9a-fA-F]{6}$/.test(data.cover) ? (
              <div className="w-full h-56" style={{ backgroundColor: data.cover }} />
            ) : (
              <img src={data.cover} className="w-full" alt="cover" />
            )}
            </>
          ) : (
            <img src="/images/images/new/fb_cover.png" className="w-full" alt="" />
          )}
          <div 
            className="absolute top-10 xsm:top-12 sm:top-20 right-4 w-[38px] h-[38px] xsm:w-[48px] xsm:h-[48px] bg-white/[.15] rounded-[4px] mb-[18px] xs:mb-[25px] border-[1px] border-white/[1] cursor-pointer flex items-center justify-center"
            onClick={()=>ShareOrCopy(data)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div className="flex items-start w-full px-[20px] -mt-[50px] xxs:-mt-[60px] xs:-mt-[75px] sm:-mt-[110px]">
        {data?.profileImg ? (
          <div style={{backgroundImage: `url(${data.profileImg})`, backgroundSize: "cover" }} className="w-[100px] xxs:w-[120px] xs:w-[150px] sm:w-[220px] h-[100px]  xxs:h-[120px] xs:h-[150px] sm:h-[220px] rounded-full" alt="" />
        ):(
          <img src="images/images/new/fb_pic.webp" className="w-[100px] xxs:w-[120px] xs:w-[150px] sm:w-[220px] rounded-full" alt="" />
        )}
        </div>
        {data?.title || data?.description ?(
          <div className="flex flex-col w-full px-[20px] mt-6 mb-10">
            {data?.title? (
              <p className="text-black font-bold text-start text-base xxs:text-lg xs:text-2xl sm:text-3xl mb-3" style={{fontFamily: data?.font_title}}>{data?.title}</p>
            ):(
              <></>
            )}
            {data?.description? (
              <p className=" text-[#767C83] text-start text-xs xxs:text-sm xs:text-base mb-3" style={{fontFamily: data?.font_title}}>{data?.description}</p>
            ):(
              <></>
            )}
          </div>
        ):(
          <div className="my-3"></div>
        )}
        {data?.pageUrl? (
          <div className="flex flex-col w-full px-[20px] space-y-[12px] mb-5">
            {data.pageUrl === "#" ? (
              <div className="flex items-center justify-center py-4 rounded-[4px] space-x-[4px] bg-[#0866FF] cursor-pointer">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.2882 22.9975H12.4882C11.9282 22.9975 10.7082 22.8275 10.0582 22.1775L7.02816 19.8375L7.94816 18.6475L11.0482 21.0475C11.2982 21.2875 11.9282 21.4875 12.4882 21.4875H16.2882C17.1882 21.4875 18.1582 20.7675 18.3582 19.9575L20.7782 12.6075C20.9382 12.1675 20.9082 11.7675 20.6982 11.4775C20.4782 11.1675 20.0782 10.9875 19.5882 10.9875H15.5882C15.0682 10.9875 14.5882 10.7675 14.2582 10.3875C13.9182 9.99745 13.7682 9.47745 13.8482 8.93745L14.3482 5.72745C14.4682 5.16745 14.0882 4.53745 13.5482 4.35745C13.0582 4.17745 12.4282 4.43745 12.2082 4.75745L8.10816 10.8575L6.86816 10.0275L10.9682 3.92745C11.5982 2.98745 12.9782 2.53745 14.0582 2.94745C15.3082 3.35745 16.1082 4.73745 15.8282 6.01745L15.3382 9.16745C15.3282 9.23745 15.3282 9.33745 15.3982 9.41745C15.4482 9.46745 15.5182 9.49745 15.5982 9.49745H19.5982C20.5782 9.49745 21.4282 9.90745 21.9282 10.6175C22.4182 11.3075 22.5182 12.2175 22.1982 13.0975L19.8082 20.3775C19.4382 21.8275 17.8982 22.9975 16.2882 22.9975Z" fill="white"/>
                  <path d="M5.3877 21.8974H4.3877C2.5377 21.8974 1.6377 21.0274 1.6377 19.2474V9.44736C1.6377 7.66736 2.5377 6.79736 4.3877 6.79736H5.3877C7.2377 6.79736 8.1377 7.66736 8.1377 9.44736V19.2474C8.1377 21.0274 7.2377 21.8974 5.3877 21.8974ZM4.3877 8.29736C3.2977 8.29736 3.1377 8.55736 3.1377 9.44736V19.2474C3.1377 20.1374 3.2977 20.3974 4.3877 20.3974H5.3877C6.4777 20.3974 6.6377 20.1374 6.6377 19.2474V9.44736C6.6377 8.55736 6.4777 8.29736 5.3877 8.29736H4.3877Z" fill="white"/>
                </svg>
                <p className="text-white font-medium text-[10px] xxs:text-sm xs:text-base sm:text-lg" style={{fontFamily: data?.font_title}}>Like 5.8 k</p>
              </div>
            ):(
              <a href={data.pageUrl} target="_blank" rel="noreferrer">
                <div className="flex items-center justify-center py-4 rounded-[4px] space-x-[4px] bg-[#0866FF]">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2882 22.9975H12.4882C11.9282 22.9975 10.7082 22.8275 10.0582 22.1775L7.02816 19.8375L7.94816 18.6475L11.0482 21.0475C11.2982 21.2875 11.9282 21.4875 12.4882 21.4875H16.2882C17.1882 21.4875 18.1582 20.7675 18.3582 19.9575L20.7782 12.6075C20.9382 12.1675 20.9082 11.7675 20.6982 11.4775C20.4782 11.1675 20.0782 10.9875 19.5882 10.9875H15.5882C15.0682 10.9875 14.5882 10.7675 14.2582 10.3875C13.9182 9.99745 13.7682 9.47745 13.8482 8.93745L14.3482 5.72745C14.4682 5.16745 14.0882 4.53745 13.5482 4.35745C13.0582 4.17745 12.4282 4.43745 12.2082 4.75745L8.10816 10.8575L6.86816 10.0275L10.9682 3.92745C11.5982 2.98745 12.9782 2.53745 14.0582 2.94745C15.3082 3.35745 16.1082 4.73745 15.8282 6.01745L15.3382 9.16745C15.3282 9.23745 15.3282 9.33745 15.3982 9.41745C15.4482 9.46745 15.5182 9.49745 15.5982 9.49745H19.5982C20.5782 9.49745 21.4282 9.90745 21.9282 10.6175C22.4182 11.3075 22.5182 12.2175 22.1982 13.0975L19.8082 20.3775C19.4382 21.8275 17.8982 22.9975 16.2882 22.9975Z" fill="white"/>
                    <path d="M5.3877 21.8974H4.3877C2.5377 21.8974 1.6377 21.0274 1.6377 19.2474V9.44736C1.6377 7.66736 2.5377 6.79736 4.3877 6.79736H5.3877C7.2377 6.79736 8.1377 7.66736 8.1377 9.44736V19.2474C8.1377 21.0274 7.2377 21.8974 5.3877 21.8974ZM4.3877 8.29736C3.2977 8.29736 3.1377 8.55736 3.1377 9.44736V19.2474C3.1377 20.1374 3.2977 20.3974 4.3877 20.3974H5.3877C6.4777 20.3974 6.6377 20.1374 6.6377 19.2474V9.44736C6.6377 8.55736 6.4777 8.29736 5.3877 8.29736H4.3877Z" fill="white"/>
                  </svg>
                  <p className="text-white font-medium text-[10px] xxs:text-sm xs:text-base sm:text-lg" style={{fontFamily: data?.font_title}}>Like 5.8 k</p>
                </div>
              </a>
            )}
            
            {data.pageUrl === "#" ? (
              <div className="flex items-center justify-between py-4 px-4 rounded-[4px] space-x-[4px] bg-white border-[1px] border-[#1D5CF9]/[.08] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] cursor-pointer">
                <p className="text-[#0866FF] font-medium text-start truncate text-[10px] xxs:text-sm xs:text-base sm:text-lg" style={{fontFamily: data?.font_title}}>Go to our Facebook page</p>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.875 7.53076C0.875 7.15107 1.15715 6.83727 1.52323 6.78761L1.625 6.78076L16.625 6.78076C17.0392 6.78076 17.375 7.11655 17.375 7.53076C17.375 7.91046 17.0928 8.22425 16.7268 8.27392L16.625 8.28076L1.625 8.28076C1.21079 8.28076 0.875 7.94498 0.875 7.53076Z" fill="#0866FF"/>
                  <path d="M10.046 2.03765C9.75249 1.74538 9.75146 1.27051 10.0437 0.976989C10.3094 0.71015 10.726 0.685047 11.0201 0.902268L11.1044 0.974705L17.1544 6.9987C17.422 7.26519 17.4464 7.6833 17.2274 7.97738L17.1544 8.0616L11.1044 14.0866C10.8109 14.3789 10.3361 14.3779 10.0438 14.0844C9.77805 13.8176 9.75471 13.4009 9.97317 13.1077L10.046 13.0237L15.562 7.52988L10.046 2.03765Z" fill="#0866FF"/>
                </svg>
              </div>
            ):(
              <a href={data.pageUrl} target="_blank" rel="noreferrer">
                <div className="flex items-center justify-between py-4 px-4 rounded-[4px] space-x-[4px] bg-white border-[1px] border-[#1D5CF9]/[.08] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
                  <p className="text-[#0866FF] font-medium text-start truncate text-[10px] xxs:text-sm xs:text-base sm:text-lg" style={{fontFamily: data?.font_title}}>Go to our Facebook page</p>
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.875 7.53076C0.875 7.15107 1.15715 6.83727 1.52323 6.78761L1.625 6.78076L16.625 6.78076C17.0392 6.78076 17.375 7.11655 17.375 7.53076C17.375 7.91046 17.0928 8.22425 16.7268 8.27392L16.625 8.28076L1.625 8.28076C1.21079 8.28076 0.875 7.94498 0.875 7.53076Z" fill="#0866FF"/>
                    <path d="M10.046 2.03765C9.75249 1.74538 9.75146 1.27051 10.0437 0.976989C10.3094 0.71015 10.726 0.685047 11.0201 0.902268L11.1044 0.974705L17.1544 6.9987C17.422 7.26519 17.4464 7.6833 17.2274 7.97738L17.1544 8.0616L11.1044 14.0866C10.8109 14.3789 10.3361 14.3779 10.0438 14.0844C9.77805 13.8176 9.75471 13.4009 9.97317 13.1077L10.046 13.0237L15.562 7.52988L10.046 2.03765Z" fill="#0866FF"/>
                  </svg>
                </div>
              </a>
            )}
          </div>
        ):(
          <></>
        )}
      </div>
    </div>
  
  );
};

export default Facebook;
