import { useRef } from "react";
import "../index.css";
// import ReactAudioPlayer from "react-audio-player";
import { useAdjustBackdropHeight } from "../../backdrop";
import useLanguage from "../../../utils/useLanguage";
import AudioPlayer from "../../common/audioPlayer";
import useUpdateDomTitle from "../../../utils/updateDomTitle";
// import ReactAudioPlayer from "react-audio-player";

let Mp3Preview = (props) => {

  const t = useLanguage();
  useUpdateDomTitle('Online QR Generator - Scanned Page | MP3',"#7572FF");

  let backdropElement = useRef(null);
  let backdropEndElement = useRef(null);
  let backdropEndFallbackElement = useRef(null);

  const SOCIALS = [ 
      {name: "",text: t('links.socialAccType'),icon: t('bushiness.facebook'),url: "/images/social/facebook.png"},
      {name: "",text: t('links.socialAccType'),icon: t('bushiness.instagram'),url: "/images/social/instagram.webp"},
      {name: "",text: t('links.socialAccType'),icon: t('links.social.youtube'),url: "/images/social/youtube.svg"},
      {name: "",text: t('links.socialAccType'),icon: t('mp3.social.spotify'),url: "/images/social/spotify.svg"}
  ];

  useAdjustBackdropHeight(backdropElement, backdropEndElement, backdropEndFallbackElement);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <div ref={backdropElement} className="qr-backdrop" style={{'--bg-color': "#7572FF"}}>
          <svg width="375" height="526" viewBox="0 0 375 526" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z" fill={'var(--bg-color)'}/>
          </svg>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[50px] xs:mt-[54px] w-full max-w-[450px] px-[16px]"
      >
        <div className="w-full flex flex-row items-center justify-end ">
          <div className="w-[35px] h-[35px] xs:w-[48px] xs:h-[48px] bg-white/[.15] rounded-[4px] mb-[15px] xs:mb-[20px] border-[1px] border-white cursor-pointer flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6196 13.07C20.2396 13.07 19.9196 12.78 19.8696 12.4C19.6296 10.14 18.4096 8.08998 16.5296 6.78998C16.1896 6.54998 16.1096 6.08998 16.3396 5.74998C16.5796 5.40998 17.0496 5.32998 17.3796 5.55998C19.6196 7.10998 21.0596 9.54998 21.3496 12.24C21.3896 12.65 21.0996 13.02 20.6796 13.07C20.6696 13.07 20.6396 13.07 20.6196 13.07Z" fill="white" />
              <path d="M3.48991 13.12C3.45991 13.12 3.43991 13.12 3.40991 13.12C2.99991 13.07 2.69991 12.7 2.73991 12.29C3.00991 9.60001 4.43991 7.17001 6.64991 5.60001C6.98991 5.36001 7.45991 5.44001 7.69991 5.78001C7.93991 6.12001 7.85991 6.59001 7.51991 6.83001C5.65991 8.14001 4.45991 10.19 4.22991 12.45C4.19991 12.83 3.86991 13.12 3.48991 13.12Z" fill="white" />
              <path d="M12.06 22.61C10.58 22.61 9.16997 22.27 7.84997 21.61C7.47997 21.42 7.32997 20.97 7.51997 20.6C7.70997 20.23 8.15997 20.08 8.52997 20.27C10.69 21.36 13.29 21.38 15.47 20.33C15.84 20.15 16.29 20.31 16.47 20.68C16.65 21.05 16.49 21.5 16.12 21.68C14.84 22.3 13.48 22.61 12.06 22.61Z" fill="white" />
              <path d="M12.0593 8.44C10.1093 8.44 8.5293 6.86 8.5293 4.91C8.5293 2.96 10.1093 1.38 12.0593 1.38C14.0093 1.38 15.5893 2.96 15.5893 4.91C15.5893 6.86 13.9993 8.44 12.0593 8.44ZM12.0593 2.89C10.9393 2.89 10.0293 3.8 10.0293 4.92C10.0293 6.04 10.9393 6.95 12.0593 6.95C13.1793 6.95 14.0893 6.04 14.0893 4.92C14.0893 3.8 13.1693 2.89 12.0593 2.89Z" fill="white" />
              <path d="M4.83078 20.67C2.88078 20.67 1.30078 19.09 1.30078 17.14C1.30078 15.2 2.88078 13.61 4.83078 13.61C6.78078 13.61 8.36078 15.19 8.36078 17.14C8.36078 19.08 6.78078 20.67 4.83078 20.67ZM4.83078 15.11C3.71078 15.11 2.80078 16.02 2.80078 17.14C2.80078 18.26 3.71078 19.17 4.83078 19.17C5.95078 19.17 6.86078 18.26 6.86078 17.14C6.86078 16.02 5.95078 15.11 4.83078 15.11Z" fill="white" />
              <path d="M19.1706 20.67C17.2206 20.67 15.6406 19.09 15.6406 17.14C15.6406 15.2 17.2206 13.61 19.1706 13.61C21.1206 13.61 22.7006 15.19 22.7006 17.14C22.6906 19.08 21.1106 20.67 19.1706 20.67ZM19.1706 15.11C18.0506 15.11 17.1406 16.02 17.1406 17.14C17.1406 18.26 18.0506 19.17 19.1706 19.17C20.2906 19.17 21.2006 18.26 21.2006 17.14C21.1906 16.02 20.2906 15.11 19.1706 15.11Z" fill="white" />
            </svg>
          </div>
        </div>
        <div ref={backdropEndFallbackElement} ></div>
        <div className="flex items-center justify-center w-full px-[10px] mb-[15px] xs:mb-[30px]">
          <img ref={backdropEndElement} src="/images/images/new/mp3.webp" className="w-full shadow-[1px_6px_30px_rgba(0,31,14,0.05)] rounded-[4px] border-[1px] border-white" width="1131" height="1096" alt=""/>
        </div>
        <h1 className="text-[#131D29] text-base xxs:text-lg xs:text-xl sm:text-2xl font-bold text-center mb-[8px] xs:mb-[10px]">Night Drive</h1>
        <p className="text-[#767C83] text-sm xs:text-base text-center mb-[10px] xs:mb-[37px]">{t('mp3.songDescription')}</p>

        {/* <ReactAudioPlayer
          src={"/empty.mp3"}
          controls
          className="w-full min-w-[215px] mb-[15px] xs:mb-[37px]"
        /> */}
        <AudioPlayer 
          src={"/empty.mp3"} 
          primaryColor="#7572FF" 
          secondColor="#7572FF"
          poster="/images/images/new/mp3.webp"
          artist="The Best Driving Music"
          title="Night Drive"
        />

        <div className="w-full flex justify-center items-center bg-[#7572FF] rounded-[4px] mb-[20px] py-[16px] cursor-pointer hover:opacity-80">
          <p className="text-sm xxs:text-base xs:text-lg sm:text-xl font-medium text-white">{t('mp3.viewMoreButton')}</p>
        </div>

        <div className="my-2 w-full flex flex-col items-start justify-center">
          <p className="text-xl text-[#131D29] font-medium mb-[8px] xs:mb-[15px]">{t('global.social_network_title')}</p>
          <div className="w-full space-y-[8px] xs:space-y-[15px]">
            {SOCIALS.map((data,i)=>(
              <div key={i} className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
                <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                  <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                    <img src={data.url} width="132" height="132" className="w-[44px]" alt={data.icon}/>
                    <div className="flex-col text-left">
                      <p className="text-base xs:text-xl text-[#131D29] font-medium">{data.icon}</p>
                      <p className="text-[10px] xs:text-xs text-[#767C83]">{data.text}</p>
                    </div>
                  </div>
                  <svg className="min-w-[25px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                    <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="mb-[25px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
          <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
            <div className="space-x-[5px] xs:space-x-[15px] w-full mr-[5px] flex flex-row">
              <div className="w-[40px] h-[40px] min-w-[30px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0003 21.5781C6.31741 21.5781 1.69824 17.0594 1.69824 11.5C1.69824 5.94063 6.31741 1.42188 12.0003 1.42188C17.6832 1.42188 22.3024 5.94063 22.3024 11.5C22.3024 17.0594 17.6832 21.5781 12.0003 21.5781ZM12.0003 2.82812C7.11283 2.82812 3.13574 6.71875 3.13574 11.5C3.13574 16.2812 7.11283 20.1719 12.0003 20.1719C16.8878 20.1719 20.8649 16.2812 20.8649 11.5C20.8649 6.71875 16.8878 2.82812 12.0003 2.82812Z" fill="#767C83" />
                  <path d="M9.12547 20.6406H8.16714C7.77422 20.6406 7.44839 20.3219 7.44839 19.9375C7.44839 19.5531 7.75505 19.2437 8.14797 19.2344C6.64339 14.2094 6.64339 8.79063 8.14797 3.76562C7.75505 3.75625 7.44839 3.44687 7.44839 3.0625C7.44839 2.67812 7.77422 2.35938 8.16714 2.35938H9.12547C9.35547 2.35938 9.57589 2.47187 9.71005 2.65C9.84422 2.8375 9.88255 3.07187 9.80589 3.2875C8.00422 8.58437 8.00422 14.4156 9.80589 19.7219C9.88255 19.9375 9.84422 20.1719 9.71005 20.3594C9.57589 20.5281 9.35547 20.6406 9.12547 20.6406Z" fill="#767C83" />
                  <path d="M14.8753 20.6405C14.7986 20.6405 14.722 20.6311 14.6453 20.603C14.2715 20.4811 14.0607 20.078 14.1949 19.7124C15.9965 14.4155 15.9965 8.58427 14.1949 3.27802C14.0703 2.91239 14.2715 2.50927 14.6453 2.38739C15.0286 2.26552 15.4311 2.46239 15.5557 2.82802C17.4628 8.41552 17.4628 14.5655 15.5557 20.1436C15.4599 20.453 15.1724 20.6405 14.8753 20.6405Z" fill="#767C83" />
                  <path d="M12 16.375C9.32625 16.375 6.66208 16.0094 4.09375 15.2687C4.08417 15.6437 3.76792 15.9531 3.375 15.9531C2.98208 15.9531 2.65625 15.6344 2.65625 15.25V14.3125C2.65625 14.0875 2.77125 13.8719 2.95333 13.7406C3.145 13.6094 3.38458 13.5719 3.605 13.6469C9.01958 15.4094 14.99 15.4094 20.4046 13.6469C20.625 13.5719 20.8646 13.6094 21.0562 13.7406C21.2479 13.8719 21.3533 14.0875 21.3533 14.3125V15.25C21.3533 15.6344 21.0275 15.9531 20.6346 15.9531C20.2417 15.9531 19.9254 15.6531 19.9158 15.2687C17.3379 16.0094 14.6737 16.375 12 16.375Z" fill="#767C83" />
                  <path d="M20.6246 9.39053C20.548 9.39053 20.4713 9.38115 20.3946 9.35303C14.98 7.59053 9.00963 7.59053 3.59505 9.35303C3.21171 9.4749 2.80921 9.27803 2.68463 8.9124C2.56963 8.5374 2.77088 8.14365 3.14463 8.02178C8.8563 6.15615 15.143 6.15615 20.845 8.02178C21.2188 8.14365 21.4296 8.54678 21.2955 8.9124C21.2092 9.20303 20.9217 9.39053 20.6246 9.39053Z" fill="#767C83" />
                </svg>
              </div>
              <div className="flex items-center text-left truncate">
                <p className="text-sm xs:text-base sm:text-xl text-[#0079FF] truncate">www.thestorms.com</p>
              </div>
            </div>
            <svg className="hidden xs:flex mr-[5px] rtl:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
              <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
            </svg>
          </div>
        </button>
      </div>
    </div>

  );
};

export default Mp3Preview;
