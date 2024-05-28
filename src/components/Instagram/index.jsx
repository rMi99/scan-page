import {React} from "react";
import "../index.css";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import useScroller from "../../utils/Scroller";



let Instagram = ({ qrData }) => {
  const data = qrData
  useUpdateDomTitle('Online QR Generator - Scanned Page | Instagram',"#ED3E7F");
  
  useScroller(data);
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col items-center justify-center mt-[50px] w-full max-w-[700px]">
        <div className="flex items-center justify-between w-full mb-5  px-[20px]">
          <div className="flex items-center justify-between space-x-[12px]">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L0.999938 8.00006L8 15.0001" stroke="#C1C1C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex items-center justify-between space-x-[4px]">
              {data?.username? (
                <p className="font-bold text-base xs:text-lg text-[#C1C1C1]">{data.username}</p>
              ):(
                <p className="font-bold text-base xs:text-lg text-[#C1C1C1]">Username</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between space-x-2 xxs:space-x-[6px] xs:space-x-[10px] xsm:space-x-[14px] sm:space-x-[20px]">
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_3031_336" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H18.4969V17.348H0V0Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_3031_336)">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.24701 1.5C5.75201 1.5 3.31601 4.238 3.31601 6.695C3.31601 8.774 2.73901 9.735 2.22901 10.583C1.82001 11.264 1.49701 11.802 1.49701 12.971C1.66401 14.857 2.90901 15.848 9.24701 15.848C15.55 15.848 16.834 14.813 17 12.906C16.997 11.802 16.674 11.264 16.265 10.583C15.755 9.735 15.178 8.774 15.178 6.695C15.178 4.238 12.742 1.5 9.24701 1.5M9.24701 17.348C4.57101 17.348 0.345013 17.018 1.33547e-05 13.035C-0.00298665 11.387 0.500013 10.549 0.944013 9.811C1.39301 9.063 1.81601 8.358 1.81601 6.695C1.81601 3.462 4.80201 0 9.24701 0C13.692 0 16.678 3.462 16.678 6.695C16.678 8.358 17.101 9.063 17.55 9.811C17.994 10.549 18.497 11.387 18.497 12.971C18.148 17.018 13.923 17.348 9.24701 17.348" fill="#C1C1C1"/>
                </g>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.19803 21.5001H9.19603C8.07503 21.4991 7.01403 21.0051 6.20903 20.1081C5.93203 19.8011 5.95703 19.3261 6.26503 19.0501C6.57303 18.7721 7.04703 18.7971 7.32403 19.1061C7.84203 19.6831 8.50703 20.0001 9.19703 20.0001H9.19803C9.89103 20.0001 10.559 19.6831 11.078 19.1051C11.356 18.7981 11.83 18.7731 12.137 19.0501C12.445 19.3271 12.47 19.8021 12.193 20.1091C11.385 21.0061 10.322 21.5001 9.19803 21.5001" fill="#C1C1C1"/>
            </svg>
            <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#C1C1C1"/>
              <circle cx="7" cy="1.5" r="1.5" fill="#C1C1C1"/>
              <circle cx="12.5" cy="1.5" r="1.5" fill="#C1C1C1"/>
            </svg>

          </div>
        </div>
        <div className="flex items-center justify-between w-full sm:pr-[10px] mb-5 px-[20px] space-x-[15px] xsm:space-x-[25px]">
          <img src="/images/images/new/disabled_avatar.webp" className="w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[120px]" alt="" />
          <div className="flex flex-col items-center justify-end w-full px-2 space-y-[15px]">
            <div className="w-full animate-pulse h-[7px] rounded-md bg-[#EAECF0]"></div>
            <div className="w-full animate-pulse h-[7px] rounded-md bg-[#EAECF0]"></div>
            <div className="w-full animate-pulse h-[7px] rounded-md bg-[#EAECF0]"></div>
          </div>
        </div>
        <div className="flex flex-col w-full text-start space-y-[3px] mb-3 px-[20px]">
          {data?.username? (
            <p className="font-bold text-[#C1C1C1]">{data.username}</p>
          ):(
            <p className="font-bold text-[#C1C1C1]">Username</p>
          )}
          <div className="space-y-[9px]">
            <div className="w-full h-[7px] animate-pulse rounded-md bg-[#EAECF0]"></div>
            <div className="w-3/4 h-[7px] animate-pulse rounded-md bg-[#EAECF0]"></div>
            <div className="w-1/2 h-[7px] animate-pulse rounded-md bg-[#EAECF0]"></div>
          </div>
        </div>
        <div className="flex items-center justify-start w-full mb-3 px-[20px]">
          <img src="/images/images/new/disabled_avatars.webp" className="mr-2 xs:mr-3 w-[40px] xxs:w-[54px] xs:w-[70px] sm:w-[82px]" alt=""/>
          <div className="space-y-[9px] w-full">
            <div className="w-full h-[7px] animate-pulse rounded-md bg-[#EAECF0]"></div>
            <div className="w-3/4 h-[7px] animate-pulse rounded-md bg-[#EAECF0]"></div>
          </div>
        </div>
        <div className="flex gap-[6px] w-full mb-5  px-[20px]">
          <div className="flex-1 flex gap-2">
            <div className="flex-1 bg-[#EFEFEF] rounded font-medium py-[7px] text-[#C1C1C1] text-[10px] xxs:text-xs xs:text-sm">Follow</div>
            <div className="flex-1 bg-[#EFEFEF] rounded font-medium py-[7px] text-[#C1C1C1] text-[10px] xxs:text-xs xs:text-sm">Message</div>
            <div className="flex-1 bg-[#EFEFEF] rounded font-medium py-[7px] text-[#C1C1C1] text-[10px] xxs:text-xs xs:text-sm">Shop</div>
          </div>
          <div className="bg-[#EFEFEF] rounded flex items-center justify-center p-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="14" height="14" transform="translate(0 -0.00146484)" fill="#EFEFEF"/>
              <circle cx="9" cy="3.99854" r="1.85" stroke="#C1C1C1" strokeWidth="1.3"/>
              <path d="M13 11.9985V10.9985C13 9.34168 11.6569 7.99854 10 7.99854H8C6.34315 7.99854 5 9.34168 5 10.9985V11.9985" stroke="#C1C1C1" strokeWidth="1.3"/>
              <line x1="3.525" y1="4.64854" x2="3.525" y2="8.34854" stroke="#C1C1C1" strokeWidth="1.3" strokeLinecap="round"/>
              <line x1="1.65" y1="6.44863" x2="5.35" y2="6.44863" stroke="#C1C1C1" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        
        <div className="flex justify-between items-center w-full gap-[4px] xsm:gap-2 mb-5 px-[20px]">
          {[1, 2, 3, 4, 5].map((idx) => (
            <div className="flex flex-col items-center truncate text-start" key={idx}>
              <img src="/images/images/new/disabled_story.webp" className="xxs:w-[30px] xs:w-[60px] sm:w-full mb-1" alt="" />
              <div className="w-8/12 h-[7px] animate-pulse mb-1 rounded-md bg-[#EAECF0]"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full mb-1 px-1">
          <div className="w-1/3 flex items-center justify-center border-b-[2px] py-3 border-black">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.00797 1.6555H1.74534V5.91813H6.00797V1.6555ZM0.679688 5.91813V6.98378V11.2464V12.3121V16.5747C0.679688 17.1632 1.1568 17.6403 1.74534 17.6403H6.00797H7.07363H11.3363H12.4019H16.6645C17.2531 17.6403 17.7302 17.1632 17.7302 16.5747V12.3121V11.2464V6.98378V5.91813V1.6555C17.7302 1.06695 17.2531 0.589844 16.6645 0.589844H12.4019H11.3363H7.07363H6.00797H1.74534C1.1568 0.589844 0.679688 1.06695 0.679688 1.6555V5.91813ZM16.6645 11.2464V6.98378H12.4019V11.2464H16.6645ZM11.3363 12.3121H7.07363L7.07363 16.5747H11.3363V12.3121ZM12.4019 16.5747L12.4019 12.3121H16.6645V16.5747H12.4019ZM6.00797 12.3121V16.5747H1.74534V12.3121H6.00797ZM11.3363 11.2464H7.07363V6.98378H11.3363V11.2464ZM6.00797 11.2464V6.98378H1.74534V11.2464H6.00797ZM16.6645 5.91813H12.4019V1.6555H16.6645V5.91813ZM11.3363 5.91813V1.6555H7.07363V5.91813H11.3363Z" fill="#949494"/>
            </svg>
          </div>
          <div className="w-1/3 flex items-center justify-center border-b-[1px] pt-3 pb-[13px] border-[#DADBDD]">
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2786 8.7315L3.2592 2.00778C2.19402 1.35784 0.828125 2.1245 0.828125 3.37231V16.633C0.828125 17.8719 2.17662 18.6399 3.24216 18.0078L14.2616 11.4708C15.298 10.856 15.3073 9.35915 14.2786 8.7315Z" stroke="#949494" strokeWidth="1.06566" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-1/3 flex items-center justify-center border-b-[1px] pt-3 pb-[13px] border-[#DADBDD]">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.7168 12.9675C12.8978 12.9675 14.666 11.1994 14.666 9.01835C14.666 6.83727 12.8978 5.06915 10.7168 5.06915C8.53568 5.06915 6.76756 6.83727 6.76756 9.01835C6.76756 11.1994 8.53568 12.9675 10.7168 12.9675ZM10.7168 11.9019C12.3093 11.9019 13.6003 10.6109 13.6003 9.01835C13.6003 7.42582 12.3093 6.13481 10.7168 6.13481C9.12422 6.13481 7.83322 7.42582 7.83322 9.01835C7.83322 10.6109 9.12422 11.9019 10.7168 11.9019Z" fill="#949494"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.84375 3.87812C0.84375 3.28958 1.32086 2.81247 1.90941 2.81247H7.66579C7.98952 2.81247 8.2957 2.66531 8.49793 2.41252L9.60252 1.03178C10.0291 0.49852 10.8402 0.498521 11.2668 1.03178L12.3714 2.41252C12.5736 2.66531 12.8798 2.81247 13.2035 2.81247H18.9599C19.5485 2.81247 20.0256 3.28958 20.0256 3.87812V18.6719C20.0256 19.2605 19.5485 19.7376 18.9599 19.7376H1.90941C1.32086 19.7376 0.84375 19.2605 0.84375 18.6719V3.87812ZM18.9599 3.87812V18.6719H17.1733V18.1391C17.1733 16.0792 15.5034 14.4093 13.4435 14.4093H7.98985C5.92994 14.4093 4.26005 16.0792 4.26005 18.1391V18.6719H1.90941V3.87812L7.66579 3.87812C8.31325 3.87812 8.92561 3.58381 9.33007 3.07823L10.4347 1.69749L11.5392 3.07823C11.9437 3.58381 12.5561 3.87812 13.2035 3.87812H18.9599ZM5.32571 18.6719H16.1076V18.1391C16.1076 16.6678 14.9149 15.475 13.4435 15.475H7.98985C6.51849 15.475 5.32571 16.6678 5.32571 18.1391V18.6719Z" fill="#949494"/>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full gap-[1px] xs:gap-[2px] mb-14 px-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
            <img className="w-full flex-1" key={idx} src="/images/images/new/disabled_post.webp" alt="" />
          ))}
        </div>
        <div className="flex justify-around items-center w-full max-w-[700px] py-2 fixed bottom-0 bg-white">
          <div className="flex-1 flex items-center justify-center">
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.5 10.5436V21.0078H14.5V16.0078C14.5 13.7987 12.7091 12.0078 10.5 12.0078C8.29086 12.0078 6.5 13.7987 6.5 16.0078V21.0078H0.5V10.5436L10.5 1.00781L20.5 10.5436Z" fill="#DDDDDD"/>
              <path d="M20.5 21.0078V21.5078H21V21.0078H20.5ZM20.5 10.5436H21V10.3295L20.8451 10.1817L20.5 10.5436ZM14.5 21.0078H14V21.5078H14.5V21.0078ZM6.5 21.0078V21.5078H7V21.0078H6.5ZM0.5 21.0078H0V21.5078H0.5V21.0078ZM0.5 10.5436L0.154946 10.1817L0 10.3295V10.5436H0.5ZM10.5 1.00781L10.8451 0.64596L10.5 0.316924L10.1549 0.64596L10.5 1.00781ZM21 21.0078V10.5436H20V21.0078H21ZM14.5 21.5078H20.5V20.5078H14.5V21.5078ZM15 21.0078V16.0078H14V21.0078H15ZM15 16.0078C15 13.5225 12.9853 11.5078 10.5 11.5078V12.5078C12.433 12.5078 14 14.0748 14 16.0078H15ZM10.5 11.5078C8.01472 11.5078 6 13.5225 6 16.0078H7C7 14.0748 8.567 12.5078 10.5 12.5078V11.5078ZM6 16.0078V21.0078H7V16.0078H6ZM0.5 21.5078H6.5V20.5078H0.5V21.5078ZM0 10.5436V21.0078H1V10.5436H0ZM10.1549 0.64596L0.154946 10.1817L0.845054 10.9054L10.8451 1.36967L10.1549 0.64596ZM20.8451 10.1817L10.8451 0.64596L10.1549 1.36967L20.1549 10.9054L20.8451 10.1817Z" fill="#DDDDDD"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5" cy="10.0078" r="8.1" stroke="#DDDDDD" strokeWidth="1.8"/>
              <path d="M22.5 22.0078L16.5 16.0078" stroke="#DDDDDD" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center py-[10px]">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.9211 1.90255H8.07895C4.93964 1.90255 2.39474 4.44746 2.39474 7.58676V16.4289C2.39474 19.5682 4.93964 22.1131 8.07895 22.1131H16.9211C20.0604 22.1131 22.6053 19.5682 22.6053 16.4289V7.58676C22.6053 4.44746 20.0604 1.90255 16.9211 1.90255ZM8.07895 0.0078125C3.89321 0.0078125 0.5 3.40102 0.5 7.58676V16.4289C0.5 20.6146 3.89321 24.0078 8.07895 24.0078H16.9211C21.1068 24.0078 24.5 20.6146 24.5 16.4289V7.58676C24.5 3.40102 21.1068 0.0078125 16.9211 0.0078125H8.07895Z" fill="#DDDDDD"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4.74465C13.0232 4.74465 13.4474 5.16881 13.4474 5.69202V11.0604H18.8158C19.339 11.0604 19.7632 11.4846 19.7632 12.0078C19.7632 12.531 19.339 12.9552 18.8158 12.9552H13.4474V18.3236C13.4474 18.8468 13.0232 19.271 12.5 19.271C11.9768 19.271 11.5526 18.8468 11.5526 18.3236V12.9552H6.18421C5.66099 12.9552 5.23684 12.531 5.23684 12.0078C5.23684 11.4846 5.66099 11.0604 6.18421 11.0604H11.5526V5.69202C11.5526 5.16881 11.9768 4.74465 12.5 4.74465Z" fill="#DDDDDD"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.74 14.3346C16.0867 14.5412 16.0867 15.0577 15.74 15.2643L10.28 18.5184C9.93333 18.725 9.5 18.4668 9.5 18.0536L9.5 11.5454C9.5 11.1322 9.93333 10.8739 10.28 11.0805L15.74 14.3346Z" fill="#DDDDDD"/>
              <path d="M6.5 2.00781L10.5 8.00781" stroke="#DDDDDD" strokeWidth="1.8"/>
              <path d="M13.5 2.00781L17.5 8.00781" stroke="#DDDDDD" strokeWidth="1.8"/>
              <rect x="2.4" y="1.90781" width="20.2" height="20.2" rx="5.1" stroke="#DDDDDD" strokeWidth="1.8"/>
              <path d="M2.5 8.00781H22.5" stroke="#DDDDDD" strokeWidth="1.8"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/images/images/new/disabled_avatar.webp" className="w-[35px] xsm:w-[40px]" alt=""/>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Instagram;
