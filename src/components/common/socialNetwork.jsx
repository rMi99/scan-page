import linkFixer from "../../utils/LinkFixer";
import capitalizeParagraph from "../../utils/capitalizeParagraph";

const SocialNetWorks = ({data,title,className,boldheading})=>{
    return(
        data?.socialLinks?.length ? (
            <div
              className={`${className} w-full flex flex-col items-start justify-center mb-[20px]`}
              style={{ fontFamily: data?.font_text }}
            >
              <p
                className={`${boldheading === "true" ? "font-bold" : "font-medium"} text-lg xs:text-xl text-[#131D29] mb-[10px]`}
                style={{ fontFamily: data?.font_text }}
              >
                {title}
              </p>
              <div className="w-full space-y-[8px] xs:space-y-[15px]">
                {data?.socialLinks.map((e,i) => (
                  <a
                    key={i}
                    href={linkFixer(e.name)}
                    target="_blank"
                    className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-90"
                    rel="noreferrer"
                    id={`socialBlock_${i}`}
                  >
                    <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                      <div className="space-x-[8px] xs:space-x-[12px] sm:space-x-[20px] flex flex-row items-center">
                        <img
                          src={e.url}
                          className="w-[44px] rtl:ml-2"
                          alt={e.icon}
                        />
                        <div className="flex flex-col justify-center text-left">
                          <p
                            className="text-sm xs:text-base sm:text-xl text-[#131D29] font-medium break-words rtl:text-base rtl:leading-4 rtl:text-right"
                            style={{ fontFamily: data?.font_text }}
                          >
                            {capitalizeParagraph(e.icon === 'twitter' ? 'X' : e.icon)}
                          </p>
                          <p
                            className="text-[10px] xs:text-xs text-[#767C83] rtl:text-right"
                            style={{ fontFamily: data?.font_text }}
                          >
                            {e.text}
                          </p>
                        </div>
                      </div>
                      <svg
                        className="mr-[5px] rtl:rotate-180"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z"
                          fill="#767C83"
                        />
                        <path
                          d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z"
                          fill="#767C83"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
              <div id="socialBlock"></div>
            </div>
          ) : null
    )
}

export default SocialNetWorks;