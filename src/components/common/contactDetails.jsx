import linkFixer from "../../utils/LinkFixer";
import ShortenedUrl from "../../utils/shortenedurl";

export default function ContactDetails({
    fontText,
    phones,
    emails,
    websites,
    company,
    profession,
    location,
    t,contactName,
    className='',
    showContactTitle=false
}){
    return <div
        className={`py-[20px] px-[12px] xs:p-[20px] rounded-[4px] flex flex-col items-start justify-center w-full shadow-[1px_6px_30px_rgba(0,31,14,0.05)] ${className}`}
        style={{ fontFamily:fontText }}
    >
        {showContactTitle ? (
            <>
            <div className="flex flex-row justify-start items-center space-x-[17px] w-full mb-[10px]">
                <div className="w-[44px] h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center ">
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
                    style={{ fontFamily:fontText }}
                >
                    {t('menu.contact')}
                </p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full mb-[15px]"></div>
            </>
        ) : null}
        {/* Name */}
        {contactName ? (
            <div className="w-full" id="contactName">
                <button className="flex flex-row items-center space-x-[15px] w-full cursor-pointer hover:opacity-80">
                    <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                            id="mask0_797_12711"
                            maskUnits="userSpaceOnUse"
                            x="3"
                            y="10"
                            width="12"
                            height="7"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 10.8721H14.8799V16.4026H3V10.8721Z"
                                fill="white"
                            />
                            </mask>
                            <g mask="url(#mask0_797_12711)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.94075 11.9971C5.745 11.9971 4.125 12.5461 4.125 13.6298C4.125 14.7233 5.745 15.2776 8.94075 15.2776C12.1357 15.2776 13.755 14.7286 13.755 13.6448C13.755 12.5513 12.1357 11.9971 8.94075 11.9971ZM8.94075 16.4026C7.4715 16.4026 3 16.4026 3 13.6298C3 11.1578 6.39075 10.8721 8.94075 10.8721C10.41 10.8721 14.88 10.8721 14.88 13.6448C14.88 16.1168 11.49 16.4026 8.94075 16.4026Z"
                                fill="#767C83"
                            />
                            </g>
                            <mask
                            id="mask1_797_12711"
                            maskUnits="userSpaceOnUse"
                            x="4"
                            y="1"
                            width="9"
                            height="9"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.95703 1.5H12.9221V9.46395H4.95703V1.5Z"
                                fill="white"
                            />
                            </mask>
                            <g mask="url(#mask1_797_12711)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.9403 2.57076C7.33455 2.57076 6.02805 3.87651 6.02805 5.48226C6.0228 7.08276 7.31955 8.38776 8.91855 8.39376L8.9403 8.92926V8.39376C10.5453 8.39376 11.8511 7.08726 11.8511 5.48226C11.8511 3.87651 10.5453 2.57076 8.9403 2.57076ZM8.9403 9.46401H8.91631C6.72481 9.45726 4.94955 7.67001 4.95705 5.48001C4.95705 3.28626 6.74355 1.49976 8.9403 1.49976C11.1363 1.49976 12.9221 3.28626 12.9221 5.48226C12.9221 7.67826 11.1363 9.46401 8.9403 9.46401Z"
                                fill="#767C83"
                            />
                            </g>
                        </svg>
                    </div>
                    <div className="flex-col text-left">
                        <p
                            className="text-xs text-[#767C83]"
                            style={{ fontFamily:fontText }}
                        >
                            {t('bushiness.name')}
                        </p>
                        <p
                            className="text-sm xs:text-base text-black font-medium break-words"
                            style={{ fontFamily:fontText }}
                        >
                            {contactName}
                        </p>
                    </div>
                </button>
                <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            </div>
        ) : (
        <></>
        )}

        {/* phone */}
        {phones?.length ? (
        <div className="w-full" id="vcardPhone">
            {phones.map((e,i) => (
            <div className="w-full" key={i}>
                <button
                onClick={() => {
                    if (e.number === "555-100-1000") {
                    //do noting :D
                    } else {
                    window.open(`tel:${e.number}`, "_self");
                    }
                }}
                
                className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80"
                >
                    <PhoneTypeIcon type={e.type} />
                    <div className="flex flex-col justify-center text-left w-full truncate">
                        <p className="text-[10px] xxs:text-xs text-[#767C83]">
                        {e.label
                            ? e.label
                            : t('vcard.phone')}
                        </p>
                        <p
                        className="text-xs xxs:text-sm xs:text-base text-black font-medium truncate"
                        style={{ fontFamily:fontText }}
                        >
                        {e.number}
                        </p>
                    </div>
                </button>
                <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            </div>
            ))}
        </div>
        ) : (
        <></>
        )}
        {/* email */}
        {emails?.length ? (
        <div className="w-full" id="vcardEmail">
            {emails.map((e,i) => (
            <div className="w-full" key={i}>
                <button
                onClick={() => {
                    if (e.email === "John.Carlson@gmail.com" || e.email === "Boulangerie@gmail.com" || e.email === "TastyFood@gmail.com") {
                    //do noting :D
                    } else {
                    window.open(
                        "mailto:" + e.email,
                        "_blank"
                    );
                    }
                }}
                className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80"
                >
                <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
                    <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.83279 10.0986C8.33104 10.0986 7.83079 9.93287 7.41229 9.60137L4.04854 6.88937C3.80629 6.69437 3.76879 6.33962 3.96304 6.09812C4.15879 5.85737 4.51279 5.81912 4.75429 6.01337L8.11504 8.72237C8.53729 9.05687 9.13204 9.05687 9.55729 8.71937L12.8843 6.01487C13.1258 5.81762 13.4798 5.85512 13.6763 6.09662C13.872 6.33737 13.8353 6.69137 13.5945 6.88787L10.2615 9.59687C9.84004 9.93137 9.33604 10.0986 8.83279 10.0986Z"
                        fill="#767C83"
                    />
                    <mask
                        id="mask0_797_11802"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="1"
                        width="17"
                        height="16"
                    >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.75 1.5H16.8749V16.125H0.75V1.5Z"
                        fill="white"
                        />
                    </mask>
                    <g mask="url(#mask0_797_11802)">
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.12925 15H12.4943C12.4958 14.9985 12.5017 15 12.5063 15C13.362 15 14.121 14.694 14.703 14.1128C15.3787 13.44 15.75 12.4732 15.75 11.391V6.24C15.75 4.14525 14.3805 2.625 12.4943 2.625H5.13075C3.2445 2.625 1.875 4.14525 1.875 6.24V11.391C1.875 12.4732 2.247 13.44 2.922 14.1128C3.504 14.694 4.26375 15 5.11875 15H5.12925ZM5.1165 16.125C3.95925 16.125 2.92575 15.705 2.12775 14.91C1.239 14.0235 0.75 12.774 0.75 11.391V6.24C0.75 3.53775 2.63325 1.5 5.13075 1.5H12.4943C14.9918 1.5 16.875 3.53775 16.875 6.24V11.391C16.875 12.774 16.386 14.0235 15.4972 14.91C14.7 15.7042 13.6658 16.125 12.5063 16.125H12.4943H5.13075H5.1165Z"
                        fill="#767C83"
                        />
                    </g>
                    </svg>
                </div>
                <div className="flex flex-col justify-center text-left w-full truncate">
                    <p className="text-[10px] xxs:text-xs text-[#767C83]">
                    {e.title ? e.title : t('vcard.email')}
                    </p>
                    <p
                    className="text-xs xxs:text-sm xs:text-base text-black font-medium truncate"
                    style={{ fontFamily: fontText }}
                    >
                    {e.email}
                    </p>
                </div>
                </button>
                <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            </div>
            ))}
        </div>
        ) : (
        <></>
        )}
        {/* website */}
        {websites?.length ? (
        <div className="w-full" id="vcardWeb">
            {websites.map((e,i) => (
            <div className="w-full" key={i}>
                <button
                onClick={() => {
                    if (e.website === "My Website" || e.website === "www.boulangerie.com" || e.website === "www.tastyfood.com" || e.website === "john-carlson.com") {
                    //do noting :D
                    } else {
                    window.open(linkFixer(e.website), "_blank");
                    }
                }}
                className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80"
                >
                <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
                    <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z"
                        fill="#767C83"
                    />
                    <path
                        d="M6.74969 16.3125H5.99969C5.69219 16.3125 5.43719 16.0575 5.43719 15.75C5.43719 15.4425 5.67719 15.195 5.98469 15.1875C4.80719 11.1675 4.80719 6.8325 5.98469 2.8125C5.67719 2.805 5.43719 2.5575 5.43719 2.25C5.43719 1.9425 5.69219 1.6875 5.99969 1.6875H6.74969C6.92969 1.6875 7.10219 1.7775 7.20719 1.92C7.31219 2.07 7.34219 2.2575 7.28219 2.43C5.87219 6.6675 5.87219 11.3325 7.28219 15.5775C7.34219 15.75 7.31219 15.9375 7.20719 16.0875C7.10219 16.2225 6.92969 16.3125 6.74969 16.3125Z"
                        fill="#767C83"
                    />
                    <path
                        d="M11.2498 16.3125C11.1898 16.3125 11.1298 16.305 11.0698 16.2825C10.7773 16.185 10.6123 15.8625 10.7173 15.57C12.1273 11.3325 12.1273 6.66751 10.7173 2.42251C10.6198 2.13001 10.7773 1.80751 11.0698 1.71001C11.3698 1.61251 11.6848 1.77001 11.7823 2.06251C13.2748 6.53251 13.2748 11.4525 11.7823 15.915C11.7073 16.1625 11.4823 16.3125 11.2498 16.3125Z"
                        fill="#767C83"
                    />
                    <path
                        d="M9 12.9001C6.9075 12.9001 4.8225 12.6076 2.8125 12.0151C2.805 12.3151 2.5575 12.5626 2.25 12.5626C1.9425 12.5626 1.6875 12.3076 1.6875 12.0001V11.2501C1.6875 11.0701 1.7775 10.8976 1.92 10.7926C2.07 10.6876 2.2575 10.6576 2.43 10.7176C6.6675 12.1276 11.34 12.1276 15.5775 10.7176C15.75 10.6576 15.9375 10.6876 16.0875 10.7926C16.2375 10.8976 16.32 11.0701 16.32 11.2501V12.0001C16.32 12.3076 16.065 12.5626 15.7575 12.5626C15.45 12.5626 15.2025 12.3226 15.195 12.0151C13.1775 12.6076 11.0925 12.9001 9 12.9001Z"
                        fill="#767C83"
                    />
                    <path
                        d="M15.7498 7.31252C15.6898 7.31252 15.6298 7.30502 15.5698 7.28252C11.3323 5.87252 6.65984 5.87252 2.42234 7.28252C2.12234 7.38002 1.80734 7.22252 1.70984 6.93002C1.61984 6.63002 1.77734 6.31502 2.06984 6.21752C6.53984 4.72502 11.4598 4.72502 15.9223 6.21752C16.2148 6.31502 16.3798 6.63752 16.2748 6.93002C16.2073 7.16252 15.9823 7.31252 15.7498 7.31252Z"
                        fill="#767C83"
                    />
                    </svg>
                </div>
                <div className="flex flex-col justify-center text-left w-full truncate rtl:text-right">
                    <p className="text-[10px] xxs:text-xs text-[#767C83]">
                    {e.title ? e.title : t('vcard.website')}
                    </p>
                    <p
                    className="text-xs xxs:text-sm xs:text-base text-black font-medium truncate"
                    style={{ fontFamily: fontText }}
                    >
                    {e.website === "My Website" ? (
                        t('vcard.website_title')
                    ) : (
                        <ShortenedUrl url={e.website} />
                    )}
                    </p>
                </div>
                </button>
                <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
            </div>
            ))}
        </div>
        ) : (
        <></>
        )}
        {/* Location */}
        {location?.offer_street ||
        location?.offer_city ||
        location?.offer_number ||
        location?.offer_postalcode ||
        location?.offer_state ||
        location?.offer_country ||
        location?.latitude ||
        location?.longitude ||
        location?.offer_url1 ? (
        <div className="w-full" id="LocationBlock">
            <div className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80" id="locationBlock">
            <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
                <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.1875 6.375C8.46375 6.375 7.875 6.96375 7.875 7.68825C7.875 8.412 8.46375 9 9.1875 9C9.91125 9 10.5 8.412 10.5 7.68825C10.5 6.96375 9.91125 6.375 9.1875 6.375M9.1875 10.125C7.8435 10.125 6.75 9.03225 6.75 7.68825C6.75 6.3435 7.8435 5.25 9.1875 5.25C10.5315 5.25 11.625 6.3435 11.625 7.68825C11.625 9.03225 10.5315 10.125 9.1875 10.125"
                    fill="#767C83"
                />
                <mask
                    id="mask0_797_11781"
                    maskUnits="userSpaceOnUse"
                    x="3"
                    y="1"
                    width="13"
                    height="16"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 1.5H15.3746V16.125H3V1.5Z"
                    fill="white"
                    />
                </mask>
                <g mask="url(#mask0_797_11781)">
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.1875 2.625C6.396 2.625 4.125 4.91775 4.125 7.73475C4.125 11.319 8.343 14.811 9.1875 14.997C10.032 14.8103 14.25 11.3183 14.25 7.73475C14.25 4.91775 11.979 2.625 9.1875 2.625V2.625ZM9.1875 16.125C7.842 16.125 3 11.961 3 7.73475C3 4.29675 5.77575 1.5 9.1875 1.5C12.5992 1.5 15.375 4.29675 15.375 7.73475C15.375 11.961 10.533 16.125 9.1875 16.125V16.125Z"
                    fill="#767C83"
                    />
                </g>
                </svg>
            </div>
            <div className="flex flex-col justify-center space-y-[10px] xs:space-y-[15px]">
                {location?.offer_street ||
                location?.offer_city ||
                location?.offer_number ||
                location?.offer_postalcode ||
                location?.offer_state ||
                location?.offer_country ? (
                <div className="flex-col text-left">
                    <div className="w-full space-y-1 xxs:space-y-0">
                    <p className="text-[10px] xxs:text-xs text-[#767C83]">
                        {t('vcard.location')}
                    </p>
                    <p
                        className="text-xs xxs:text-sm xs:text-base text-black font-medium"
                        style={{ fontFamily: fontText }}
                    >
                        {(location?.street_number &&
                        location?.offer_number
                        ? location.offer_number + " "
                        : "") +
                        (location?.offer_street
                            ? location.offer_street + ""
                            : "") +
                        (!location?.street_number &&
                        location?.offer_number
                            ? " " + location.offer_number + ", "
                            : "") +
                        ((location?.street_number &&
                            location?.offer_number !== "") ||
                        (location?.street_number &&
                            location?.offer_number === "" &&
                            location.offer_street !== "") ||
                        (!location?.street_number &&
                            location?.offer_number === "" &&
                            location.offer_street !== "")
                            ? ", "
                            : "") +
                        (location?.offer_city ? location.offer_city + "," : "") +
                        (location?.offer_postalcode
                            ? " " + location.offer_postalcode + ", "
                            : "") +
                        (location?.offer_state
                            ? location?.offer_state + ", "
                            : "") +
                        (location?.offer_country || "")}
                    </p>
                    </div>
                </div>
                ) : (
                <></>
                )}
                <div className="flex">
                {location.ship_address ||
                location.offer_city ||
                location.offer_state ||
                location.offer_country ||
                location.offer_street ||
                location.offer_postalcode ||
                location.offer_url1 ||
                location.longitude ||
                location.latitude ? (
                    <button
                    onClick={() => {
                        if (location.offer_url1 === "#") {
                        //
                        } else if (
                        location.ship_address ||
                        location.offer_city ||
                        location.offer_state ||
                        location.offer_country ||
                        location.offer_street ||
                        location.offer_postalcode
                        ) {
                        window.open(
                            "http://maps.google.com/?q=" +
                            (location?.ship_address ||
                                (location?.offer_street
                                ? location.offer_street + " "
                                : "") +
                                (location?.offer_number
                                    ? location.offer_number + " "
                                    : "") +
                                (location?.offer_postalcode
                                    ? location.offer_postalcode + " "
                                    : "") +
                                (location?.offer_city
                                    ? location?.offer_city + " "
                                    : "") +
                                (location?.offer_state
                                    ? location?.offer_state + " "
                                    : "") +
                                location?.offer_country),
                            "_blank"
                        );
                        } else if (location.offer_url1) {
                        window.open(location.offer_url1);
                        } else {
                        window.open(
                            "http://maps.google.com/?q=" +
                            (location?.latitude + "," + location?.longitude)
                        );
                        }
                    }}
                    className="text-[10px] text-black px-[14px] py-[6px] bg-[#EBF8F6] rounded-[22px]"
                    >
                    {t('vcard.show_on_map')}
                    </button>
                ) : (
                    <></>
                )}
                </div>
            </div>
            </div>
            <div className="w-full h-[1px] my-[15px] bg-[#F2F2F2] rounded-full"></div>
        </div>
        ) : (
        <></>
        )}

        {/* company */}
        {company || profession ? (
        <button className="flex flex-row space-x-[10px] xs:space-x-[16px] w-full cursor-pointer hover:opacity-80" id="vcardCompany">
            <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.99609 13.0702C8.68559 13.0702 8.43359 12.8182 8.43359 12.5077V10.605C8.43359 10.2945 8.68559 10.0425 8.99609 10.0425C9.30659 10.0425 9.55859 10.2945 9.55859 10.605V12.5077C9.55859 12.8182 9.30659 13.0702 8.99609 13.0702Z"
                fill="#767C83"
                />
                <mask
                id="mask0_797_11788"
                maskUnits="userSpaceOnUse"
                x="1"
                y="3"
                width="16"
                height="9"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 3.43506H16.4924V11.1683H1.5V3.43506Z"
                    fill="white"
                />
                </mask>
                <g mask="url(#mask0_797_11788)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.625 8.54481C4.407 9.51306 6.654 10.0433 8.9925 10.0433C11.3355 10.0433 13.5848 9.51306 15.3675 8.54481V6.29331C15.3675 5.33706 14.5942 4.56006 13.6425 4.56006H4.3575C3.402 4.56006 2.625 5.33406 2.625 6.28581V8.54481ZM8.9925 11.1683C6.33375 11.1683 3.771 10.5248 1.77825 9.35781C1.60575 9.25731 1.5 9.07281 1.5 8.87256V6.28581C1.5 4.71381 2.78175 3.43506 4.3575 3.43506H13.6425C15.2145 3.43506 16.4925 4.71681 16.4925 6.29331V8.87256C16.4925 9.07281 16.386 9.25731 16.2142 9.35781C14.2215 10.5248 11.6565 11.1683 8.9925 11.1683Z"
                    fill="#767C83"
                />
                </g>
                <mask
                id="mask1_797_11788"
                maskUnits="userSpaceOnUse"
                x="5"
                y="1"
                width="8"
                height="4"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.80859 1.50024H12.1836V4.55717H5.80859V1.50024Z"
                    fill="white"
                />
                </mask>
                <g mask="url(#mask1_797_11788)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.6211 4.55724C11.3106 4.55724 11.0586 4.30524 11.0586 3.99474V3.72024C11.0586 3.11649 10.5673 2.62524 9.96359 2.62524H8.02859C7.42484 2.62524 6.93359 3.11649 6.93359 3.72024V3.99474C6.93359 4.30524 6.68159 4.55724 6.37109 4.55724C6.06059 4.55724 5.80859 4.30524 5.80859 3.99474V3.72024C5.80859 2.49624 6.80459 1.50024 8.02859 1.50024H9.96359C11.1876 1.50024 12.1836 2.49624 12.1836 3.72024V3.99474C12.1836 4.30524 11.9316 4.55724 11.6211 4.55724Z"
                    fill="#767C83"
                />
                </g>
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3459 16.3052H4.64593C3.08968 16.3052 1.77943 15.0895 1.66168 13.537L1.51918 11.6552C1.49593 11.3455 1.72843 11.0747 2.03818 11.0515C2.34943 11.0402 2.61793 11.26 2.64193 11.5705L2.78368 13.4515C2.85718 14.4205 3.67468 15.1802 4.64593 15.1802H13.3459C14.3172 15.1802 15.1354 14.4205 15.2082 13.4515L15.3507 11.5705C15.3747 11.26 15.6499 11.0395 15.9544 11.0515C16.2642 11.0747 16.4959 11.3455 16.4727 11.6552L16.3302 13.537C16.2124 15.0895 14.9022 16.3052 13.3459 16.3052Z"
                fill="#767C83"
                />
            </svg>
            </div>
            <div className="flex flex-col justify-center text-left">
            {profession ? (
                <>
                <p className="text-[10px] xxs:text-xs text-[#767C83]">
                    {company}
                </p>
                <p
                    className="text-xs xxs:text-sm xs:text-base text-black font-medium"
                    style={{ fontFamily:fontText }}
                >
                    {profession}
                </p>
                </>
            ) : (
                <p className="text-[10px] xxs:text-sm xs:text-base text-black font-medium">
                {company}
                </p>
            )}
            </div>
        </button>
        ) : (
        <></>
        )}
    </div>
}

const PhoneTypeIcon = ({type})=>{
    switch(type){
        case "home":
            return <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                  fill="#767C83"
                />
              </svg>
            </div>
        case "mobile-phone":
            return <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                  fill="#767C83"
                />
              </svg>
            </div>
            
        case"work" :
            return <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                  fill="#767C83"
                />
              </svg>
            </div>
            
        case "fax" :
            return <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"
                  fill="#767C83"
                />
              </svg>
            </div>
            
        default :
            return <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_797_11795"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 1.50024H16.8747V16.8749H1.5V1.50024Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_797_11795)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.26931 3.79562C3.27081 3.79562 3.23331 3.83462 3.18606 3.88112C3.00456 4.05737 2.62881 4.42412 2.62506 5.19137C2.61906 6.26462 3.32481 8.25737 6.72306 11.6549C10.1056 15.0359 12.0953 15.7499 13.1708 15.7499H13.1866C13.9538 15.7461 14.3198 15.3696 14.4968 15.1889C14.5508 15.1334 14.5943 15.0929 14.6251 15.0674C15.3721 14.3159 15.7546 13.7564 15.7508 13.3979C15.7456 13.0319 15.2903 12.5991 14.6611 12.0006C14.4608 11.8101 14.2433 11.6031 14.0138 11.3736C13.4191 10.7804 13.1243 10.8816 12.4763 11.1096C11.5801 11.4239 10.3501 11.8514 8.43906 9.93962C6.52506 8.02712 6.95331 6.79862 7.26681 5.90237C7.49331 5.25437 7.59681 4.95887 7.00131 4.36337C6.76806 4.13087 6.55881 3.91037 6.36606 3.70787C5.77131 3.08237 5.34231 2.63012 4.97856 2.62487H4.97256C4.61331 2.62487 4.05531 3.00887 3.26556 3.79862C3.26781 3.79637 3.26856 3.79562 3.26931 3.79562ZM13.1716 16.8749C11.3026 16.8749 8.86581 15.3869 5.92806 12.4506C2.97906 9.50237 1.48881 7.05812 1.50006 5.18537C1.50681 3.94787 2.15556 3.31412 2.39931 3.07637C2.41206 3.06062 2.45556 3.01787 2.47056 3.00287C3.54606 1.92662 4.27131 1.49162 4.99281 1.49987C5.83056 1.51112 6.42681 2.13812 7.18131 2.93237C7.36806 3.12887 7.57056 3.34262 7.79631 3.56762C8.89131 4.66262 8.57931 5.55587 8.32881 6.27287C8.05581 7.05512 7.81956 7.73012 9.23406 9.14462C10.6501 10.5591 11.3251 10.3229 12.1043 10.0476C12.8221 9.79712 13.7131 9.48362 14.8096 10.5786C15.0316 10.8006 15.2423 11.0009 15.4366 11.1861C16.2346 11.9444 16.8646 12.5436 16.8751 13.3836C16.8841 14.0999 16.4491 14.8296 15.3751 15.9044L14.8996 15.5819L15.3016 15.9749C15.0638 16.2186 14.4308 16.8681 13.1926 16.8749H13.1716Z"
                    fill="#767C83"
                  />
                </g>
              </svg>
            </div>
            
    }
}