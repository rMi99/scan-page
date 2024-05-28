import { React } from "react";
import "../index.css";
import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";

let VcardPreview = (props) => {

  const t = useLanguage();
  useUpdateDomTitle('Online QR Generator - Scanned Page | vCard',"#093A32");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="hidden md:block top-0 absolute" width="2080" height="379" viewBox="0 0 2080 379" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H2080V354.388C2080 354.388 1754 300.776 1040 354.388C326 408 0 354.388 0 354.388V0Z" fill="#093A32" />
        </svg>
        <svg className="md:hidden top-0 absolute" width="770" height="364" viewBox="0 0 770 364" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V354.616C770 354.616 648.853 333.501 385 354.616C121.147 375.73 0 354.616 0 354.616V0Z" fill="#093A32" />
        </svg>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[80px] w-full max-w-[700px] px-[16px] pb-[25px]"
      >
        <img src="/images/images/new/avatar.webp" className="w-[120px] border-[7px] rounded-full border-white shadow-[1px_6px_30px_rgba(0,31,14,0.05)]" width="240" height="240" alt=""/>
        <div className="mt-[32px]">
          <h1 className="text-white text-xl xs:text-2xl mb-[9px] font-bold">John Carlson</h1>
          <h2 className="text-[#CED8D6] text-base xs:text-lg">{t('vcard.profession')}</h2>
        </div>
        <div className="flex flew-row space-x-[15px] xs:space-x-[27px] mt-[35px] xs:mt-[25px] rtl:space-x-0 rtl:gap-5 rtl:columns-3">
          <div className="flex items-center justify-center w-[50px] xs:w-[62px] h-[50px] xs:h-[62px] bg-white rounded-full cursor-pointer hover:opacity-95 hover:scale-105 shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_797_11738" maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="21">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 2.00024H22.4996V22.4997H2V2.00024Z" fill="white" />
              </mask>
              <g mask="url(#mask0_797_11738)">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.35908 5.06079C4.36108 5.06079 4.31108 5.11279 4.24808 5.17479C4.00608 5.40979 3.50508 5.89879 3.50008 6.92179C3.49208 8.35279 4.43308 11.0098 8.96408 15.5398C13.4741 20.0478 16.1271 20.9998 17.5611 20.9998H17.5821C18.6051 20.9948 19.0931 20.4928 19.3291 20.2518C19.4011 20.1778 19.4591 20.1238 19.5001 20.0898C20.4961 19.0878 21.0061 18.3418 21.0011 17.8638C20.9941 17.3758 20.3871 16.7988 19.5481 16.0008C19.2811 15.7468 18.9911 15.4708 18.6851 15.1648C17.8921 14.3738 17.4991 14.5088 16.6351 14.8128C15.4401 15.2318 13.8001 15.8018 11.2521 13.2528C8.70008 10.7028 9.27108 9.06479 9.68908 7.86979C9.99108 7.00579 10.1291 6.61179 9.33508 5.81779C9.02408 5.50779 8.74508 5.21379 8.48808 4.94379C7.69508 4.10979 7.12308 3.50679 6.63808 3.49979H6.63008C6.15108 3.49979 5.40708 4.01179 4.35408 5.06479C4.35708 5.06179 4.35808 5.06079 4.35908 5.06079ZM17.5621 22.4998C15.0701 22.4998 11.8211 20.5158 7.90408 16.6008C3.97208 12.6698 1.98508 9.41079 2.00008 6.91379C2.00908 5.26379 2.87408 4.41879 3.19908 4.10179C3.21608 4.08079 3.27408 4.02379 3.29408 4.00379C4.72808 2.56879 5.69508 1.98879 6.65708 1.99979C7.77408 2.01479 8.56908 2.85079 9.57508 3.90979C9.82408 4.17179 10.0941 4.45679 10.3951 4.75679C11.8551 6.21679 11.4391 7.40779 11.1051 8.36379C10.7411 9.40679 10.4261 10.3068 12.3121 12.1928C14.2001 14.0788 15.1001 13.7638 16.1391 13.3968C17.0961 13.0628 18.2841 12.6448 19.7461 14.1048C20.0421 14.4008 20.3231 14.6678 20.5821 14.9148C21.6461 15.9258 22.4861 16.7248 22.5001 17.8448C22.5121 18.7998 21.9321 19.7728 20.5001 21.2058L19.8661 20.7758L20.4021 21.2998C20.0851 21.6248 19.2411 22.4908 17.5901 22.4998H17.5621Z" fill="#093A32" />
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-center w-[50px] xs:w-[62px] h-[50px] xs:h-[62px] bg-white rounded-full cursor-pointer hover:opacity-95 hover:scale-105 shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7767 13.4647C11.1077 13.4647 10.4407 13.2437 9.88273 12.8017L5.39773 9.18574C5.07473 8.92574 5.02473 8.45274 5.28373 8.13074C5.54473 7.80974 6.01673 7.75874 6.33873 8.01774L10.8197 11.6297C11.3827 12.0757 12.1757 12.0757 12.7427 11.6257L17.1787 8.01974C17.5007 7.75674 17.9727 7.80674 18.2347 8.12874C18.4957 8.44974 18.4467 8.92174 18.1257 9.18374L13.6817 12.7957C13.1197 13.2417 12.4477 13.4647 11.7767 13.4647Z" fill="#093A32" />
              <mask id="mask0_922_2245" maskUnits="userSpaceOnUse" x="1" y="2" width="22" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 2H22.4999V21.5H1V2Z" fill="white" />
              </mask>
              <g mask="url(#mask0_922_2245)">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.839 20H16.659C16.661 19.998 16.669 20 16.675 20C17.816 20 18.828 19.592 19.604 18.817C20.505 17.92 21 16.631 21 15.188V8.32C21 5.527 19.174 3.5 16.659 3.5H6.841C4.326 3.5 2.5 5.527 2.5 8.32V15.188C2.5 16.631 2.996 17.92 3.896 18.817C4.672 19.592 5.685 20 6.825 20H6.839ZM6.822 21.5C5.279 21.5 3.901 20.94 2.837 19.88C1.652 18.698 1 17.032 1 15.188V8.32C1 4.717 3.511 2 6.841 2H16.659C19.989 2 22.5 4.717 22.5 8.32V15.188C22.5 17.032 21.848 18.698 20.663 19.88C19.6 20.939 18.221 21.5 16.675 21.5H16.659H6.841H6.822Z" fill="#093A32" />
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-center w-[50px] xs:w-[62px] h-[50px] xs:h-[62px] bg-white rounded-full cursor-pointer hover:opacity-95 hover:scale-105 shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.251 8.5C11.286 8.5 10.501 9.285 10.501 10.251C10.501 11.216 11.286 12 12.251 12C13.216 12 14.001 11.216 14.001 10.251C14.001 9.285 13.216 8.5 12.251 8.5ZM12.251 13.5C10.459 13.5 9.00098 12.043 9.00098 10.251C9.00098 8.458 10.459 7 12.251 7C14.043 7 15.501 8.458 15.501 10.251C15.501 12.043 14.043 13.5 12.251 13.5Z" fill="#093A32" />
              <mask id="mask0_922_2246" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 2H20.4995V21.5H4V2Z" fill="white" />
              </mask>
              <g mask="url(#mask0_922_2246)">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.249 3.5C8.52702 3.5 5.49902 6.557 5.49902 10.313C5.49902 15.092 11.123 19.748 12.249 19.996C13.375 19.747 18.999 15.091 18.999 10.313C18.999 6.557 15.971 3.5 12.249 3.5ZM12.249 21.5C10.455 21.5 3.99902 15.948 3.99902 10.313C3.99902 5.729 7.70002 2 12.249 2C16.798 2 20.499 5.729 20.499 10.313C20.499 15.948 14.043 21.5 12.249 21.5Z" fill="#093A32" />
              </g>
            </svg>
          </div>
        </div>
        <p className="text-sm xs:text-lg text-[#767C83] text-center mt-6">
          {t('vcard.summary')}
        </p>
        <div className="w-full">


          <div className="mt-6 py-[20px] px-[12px] xs:p-[20px] rounded-[4px] flex flex-col items-start justify-center w-full shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
            {/* phone */}
            <button className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
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
                <p className="text-xs text-[#767C83]">{t('vcard.phone')}</p>
                <p className="text-sm xs:text-base text-black font-medium">555-100-1000</p>
              </div>
            </button>
            <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            {/* email */}
            <button className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
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
                <p className="text-xs text-[#767C83]">{t('vcard.email')}</p>
                <p className="text-sm xs:text-base text-black font-medium truncate">John.Carlson@gmail.com</p>
              </div>
            </button>
            <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            {/* website */}
            <button className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z" fill="#767C83" />
                  <path d="M6.74969 16.3125H5.99969C5.69219 16.3125 5.43719 16.0575 5.43719 15.75C5.43719 15.4425 5.67719 15.195 5.98469 15.1875C4.80719 11.1675 4.80719 6.8325 5.98469 2.8125C5.67719 2.805 5.43719 2.5575 5.43719 2.25C5.43719 1.9425 5.69219 1.6875 5.99969 1.6875H6.74969C6.92969 1.6875 7.10219 1.7775 7.20719 1.92C7.31219 2.07 7.34219 2.2575 7.28219 2.43C5.87219 6.6675 5.87219 11.3325 7.28219 15.5775C7.34219 15.75 7.31219 15.9375 7.20719 16.0875C7.10219 16.2225 6.92969 16.3125 6.74969 16.3125Z" fill="#767C83" />
                  <path d="M11.2498 16.3125C11.1898 16.3125 11.1298 16.305 11.0698 16.2825C10.7773 16.185 10.6123 15.8625 10.7173 15.57C12.1273 11.3325 12.1273 6.66751 10.7173 2.42251C10.6198 2.13001 10.7773 1.80751 11.0698 1.71001C11.3698 1.61251 11.6848 1.77001 11.7823 2.06251C13.2748 6.53251 13.2748 11.4525 11.7823 15.915C11.7073 16.1625 11.4823 16.3125 11.2498 16.3125Z" fill="#767C83" />
                  <path d="M9 12.9001C6.9075 12.9001 4.8225 12.6076 2.8125 12.0151C2.805 12.3151 2.5575 12.5626 2.25 12.5626C1.9425 12.5626 1.6875 12.3076 1.6875 12.0001V11.2501C1.6875 11.0701 1.7775 10.8976 1.92 10.7926C2.07 10.6876 2.2575 10.6576 2.43 10.7176C6.6675 12.1276 11.34 12.1276 15.5775 10.7176C15.75 10.6576 15.9375 10.6876 16.0875 10.7926C16.2375 10.8976 16.32 11.0701 16.32 11.2501V12.0001C16.32 12.3076 16.065 12.5626 15.7575 12.5626C15.45 12.5626 15.2025 12.3226 15.195 12.0151C13.1775 12.6076 11.0925 12.9001 9 12.9001Z" fill="#767C83" />
                  <path d="M15.7498 7.31252C15.6898 7.31252 15.6298 7.30502 15.5698 7.28252C11.3323 5.87252 6.65984 5.87252 2.42234 7.28252C2.12234 7.38002 1.80734 7.22252 1.70984 6.93002C1.61984 6.63002 1.77734 6.31502 2.06984 6.21752C6.53984 4.72502 11.4598 4.72502 15.9223 6.21752C16.2148 6.31502 16.3798 6.63752 16.2748 6.93002C16.2073 7.16252 15.9823 7.31252 15.7498 7.31252Z" fill="#767C83" />
                </svg>
              </div>
              <div className="flex-col text-left rtl:text-right">
                <p className="text-xs text-[#767C83]">{t('vcard.website')}</p>
                <p className="text-sm xs:text-base text-black font-medium">{t('vcard.website_title')}</p>
              </div>
            </button>
            <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            {/* Location */}
            <button className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.1875 6.375C8.46375 6.375 7.875 6.96375 7.875 7.68825C7.875 8.412 8.46375 9 9.1875 9C9.91125 9 10.5 8.412 10.5 7.68825C10.5 6.96375 9.91125 6.375 9.1875 6.375M9.1875 10.125C7.8435 10.125 6.75 9.03225 6.75 7.68825C6.75 6.3435 7.8435 5.25 9.1875 5.25C10.5315 5.25 11.625 6.3435 11.625 7.68825C11.625 9.03225 10.5315 10.125 9.1875 10.125" fill="#767C83" />
                  <mask id="mask0_797_11781" maskUnits="userSpaceOnUse" x="3" y="1" width="13" height="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 1.5H15.3746V16.125H3V1.5Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_797_11781)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.1875 2.625C6.396 2.625 4.125 4.91775 4.125 7.73475C4.125 11.319 8.343 14.811 9.1875 14.997C10.032 14.8103 14.25 11.3183 14.25 7.73475C14.25 4.91775 11.979 2.625 9.1875 2.625V2.625ZM9.1875 16.125C7.842 16.125 3 11.961 3 7.73475C3 4.29675 5.77575 1.5 9.1875 1.5C12.5992 1.5 15.375 4.29675 15.375 7.73475C15.375 11.961 10.533 16.125 9.1875 16.125V16.125Z" fill="#767C83" />
                  </g>
                </svg>
              </div>
              <div className="flex-col text-left rtl:text-right">
                <p className="text-xs text-[#767C83]">{t('vcard.location')}</p>
                <p className="text-sm xs:text-base text-black font-medium">
                  {t('vcard.location_text')}
                </p>
                <div className="flex mt-[15px] ">
                  <a className="text-[10px] text-black px-[14px] py-[6px] bg-[#EBF8F6] cursor-pointer rounded-[22px]" href="/" onClick={(e)=>{e.preventDefault()}}>{t('vcard.show_on_map')}</a>
                </div>
              </div>
            </button>
            <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            {/* company */}
            <button className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.99609 13.0702C8.68559 13.0702 8.43359 12.8182 8.43359 12.5077V10.605C8.43359 10.2945 8.68559 10.0425 8.99609 10.0425C9.30659 10.0425 9.55859 10.2945 9.55859 10.605V12.5077C9.55859 12.8182 9.30659 13.0702 8.99609 13.0702Z" fill="#767C83" />
                  <mask id="mask0_797_11788" maskUnits="userSpaceOnUse" x="1" y="3" width="16" height="9">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3.43506H16.4924V11.1683H1.5V3.43506Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_797_11788)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.625 8.54481C4.407 9.51306 6.654 10.0433 8.9925 10.0433C11.3355 10.0433 13.5848 9.51306 15.3675 8.54481V6.29331C15.3675 5.33706 14.5942 4.56006 13.6425 4.56006H4.3575C3.402 4.56006 2.625 5.33406 2.625 6.28581V8.54481ZM8.9925 11.1683C6.33375 11.1683 3.771 10.5248 1.77825 9.35781C1.60575 9.25731 1.5 9.07281 1.5 8.87256V6.28581C1.5 4.71381 2.78175 3.43506 4.3575 3.43506H13.6425C15.2145 3.43506 16.4925 4.71681 16.4925 6.29331V8.87256C16.4925 9.07281 16.386 9.25731 16.2142 9.35781C14.2215 10.5248 11.6565 11.1683 8.9925 11.1683Z" fill="#767C83" />
                  </g>
                  <mask id="mask1_797_11788" maskUnits="userSpaceOnUse" x="5" y="1" width="8" height="4">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.80859 1.50024H12.1836V4.55717H5.80859V1.50024Z" fill="white" />
                  </mask>
                  <g mask="url(#mask1_797_11788)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6211 4.55724C11.3106 4.55724 11.0586 4.30524 11.0586 3.99474V3.72024C11.0586 3.11649 10.5673 2.62524 9.96359 2.62524H8.02859C7.42484 2.62524 6.93359 3.11649 6.93359 3.72024V3.99474C6.93359 4.30524 6.68159 4.55724 6.37109 4.55724C6.06059 4.55724 5.80859 4.30524 5.80859 3.99474V3.72024C5.80859 2.49624 6.80459 1.50024 8.02859 1.50024H9.96359C11.1876 1.50024 12.1836 2.49624 12.1836 3.72024V3.99474C12.1836 4.30524 11.9316 4.55724 11.6211 4.55724Z" fill="#767C83" />
                  </g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.3459 16.3052H4.64593C3.08968 16.3052 1.77943 15.0895 1.66168 13.537L1.51918 11.6552C1.49593 11.3455 1.72843 11.0747 2.03818 11.0515C2.34943 11.0402 2.61793 11.26 2.64193 11.5705L2.78368 13.4515C2.85718 14.4205 3.67468 15.1802 4.64593 15.1802H13.3459C14.3172 15.1802 15.1354 14.4205 15.2082 13.4515L15.3507 11.5705C15.3747 11.26 15.6499 11.0395 15.9544 11.0515C16.2642 11.0747 16.4959 11.3455 16.4727 11.6552L16.3302 13.537C16.2124 15.0895 14.9022 16.3052 13.3459 16.3052Z" fill="#767C83" />
                </svg>
              </div>
              <div className="flex-col text-left rtl:text-right">
                <p className="text-xs text-[#767C83]">{t('vcard.company_name')}</p>
                <p className="text-sm xs:text-base text-black font-medium">{t('vcard.account_manager')}</p>
              </div>
            </button>
          </div>
          <div className="mt-[20px] w-full flex flex-col items-start justify-center">
            <p className="text-lg xs:text-xl text-[#131D29] font-medium mb-[10px]">{t('vcard.find_me')}</p>
            {/* Linkedin */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                  <img src="/images/social/linkedin.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <div className="flex-col text-left">
                    <p className="text-base xs:text-xl text-[#131D29] font-medium">LinkedIn</p>
                    <p className="text-[10px] xs:text-xs text-[#767C83]">{t('vcard.social_account')}</p>
                  </div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                </svg>
              </div>
            </div>
            {/* Facebook */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                  <img src="/images/social/facebook.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <div className="flex-col text-left">
                    <p className="text-base xs:text-xl text-[#131D29] font-medium">Facebook</p>
                    <p className="text-[10px] xs:text-xs text-[#767C83]">{t('vcard.social_account')}</p>
                  </div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                </svg>
              </div>
            </div>
            {/* google */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                  <img src="/images/social/google.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <div className="flex-col text-left">
                    <p className="text-base xs:text-xl text-[#131D29] font-medium">Google</p>
                    <p className="text-[10px] xs:text-xs text-[#767C83]">{t('vcard.social_account')}</p>
                  </div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                </svg>
              </div>
            </div>
            {/* instagram */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                  <img src="/images/social/instagram.webp" width="132" height="132" className="w-[44px]" alt=""/>
                  <div className="flex-col text-left">
                    <p className="text-base xs:text-xl text-[#131D29] font-medium">Instagram</p>
                    <p className="text-[10px] xs:text-xs text-[#767C83]">{t('vcard.social_account')}</p>
                  </div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center items-center space-x-[10px] bg-[#093A32] rounded-[4px] mb-[20px] mt-[11px] py-[14px] cursor-pointer hover:opacity-80">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_797_11851" maskUnits="userSpaceOnUse" x="3" y="12" width="14" height="7">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.33301 12.0801H16.5329V18.2251H3.33301V12.0801Z" fill="white" />
              </mask>
              <g mask="url(#mask0_797_11851)">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.93384 13.3301C6.38301 13.3301 4.58301 13.9401 4.58301 15.1442C4.58301 16.3592 6.38301 16.9751 9.93384 16.9751C13.4838 16.9751 15.283 16.3651 15.283 15.1609C15.283 13.9459 13.4838 13.3301 9.93384 13.3301ZM9.93384 18.2251C8.30134 18.2251 3.33301 18.2251 3.33301 15.1442C3.33301 12.3976 7.10051 12.0801 9.93384 12.0801C11.5663 12.0801 16.533 12.0801 16.533 15.1609C16.533 17.9076 12.7663 18.2251 9.93384 18.2251Z" fill="white" />
              </g>
              <mask id="mask1_797_11851" maskUnits="userSpaceOnUse" x="5" y="1" width="10" height="10">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.50781 1.66675H14.3578V10.5156H5.50781V1.66675Z" fill="white" />
              </mask>
              <g mask="url(#mask1_797_11851)">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.93367 2.8565C8.14951 2.8565 6.69784 4.30734 6.69784 6.0915C6.69201 7.86984 8.13284 9.31984 9.90951 9.3265L9.93367 9.9215V9.3265C11.717 9.3265 13.1678 7.87484 13.1678 6.0915C13.1678 4.30734 11.717 2.8565 9.93367 2.8565ZM9.93367 10.5157H9.90701C7.47201 10.5082 5.49951 8.52234 5.50784 6.089C5.50784 3.6515 7.49284 1.6665 9.93367 1.6665C12.3737 1.6665 14.3578 3.6515 14.3578 6.0915C14.3578 8.5315 12.3737 10.5157 9.93367 10.5157Z" fill="white" />
              </g>
            </svg>
            <p className="text-base xs:text-lg text-white">{t('vcard.add_account')}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default VcardPreview;