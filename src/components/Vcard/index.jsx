import React, { useRef } from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FileSaver from "file-saver";
import VCard from "vcard-creator";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import { isLight } from "../../utils/Color";
import { useAdjustBackdropHeight } from "../backdrop";
import useScroller from "../../utils/Scroller";
import WelcomeScreen from "../common/WelcomeScreen";
import SocialNetWorks from "../common/socialNetwork";
import useLanguage from "../../utils/useLanguage";
import nullCheck from "../../utils/nullChecker";
import ContactDetails from "../common/contactDetails";
import i18n from 'i18next';

let Vcard = ({ qrData }) => {
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const data = qrData;

  const t = useLanguage();
  useUpdateDomTitle(`${data?.vcard_first_name} ${data?.vcard_last_name}`,data?.SecondaryColor);

  const currentLanguage = i18n.language;
  let isEnglish = currentLanguage === "english";

  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen,isEnglish])

  const light = isLight(data.primaryColor);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const d = setTimeout(() => {
      showWelcomeScreen(false);
      data.screen = false;
    }, 3000);
    
    return ()=>clearTimeout(d)
    // saveVcard()
  }, [data,data?.screen]);

  function convertImageToBase64(imgUrl, callback) {
    const image = new Image();
    image.crossOrigin='anonymous';

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = image.naturalHeight;
      canvas.width = image.naturalWidth;
      ctx.drawImage(image, 0, 0);
      const dataUrl = canvas.toDataURL();
      callback && callback(dataUrl)
    }

    image.onerror = ()=>{
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      canvas.height = 512;
      canvas.width = 512;
  
      ctx.beginPath();
      ctx.rect(0,0,1024,1024);
      ctx.fillStyle=data?.primaryColor
      ctx.fill();

      ctx.fillStyle = 'black';
      ctx.font = `220px ${data?.font_title}`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`${data?.vcard_first_name ? data?.vcard_first_name[0] : ''}${data?.vcard_last_name ? data?.vcard_last_name[0] : ''}`,256,270);
  
      const dataUrl = canvas.toDataURL();
      callback && callback(dataUrl)
    }

    image.src = imgUrl;
  }

  const saveVcard = () => {
    const myVCard = new VCard();

    const lastname = nullCheck(data,'vcard_last_name');
    const firstname = nullCheck(data,'vcard_first_name');
    let strret = data?.street_number ? `${nullCheck(data,'offer_number')} ${nullCheck(data,'offer_street')}` : `${nullCheck(data,'offer_street')} ${nullCheck(data,'offer_number')}`
    const offer_city = nullCheck(data,'offer_city');
    const offer_state = nullCheck(data,'offer_state');
    const offer_postalcode = nullCheck(data,'offer_postalcode');
    const offer_country = nullCheck(data,'offer_country');

    // convertImageToBase64(`http://localhost/qr-website/resources.php?type=jpg&file=${data?.images}`,(imageData)=>{
    convertImageToBase64(data?.images,(imageData)=>{
      //const image = fs.readFileSync(imagePath, { encoding: 'base64', flag: 'r' })
      myVCard.addName(lastname, firstname)
        .addPhoto(imageData.replace('data:image/png;base64,',''))
        .addCompany(data?.vcard_company)
        .addJobtitle(data?.vcard_profession)
        .addNote(data?.vcard_note)
        .addLogoURL(data?.images)
        .addAddress(undefined, strret, undefined,offer_city, offer_state, offer_postalcode, offer_country, undefined);
        //.addAddress("",data?.offer_city,strret,data?.offer_state,data?.offer_country,data?.offer_postalcode);
  
      data?.vcard_website.forEach((e,i)=>{ myVCard.addURL(e.website,e.title); });
      data?.vcard_phone.forEach((e,i)=>{ myVCard.addPhoneNumber(e.number,e.label); });
      data?.vcard_email.forEach((e,i)=>{ myVCard.addEmail(e.email,e.title); });
    
      const blob = new Blob([myVCard.toString()], {
        type: "text/vcard;charset=utf-8",
      });
      FileSaver.saveAs(blob, `${firstname}_${lastname}.vcf`);
    })
    
  };

  let backdropElement = useRef(null);
  let backdropEndElement = useRef(null);
  let backdropEndFallbackElement = useRef(null);
//   console.log(data.images);
// console.log((data.images)== "");
  useAdjustBackdropHeight(backdropElement, backdropEndElement, backdropEndFallbackElement,data);

  useScroller(data)

  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <div
          ref={backdropElement}
          className={
            data?.images === ""
              ? "qr-backdrop vcard-no-image vcard-no-image-bigscreen"
              : "qr-backdrop vcard-with-image vcard-with-image-bigscreen"
          }
          style={{ "--bg-color": data?.primaryColor }}
          id="color_palette"
        >
          <svg
            className="hidden md:block absolute"
            width="2080"
            height="379"
            viewBox="0 0 2080 379"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H2080V354.388C2080 354.388 1754 300.776 1040 354.388C326 408 0 354.388 0 354.388V0Z"
              fill="url(#paint0_linear_8_2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_2"
                x1="323.5"
                y1="0"
                x2="323.5"
                y2="364"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={data?.SecondaryColor} className="duration-500"/>
                <stop offset="1" stopColor={data?.primaryColor} className="duration-500"/>
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="md:hidden absolute"
            width="770"
            height="364"
            viewBox="0 0 770 364"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H770V354.616C770 354.616 648.853 333.501 385 354.616C121.147 375.73 0 354.616 0 354.616V0Z"
              fill="url(#paint0_linear_8_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_4"
                x1="323.5"
                y1="0"
                x2="323.5"
                y2="364"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={data?.SecondaryColor} className="duration-500"/>
                <stop offset="1" stopColor={data?.primaryColor} className="duration-500"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[80px] w-full max-w-[700px] px-[16px] pb-[25px]">
        {data?.images ? (
          <img
            src={data?.images}
            className="w-[120px] border-[7px] rounded-full border-white shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
            ref={backdropEndFallbackElement}
            alt={data?.vcard_first_name}
          />
        ) : (
          <></>
        )}

        {data?.vcard_first_name ||
        data?.vcard_last_name ||
        data?.vcard_profession ? (
          <div className="mt-[32px]" id="vcardName">
            {(data?.vcard_first_name || data?.vcard_last_name) && (
              <>
                <h1
                  className="text-xl xs:text-2xl mb-[9px] font-bold duration-500"
                  style={{
                    fontFamily: data?.font_title,
                    color: light ? "#000000" : "#ffffff",
                  }}
                >
                  {(data?.vcard_first_name || "") +
                    " " +
                    (data?.vcard_last_name || "")}
                </h1>
                <div ref={backdropEndFallbackElement}></div>
              </>
            )}
            {data?.vcard_profession ? (
              <>
                <h2
                  className="text-base xs:text-lg duration-500"
                  style={{
                    fontFamily: data?.font_title,
                    color: light ? "#000000" : "#CED8D6",
                  }}
                >
                  {data?.vcard_profession || ""}
                </h2>
                <div ref={backdropEndFallbackElement}></div>
              </>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        {data?.vcard_website?.length || 
        data?.vcard_phone?.length ||
        data?.vcard_email?.length ||
        data?.offer_number ||
        data?.offer_street ||
        data?.offer_city ||
        data?.offer_postalcode ||
        data?.offer_state ||
        data?.offer_country ||
        (data?.latitude && data?.longitude) ||
        data?.offer_url1 ? (
          <div
            className="flex flew-row space-x-[15px] rtl:space-x-0 rtl:gap-5 rtl:columns-3 xs:space-x-[27px] mt-[35px] xs:mt-[25px]"
            ref={backdropEndElement}
          >
            {data?.vcard_phone?.length ? (
              <div
                className="flex items-center justify-center w-[50px] xs:w-[62px] h-[50px] xs:h-[62px] bg-white rounded-full cursor-pointer hover:opacity-95 hover:scale-105 shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
                onClick={() => {
                  if (data?.vcard_phone[0].number === "555-100-1000") {
                    //do noting :D
                  } else {
                    window.open("tel:" + data?.vcard_phone[0].number, "_self");
                  }
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_797_11738"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="21"
                    height="21"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 2.00024H22.4996V22.4997H2V2.00024Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_797_11738)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.35908 5.06079C4.36108 5.06079 4.31108 5.11279 4.24808 5.17479C4.00608 5.40979 3.50508 5.89879 3.50008 6.92179C3.49208 8.35279 4.43308 11.0098 8.96408 15.5398C13.4741 20.0478 16.1271 20.9998 17.5611 20.9998H17.5821C18.6051 20.9948 19.0931 20.4928 19.3291 20.2518C19.4011 20.1778 19.4591 20.1238 19.5001 20.0898C20.4961 19.0878 21.0061 18.3418 21.0011 17.8638C20.9941 17.3758 20.3871 16.7988 19.5481 16.0008C19.2811 15.7468 18.9911 15.4708 18.6851 15.1648C17.8921 14.3738 17.4991 14.5088 16.6351 14.8128C15.4401 15.2318 13.8001 15.8018 11.2521 13.2528C8.70008 10.7028 9.27108 9.06479 9.68908 7.86979C9.99108 7.00579 10.1291 6.61179 9.33508 5.81779C9.02408 5.50779 8.74508 5.21379 8.48808 4.94379C7.69508 4.10979 7.12308 3.50679 6.63808 3.49979H6.63008C6.15108 3.49979 5.40708 4.01179 4.35408 5.06479C4.35708 5.06179 4.35808 5.06079 4.35908 5.06079ZM17.5621 22.4998C15.0701 22.4998 11.8211 20.5158 7.90408 16.6008C3.97208 12.6698 1.98508 9.41079 2.00008 6.91379C2.00908 5.26379 2.87408 4.41879 3.19908 4.10179C3.21608 4.08079 3.27408 4.02379 3.29408 4.00379C4.72808 2.56879 5.69508 1.98879 6.65708 1.99979C7.77408 2.01479 8.56908 2.85079 9.57508 3.90979C9.82408 4.17179 10.0941 4.45679 10.3951 4.75679C11.8551 6.21679 11.4391 7.40779 11.1051 8.36379C10.7411 9.40679 10.4261 10.3068 12.3121 12.1928C14.2001 14.0788 15.1001 13.7638 16.1391 13.3968C17.0961 13.0628 18.2841 12.6448 19.7461 14.1048C20.0421 14.4008 20.3231 14.6678 20.5821 14.9148C21.6461 15.9258 22.4861 16.7248 22.5001 17.8448C22.5121 18.7998 21.9321 19.7728 20.5001 21.2058L19.8661 20.7758L20.4021 21.2998C20.0851 21.6248 19.2411 22.4908 17.5901 22.4998H17.5621Z"
                      fill={light ? "#000000" : data?.primaryColor}
                      className="duration-500"
                    />
                  </g>
                </svg>
              </div>
            ) : (
              <></>
            )}
            {data?.vcard_email?.length ? (
              <div
                className="flex items-center justify-center w-[50px] xs:w-[62px] h-[50px] xs:h-[62px] bg-white rounded-full cursor-pointer hover:opacity-95 hover:scale-105 shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
                onClick={() => {
                  if (data.vcard_email[0].email === "John.Carlson@gmail.com") {
                    //do noting :D
                  } else {
                    window.open("mailto:" + data?.vcard_email[0].email, "_blank");
                  }
                }}
              >
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
                    d="M11.7767 13.4647C11.1077 13.4647 10.4407 13.2437 9.88273 12.8017L5.39773 9.18574C5.07473 8.92574 5.02473 8.45274 5.28373 8.13074C5.54473 7.80974 6.01673 7.75874 6.33873 8.01774L10.8197 11.6297C11.3827 12.0757 12.1757 12.0757 12.7427 11.6257L17.1787 8.01974C17.5007 7.75674 17.9727 7.80674 18.2347 8.12874C18.4957 8.44974 18.4467 8.92174 18.1257 9.18374L13.6817 12.7957C13.1197 13.2417 12.4477 13.4647 11.7767 13.4647Z"
                    fill={light ? "#000000" : data?.primaryColor}
                    className="duration-500"
                  />
                  <mask
                    id="mask0_922_2245"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="2"
                    width="22"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 2H22.4999V21.5H1V2Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_922_2245)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.839 20H16.659C16.661 19.998 16.669 20 16.675 20C17.816 20 18.828 19.592 19.604 18.817C20.505 17.92 21 16.631 21 15.188V8.32C21 5.527 19.174 3.5 16.659 3.5H6.841C4.326 3.5 2.5 5.527 2.5 8.32V15.188C2.5 16.631 2.996 17.92 3.896 18.817C4.672 19.592 5.685 20 6.825 20H6.839ZM6.822 21.5C5.279 21.5 3.901 20.94 2.837 19.88C1.652 18.698 1 17.032 1 15.188V8.32C1 4.717 3.511 2 6.841 2H16.659C19.989 2 22.5 4.717 22.5 8.32V15.188C22.5 17.032 21.848 18.698 20.663 19.88C19.6 20.939 18.221 21.5 16.675 21.5H16.659H6.841H6.822Z"
                      fill={light ? "#000000" : data?.primaryColor}
                      className="duration-500"
                    />
                  </g>
                </svg>
              </div>
            ) : (
              <></>
            )}

            {data.ship_address ||
            data.offer_city ||
            data.offer_state ||
            data.offer_country ||
            data.offer_street ||
            data.offer_postalcode ||
            data.offer_url1 ||
            data.latitude ||
            data.longitude ? (
              <button
                className="flex items-center justify-center w-[50px] xs:w-[62px] h-[50px] xs:h-[62px] bg-white rounded-full cursor-pointer hover:opacity-95 hover:scale-105 shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
                onClick={() => {
                  if ((data.offer_url1 === "#")) {
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
              >
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
                    fill={light ? "#000000" : data?.primaryColor}
                    className="duration-500"
                  />
                  <mask
                    id="mask0_922_2246"
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
                  <g mask="url(#mask0_922_2246)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.249 3.5C8.52702 3.5 5.49902 6.557 5.49902 10.313C5.49902 15.092 11.123 19.748 12.249 19.996C13.375 19.747 18.999 15.091 18.999 10.313C18.999 6.557 15.971 3.5 12.249 3.5ZM12.249 21.5C10.455 21.5 3.99902 15.948 3.99902 10.313C3.99902 5.729 7.70002 2 12.249 2C16.798 2 20.499 5.729 20.499 10.313C20.499 15.948 14.043 21.5 12.249 21.5Z"
                      fill={light ? "#000000" : data?.primaryColor}
                      className="duration-500"
                    />
                  </g>
                </svg>
              </button>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}

        {data?.vcard_add_contact_at_top === true ? (
          <div
            className="w-full flex flex-row justify-center items-center space-x-[10px] rounded-[4px] mt-[20px] py-[14px] cursor-pointer hover:opacity-80 duration-500"
            style={{ backgroundColor: data?.primaryColor }}
            onClick={() => {
              saveVcard();
            }}
            id="vcardContact"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_797_11851"
                maskUnits="userSpaceOnUse"
                x="3"
                y="12"
                width="14"
                height="7"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.33301 12.0801H16.5329V18.2251H3.33301V12.0801Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_797_11851)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.93384 13.3301C6.38301 13.3301 4.58301 13.9401 4.58301 15.1442C4.58301 16.3592 6.38301 16.9751 9.93384 16.9751C13.4838 16.9751 15.283 16.3651 15.283 15.1609C15.283 13.9459 13.4838 13.3301 9.93384 13.3301ZM9.93384 18.2251C8.30134 18.2251 3.33301 18.2251 3.33301 15.1442C3.33301 12.3976 7.10051 12.0801 9.93384 12.0801C11.5663 12.0801 16.533 12.0801 16.533 15.1609C16.533 17.9076 12.7663 18.2251 9.93384 18.2251Z"
                  fill={light ? "black" : "white"}
                  className="duration-500"
                />
              </g>
              <mask
                id="mask1_797_11851"
                maskUnits="userSpaceOnUse"
                x="5"
                y="1"
                width="10"
                height="10"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.50781 1.66675H14.3578V10.5156H5.50781V1.66675Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_797_11851)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.93367 2.8565C8.14951 2.8565 6.69784 4.30734 6.69784 6.0915C6.69201 7.86984 8.13284 9.31984 9.90951 9.3265L9.93367 9.9215V9.3265C11.717 9.3265 13.1678 7.87484 13.1678 6.0915C13.1678 4.30734 11.717 2.8565 9.93367 2.8565ZM9.93367 10.5157H9.90701C7.47201 10.5082 5.49951 8.52234 5.50784 6.089C5.50784 3.6515 7.49284 1.6665 9.93367 1.6665C12.3737 1.6665 14.3578 3.6515 14.3578 6.0915C14.3578 8.5315 12.3737 10.5157 9.93367 10.5157Z"
                  fill={light ? "black" : "white"}
                  className="duration-500"
                />
              </g>
            </svg>
            <p
              className={`duration-500 ${isEnglish ? 'text-lg' : 'text-sm leading-3 w-8/12'}`}
              style={{
                fontFamily: data?.font_text,
                color: light ? "#000000" : "#ffffff",
              }}
            >
             {t('vcard.add_account')}
            </p>
          </div>
        ) : (
          <></>
        )}

        {data?.vcard_note ? (
          <p
            className="text-xs xxs:text-sm xs:text-lg text-[#767C83] text-center mt-6 whitespace-pre-line text-balance"
            style={{ fontFamily: data?.font_text, overflowWrap: "anywhere" }}
            id="vcardNotes"
          >
            {data.vcard_note}
          </p>
        ) : (
          <></>
        )}
        <div className="w-full">
          <ContactDetails 
            fontText={data?.font_text}
            phones={data?.vcard_phone}
            emails={data?.vcard_email}
            websites={data?.vcard_website}
            location={{
              offer_street:data?.offer_street,
              offer_city:data?.offer_city,
              offer_number:data?.offer_number,
              offer_postalcode:data?.offer_postalcode,
              offer_state:data?.offer_state,
              offer_country:data?.offer_country,
              latitude:data?.latitude,
              longitude:data?.longitude,
              offer_url1:data?.offer_url1
            }}
            company={data?.vcard_company}
            profession={data?.vcard_profession}
            t={t}
            className="mt-6"
          />

          <SocialNetWorks data={data} title={t('links.findMe')} className="mt-[20px]"/>

          {data?.vcard_add_contact_at_top === false ? (
            <div
              className="w-full flex flex-row justify-center items-center space-x-[10px] rounded-[4px] mt-[20px] py-[14px] cursor-pointer hover:opacity-80 duration-500"
              style={{ backgroundColor: data?.primaryColor }}
              onClick={() => {
                saveVcard();
              }}
              id="vcardContact"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rtl:ml-2"
              >
                <mask
                  id="mask0_797_11851"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="12"
                  width="14"
                  height="7"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.33301 12.0801H16.5329V18.2251H3.33301V12.0801Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_797_11851)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.93384 13.3301C6.38301 13.3301 4.58301 13.9401 4.58301 15.1442C4.58301 16.3592 6.38301 16.9751 9.93384 16.9751C13.4838 16.9751 15.283 16.3651 15.283 15.1609C15.283 13.9459 13.4838 13.3301 9.93384 13.3301ZM9.93384 18.2251C8.30134 18.2251 3.33301 18.2251 3.33301 15.1442C3.33301 12.3976 7.10051 12.0801 9.93384 12.0801C11.5663 12.0801 16.533 12.0801 16.533 15.1609C16.533 17.9076 12.7663 18.2251 9.93384 18.2251Z"
                    fill={light ? "black" : "white"}
                  />
                </g>
                <mask
                  id="mask1_797_11851"
                  maskUnits="userSpaceOnUse"
                  x="5"
                  y="1"
                  width="10"
                  height="10"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.50781 1.66675H14.3578V10.5156H5.50781V1.66675Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_797_11851)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.93367 2.8565C8.14951 2.8565 6.69784 4.30734 6.69784 6.0915C6.69201 7.86984 8.13284 9.31984 9.90951 9.3265L9.93367 9.9215V9.3265C11.717 9.3265 13.1678 7.87484 13.1678 6.0915C13.1678 4.30734 11.717 2.8565 9.93367 2.8565ZM9.93367 10.5157H9.90701C7.47201 10.5082 5.49951 8.52234 5.50784 6.089C5.50784 3.6515 7.49284 1.6665 9.93367 1.6665C12.3737 1.6665 14.3578 3.6515 14.3578 6.0915C14.3578 8.5315 12.3737 10.5157 9.93367 10.5157Z"
                    fill={light ? "black" : "white"}
                  />
                </g>
              </svg>
              <p
                className={`${isEnglish ? 'text-lg' : 'text-sm leading-3 w-8/12'}`}
                style={{
                  fontFamily: data?.font_text,
                  color: light ? "#000000" : "#ffffff",
                }}
              >
                {t('vcard.add_account')}
              </p>
            </div>
          ) : (
            <></>
          )}
          {data?.vcard_add_contact_at_top === 'falseprev' ? (
            <div
              className="w-full flex flex-row justify-center items-center space-x-[10px] rounded-[4px] mt-[20px] py-[14px] cursor-pointer hover:opacity-80 duration-500"
              style={{ backgroundColor: data?.primaryColor }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_797_11851"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="12"
                  width="14"
                  height="7"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.33301 12.0801H16.5329V18.2251H3.33301V12.0801Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_797_11851)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.93384 13.3301C6.38301 13.3301 4.58301 13.9401 4.58301 15.1442C4.58301 16.3592 6.38301 16.9751 9.93384 16.9751C13.4838 16.9751 15.283 16.3651 15.283 15.1609C15.283 13.9459 13.4838 13.3301 9.93384 13.3301ZM9.93384 18.2251C8.30134 18.2251 3.33301 18.2251 3.33301 15.1442C3.33301 12.3976 7.10051 12.0801 9.93384 12.0801C11.5663 12.0801 16.533 12.0801 16.533 15.1609C16.533 17.9076 12.7663 18.2251 9.93384 18.2251Z"
                    fill={light ? "black" : "white"}
                  />
                </g>
                <mask
                  id="mask1_797_11851"
                  maskUnits="userSpaceOnUse"
                  x="5"
                  y="1"
                  width="10"
                  height="10"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.50781 1.66675H14.3578V10.5156H5.50781V1.66675Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_797_11851)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.93367 2.8565C8.14951 2.8565 6.69784 4.30734 6.69784 6.0915C6.69201 7.86984 8.13284 9.31984 9.90951 9.3265L9.93367 9.9215V9.3265C11.717 9.3265 13.1678 7.87484 13.1678 6.0915C13.1678 4.30734 11.717 2.8565 9.93367 2.8565ZM9.93367 10.5157H9.90701C7.47201 10.5082 5.49951 8.52234 5.50784 6.089C5.50784 3.6515 7.49284 1.6665 9.93367 1.6665C12.3737 1.6665 14.3578 3.6515 14.3578 6.0915C14.3578 8.5315 12.3737 10.5157 9.93367 10.5157Z"
                    fill={light ? "black" : "white"}
                  />
                </g>
              </svg>
              <p
                className={`${isEnglish ? 'text-lg' : 'text-sm leading-3 w-8/12'}`}
                style={{
                  fontFamily: data?.font_text,
                  color: light ? "#000000" : "#ffffff",
                }}
              >
                {t('vcard.add_account')}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vcard;
