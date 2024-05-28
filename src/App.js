import "./App.css";
import "./components/backdrop.css";
import { useEffect, React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import WebFont from "webfontloader";
import NoData from "./components/NoData";
import DeactivatePage from "./components/deactivatePage";
import DefaultPage from "./components/Preview/DefaultPage";

// import { useTranslation} from 'react-i18next';

// import LiveController from "./components/liveController";
import WebsitePreview from "./components/Preview/Website";
import PDFPreview from "./components/Preview/PDF";
import ImagesPreview from "./components/Preview/Images";
import VideoPreview from "./components/Preview/Video";
import WIFIPreview from "./components/Preview/Wifi";
import MenuPreview from "./components/Preview/Menu";
import VcardPreview from "./components/Preview/Vcard";
import Mp3Preview from "./components/Preview/Mp3";
import AppsPreview from "./components/Preview/Apps";
import ListOfLinksPreview from "./components/Preview/ListOfLinks";
import CouponPreview from "./components/Preview/Coupon";
import BusinessPreview from "./components/Preview/Business";
import EventPreview from "./components/Preview/Event";
import InstagramPreview from "./components/Preview/Instagram";
import FacebookPreview from "./components/Preview/Facebook";
import SocialMediaPreview from "./components/Preview/SocialMedia";
import RatePreview from "./components/Preview/Rate";
import WhatsappPreview from "./components/Preview/Whatsapp";
import { SnackbarProvider } from "notistack";
import StepController from "./components/stepController";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';


const THEME = createTheme({
  typography: {
    fontFamily: `'Eudoxus Sans', sans-serif`,
    //  "fontSize": 14,
    //  "fontWeightLight": 300,
    //  "fontWeightRegular": 400,
    //  "fontWeightMedium": 500
  },
});

function App() {
  // const { t, i18n } = useTranslation();
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Noto Sans",
          "Concert One",
          "Lato",
          "Open Sans",
          "Roboto",
          "Oswald",
          "Montserrat",
          "Source Sans Pro",
          "Slabo 27px",
          "Raleway",
          "Merriweather",
          "Inconsolata",
          "Dancing Script",
        ],
      },
    });
  }, []);
  return (
    <ThemeProvider theme={THEME}>
      <div className="App" >
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/:path/:uid" element={<Main />} />
              <Route path="/:uid" element={<Main />} />
              <Route path="/" element={<DefaultPage />} />
              <Route path="/no-data" element={<NoData />} />
              <Route path="/deactivate" element={<DeactivatePage />} />

              <Route path="/vcard" element={<VcardPreview />} />
              <Route path="/images" element={<ImagesPreview />} />
              <Route path="/video" element={<VideoPreview />} />
              <Route path="/pdf" element={<PDFPreview />} />
              <Route path="/app" element={<AppsPreview />} />
              <Route path="/wifi" element={<WIFIPreview />} />
              <Route path="/url" element={<WebsitePreview />} />
              <Route path="/coupon" element={<CouponPreview />} />
              <Route path="/mp3" element={<Mp3Preview />} />
              <Route path="/links" element={<ListOfLinksPreview />} />
              <Route path="/menu" element={<MenuPreview />} />
              <Route path="/business" element={<BusinessPreview />} />
              <Route path="/event" element={<EventPreview />} />
              <Route path="/instagram" element={<InstagramPreview />} />
              <Route path="/facebook" element={<FacebookPreview />} />
              <Route path="/social" element={<SocialMediaPreview />} />
              <Route path="/rate" element={<RatePreview />} />
              <Route path="/whatsapp" element={<WhatsappPreview />} />

              <Route path="/preview" element={<StepController />} />

              <Route path="*" element={<DefaultPage />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
        <SpeedInsights />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
