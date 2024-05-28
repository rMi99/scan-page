import "../../index.css";
import useUpdateDomTitle from "../../../../utils/updateDomTitle";
import useLanguage from "../../../../utils/useLanguage";
import { useAdjustZoom } from "../../../../utils/utils";

let WIFIPreview = ({networkName}) => {

  const t = useLanguage();

  useUpdateDomTitle('Online QR Generator - Scanned Page | Wifi',"#707BFF");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="hidden md:block top-0 absolute" width="2066" height="480" viewBox="0 0 2066 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H2066V343.426C2066 343.426 1616.99 312.884 1033 343.426C449.011 373.968 0 343.426 0 343.426V0Z" fill="#707BFF" />
        </svg>
        <svg className="block md:hidden set-top-pos absolute" width="770" height="480" viewBox="0 0 770 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V343.426C770 343.426 602.653 312.884 385 343.426C167.347 373.968 0 343.426 0 343.426V0Z" fill="#707BFF" />
        </svg>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[50px] xs:mt-[82px] w-full max-w-[700px] px-[16px]"
      >
        <div className="flex flex-col items-center justify-center w-full rounded-[4px] mb-[30px] xs:mb-[38px] pb-[43px] px-[14px] xs:px-[20px] pt-[15px] xs:pt-[37px] bg-white shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <svg className="hidden xs:block" width="228" height="228" viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M181.354 119.605C179.834 119.605 178.314 119.13 176.984 118.085C138.699 88.5402 89.2039 88.5402 50.9189 118.085C47.7839 120.46 43.3189 119.89 40.9439 116.85C38.5689 113.715 39.1389 109.25 42.1789 106.875C85.7839 73.1503 142.119 73.1503 185.629 106.875C188.764 109.25 189.334 113.715 186.864 116.85C185.629 118.655 183.539 119.605 181.354 119.605Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M209 86.5453C207.48 86.5453 205.96 86.0705 204.63 85.0255C149.53 42.4655 78.3751 42.4655 23.3701 85.0255C20.2351 87.4005 15.7701 86.8305 13.3951 83.7905C11.0201 80.6555 11.59 76.1903 14.63 73.8153C74.955 27.1703 152.95 27.1703 213.37 73.8153C216.505 76.1903 217.075 80.6555 214.605 83.7905C213.275 85.5955 211.09 86.5453 209 86.5453Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M163.496 154.28C161.976 154.28 160.456 153.805 159.126 152.76C131.766 131.575 96.3309 131.575 68.8759 152.76C65.7409 155.135 61.2759 154.565 58.9009 151.525C56.5259 148.39 57.0959 143.925 60.1359 141.55C92.8159 116.28 135.091 116.28 167.771 141.55C170.906 143.925 171.476 148.39 169.006 151.525C167.676 153.33 165.586 154.28 163.496 154.28Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M138.702 189.05C137.182 189.05 135.662 188.575 134.332 187.53C121.982 177.935 105.927 177.935 93.5771 187.53C90.4421 189.905 85.9771 189.335 83.6021 186.295C81.2271 183.16 81.797 178.695 84.837 176.32C102.507 162.64 125.307 162.64 142.977 176.32C146.112 178.695 146.682 183.16 144.212 186.295C142.977 188.005 140.887 189.05 138.702 189.05Z" fill="#9196D2" fillOpacity="0.39" />
          </svg>
          <svg className="block xs:hidden" width="150" height="150" viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M181.354 119.605C179.834 119.605 178.314 119.13 176.984 118.085C138.699 88.5402 89.2039 88.5402 50.9189 118.085C47.7839 120.46 43.3189 119.89 40.9439 116.85C38.5689 113.715 39.1389 109.25 42.1789 106.875C85.7839 73.1503 142.119 73.1503 185.629 106.875C188.764 109.25 189.334 113.715 186.864 116.85C185.629 118.655 183.539 119.605 181.354 119.605Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M209 86.5453C207.48 86.5453 205.96 86.0705 204.63 85.0255C149.53 42.4655 78.3751 42.4655 23.3701 85.0255C20.2351 87.4005 15.7701 86.8305 13.3951 83.7905C11.0201 80.6555 11.59 76.1903 14.63 73.8153C74.955 27.1703 152.95 27.1703 213.37 73.8153C216.505 76.1903 217.075 80.6555 214.605 83.7905C213.275 85.5955 211.09 86.5453 209 86.5453Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M163.496 154.28C161.976 154.28 160.456 153.805 159.126 152.76C131.766 131.575 96.3309 131.575 68.8759 152.76C65.7409 155.135 61.2759 154.565 58.9009 151.525C56.5259 148.39 57.0959 143.925 60.1359 141.55C92.8159 116.28 135.091 116.28 167.771 141.55C170.906 143.925 171.476 148.39 169.006 151.525C167.676 153.33 165.586 154.28 163.496 154.28Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M138.702 189.05C137.182 189.05 135.662 188.575 134.332 187.53C121.982 177.935 105.927 177.935 93.5771 187.53C90.4421 189.905 85.9771 189.335 83.6021 186.295C81.2271 183.16 81.797 178.695 84.837 176.32C102.507 162.64 125.307 162.64 142.977 176.32C146.112 178.695 146.682 183.16 144.212 186.295C142.977 188.005 140.887 189.05 138.702 189.05Z" fill="#9196D2" fillOpacity="0.39" />
          </svg>
          <p className="text-[#131D29] text-lg xs:text-2xl mt-[15px] font-medium">
            {networkName ? t('wifi.headerText').replace("Blue Hotel",networkName) : t('wifi.headerText')}
          </p>
        </div>
        <div className="w-full flex justify-center items-center bg-[#707BFE] rounded-[4px] mb-[12px] xs:mb-[23px] py-[15px] xs:py-[17px] cursor-pointer hover:opacity-80">
          <p className="text-lg xs:text-xl text-white font-medium">{t('wifi.connectButton')}</p>
        </div>
        <div className="w-full flex justify-center items-center bg-transparent border-[1px] border-[#707BFE] rounded-[4px] mb-[23px] py-[15px] xs:py-[17px] cursor-pointer hover:opacity-80">
          <p className="text-lg xs:text-xl text-[#707BFE] font-medium">{t('wifi.closeButton')}</p>
        </div>
      </div>
    </div>
  );
};

let WIFIShowcase = () => {
  const t = useLanguage();
  const container = useAdjustZoom();

  return (
    <div className="flex flex-col justify-center items-center" ref={container}>
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="block top-0 absolute" width="770" height="260" viewBox="0 0 770 357" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V343.426C770 343.426 602.653 312.884 385 343.426C167.347 373.968 0 343.426 0 343.426V0Z" fill="#707BFF" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center mt-[55px] w-full max-w-[700px] px-[11px]">
        <div className="flex flex-col items-center justify-center w-full rounded-[4px] mb-[25px] pb-[35px] px-[14px] pt-[28px] bg-white shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <svg className="hidden xs:block" width="228" height="228" viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M181.354 119.605C179.834 119.605 178.314 119.13 176.984 118.085C138.699 88.5402 89.2039 88.5402 50.9189 118.085C47.7839 120.46 43.3189 119.89 40.9439 116.85C38.5689 113.715 39.1389 109.25 42.1789 106.875C85.7839 73.1503 142.119 73.1503 185.629 106.875C188.764 109.25 189.334 113.715 186.864 116.85C185.629 118.655 183.539 119.605 181.354 119.605Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M209 86.5453C207.48 86.5453 205.96 86.0705 204.63 85.0255C149.53 42.4655 78.3751 42.4655 23.3701 85.0255C20.2351 87.4005 15.7701 86.8305 13.3951 83.7905C11.0201 80.6555 11.59 76.1903 14.63 73.8153C74.955 27.1703 152.95 27.1703 213.37 73.8153C216.505 76.1903 217.075 80.6555 214.605 83.7905C213.275 85.5955 211.09 86.5453 209 86.5453Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M163.496 154.28C161.976 154.28 160.456 153.805 159.126 152.76C131.766 131.575 96.3309 131.575 68.8759 152.76C65.7409 155.135 61.2759 154.565 58.9009 151.525C56.5259 148.39 57.0959 143.925 60.1359 141.55C92.8159 116.28 135.091 116.28 167.771 141.55C170.906 143.925 171.476 148.39 169.006 151.525C167.676 153.33 165.586 154.28 163.496 154.28Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M138.702 189.05C137.182 189.05 135.662 188.575 134.332 187.53C121.982 177.935 105.927 177.935 93.5771 187.53C90.4421 189.905 85.9771 189.335 83.6021 186.295C81.2271 183.16 81.797 178.695 84.837 176.32C102.507 162.64 125.307 162.64 142.977 176.32C146.112 178.695 146.682 183.16 144.212 186.295C142.977 188.005 140.887 189.05 138.702 189.05Z" fill="#9196D2" fillOpacity="0.39" />
          </svg>
          <svg className="block xs:hidden" width="165" height="165" viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M181.354 119.605C179.834 119.605 178.314 119.13 176.984 118.085C138.699 88.5402 89.2039 88.5402 50.9189 118.085C47.7839 120.46 43.3189 119.89 40.9439 116.85C38.5689 113.715 39.1389 109.25 42.1789 106.875C85.7839 73.1503 142.119 73.1503 185.629 106.875C188.764 109.25 189.334 113.715 186.864 116.85C185.629 118.655 183.539 119.605 181.354 119.605Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M209 86.5453C207.48 86.5453 205.96 86.0705 204.63 85.0255C149.53 42.4655 78.3751 42.4655 23.3701 85.0255C20.2351 87.4005 15.7701 86.8305 13.3951 83.7905C11.0201 80.6555 11.59 76.1903 14.63 73.8153C74.955 27.1703 152.95 27.1703 213.37 73.8153C216.505 76.1903 217.075 80.6555 214.605 83.7905C213.275 85.5955 211.09 86.5453 209 86.5453Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M163.496 154.28C161.976 154.28 160.456 153.805 159.126 152.76C131.766 131.575 96.3309 131.575 68.8759 152.76C65.7409 155.135 61.2759 154.565 58.9009 151.525C56.5259 148.39 57.0959 143.925 60.1359 141.55C92.8159 116.28 135.091 116.28 167.771 141.55C170.906 143.925 171.476 148.39 169.006 151.525C167.676 153.33 165.586 154.28 163.496 154.28Z" fill="#9196D2" fillOpacity="0.39" />
            <path d="M138.702 189.05C137.182 189.05 135.662 188.575 134.332 187.53C121.982 177.935 105.927 177.935 93.5771 187.53C90.4421 189.905 85.9771 189.335 83.6021 186.295C81.2271 183.16 81.797 178.695 84.837 176.32C102.507 162.64 125.307 162.64 142.977 176.32C146.112 178.695 146.682 183.16 144.212 186.295C142.977 188.005 140.887 189.05 138.702 189.05Z" fill="#9196D2" fillOpacity="0.39" />
          </svg>
          <p className="text-[#131D29] text-lg mt-[16px] font-medium px-5">
            {t('wifi.headerText')}
          </p>
        </div>
        <div className="w-full flex justify-center items-center bg-[#707BFE] rounded-[4px] mb-[12px] py-[8px] cursor-pointer hover:opacity-80">
          <p className="text-base text-white font-medium">{t('wifi.connectButton')}</p>
        </div>
        <div className="w-full flex justify-center items-center bg-transparent border-[1px] border-[#707BFE] rounded-[4px] mb-[23px] py-[15px] xs:py-[17px] cursor-pointer hover:opacity-80">
          <p className="text-lg xs:text-xl text-[#707BFE] font-medium">{t('wifi.closeButton')}</p>
        </div>
      </div>
    </div>
  );
};

export {WIFIPreview,WIFIShowcase};
