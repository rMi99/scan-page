import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  TextField,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import { osName, browserName, deviceType } from "mobile-device-detect";

// import Feedback from "./Feedback";
import DefaultPage from "./Preview/DefaultPage";
import md5 from "md5";
import ShowAlert from "./alert";

import Apps from "./Apps";
import PDF from "./PDF";
import Images from "./Images";
import Video from "./Video";
import Business from "./Business";
import Menu from "./Menu";
import Vcard from "./Vcard";
import Mp3 from "./MP3";
import ListOfLinks from "./ListOfLinks";
import Coupon from "./Coupon";
import SlackAlert from "../utils/slackAlert";
import useLanguage from "../utils/useLanguage";

export default function Main() {
  const navigate = useNavigate();
  const params = useParams();
  const [modal, showModal] = useState(false);
  const [data, setData] = useState(null);
  const [type, setType] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [showAlert,setAlert] = useState(false);
  const t = useLanguage();

  const API_URL = 'http://localhost/qr-website';
  
    
  useEffect(() => {
    axios
      .get(
        "https://ipapi.co/json/?key=QsFZ2GmiouG1L37tzRD2B9UKNN36YzQjB4XbgQyI0B6BJDdIs8"
      )
      .then((i) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = `country_code=${i.data.country_code}&
      country_name=${i.data.country_name}&
      os_name=${osName}&
      city_name=${i.data.city}&
      browser_name=${browserName}&
      referrer_host=${document.referrer?.split("/")[2] || ""}&
      referrer_path=${document.referrer || ""}&
      device_type=${deviceType}&
      browser_language=${navigator.language || navigator.userLanguage}&
      utm_source=https://buffer.com/email-courses/actionable-social-media-strategies/?utm_source=buffer&utm_medium=post-original&utm_content=-ima&
      utm_medium=https://www.rover.com/search/?utm_medium=email&utm_source=Responsys&utm_campaign=111017190001&utm_content=2017_11_09_O_TGiving_N&
      utm_campaign=https://store.playstation.com/en-us/product/UP0006-CUSA05770_00-DLXPREORDER00000?utm_campaign=swbf2_hd_us_gam_socv_twt_holo&utm_&
      ip_address=${i.data.ip}&
      path=${params.path ? params.path : null}
    `;        
    
        axios
          .get(
             `${process.env.REACT_APP_CONFIG === 'production' ? 'https://online-qr-generator.com' : API_URL}/api/qr-code?uId=` +
              params.uid +
              "&" +
              raw
          )
          .then((result) => {
            if (result.data?.meta?.status) {
              navigate(`/p/${params.uid}`);
              if (
                result?.data?.data?.status === "1" ||
                result?.data?.data?.status === "5"
              ) {
                // qr code expire check
                if (result.data.data.is_expire === false) {
                  let data = result.data.data.data;
                  let qr_code_id = result.data.data;
                  // let settings = result.data.data.settings;

                  let type = result.data.data.type;
                  let newObj = { ...data, ...qr_code_id };
                  if (data["status"] === undefined) {
                    setAlert({ type: "error", msg: `Something Went Wrong!` });
                    slackAlert( params.uid, 0,'Something Went Wrong!',raw);
                  } else if (data.password) {
                    showModal(true);
                    setData(newObj);
                    setType(type);
                  } else {
                    setRedirect(true);
                    setData(newObj);
                    setType(type);
                    // navigateToURL(newObj, type);
                  }
                } else {
                  if (result.data.data.is_archived === true) {
                    navigate("/deactivate", {
                      state: { is_archived: true, uid: result.data.data.uid, unique_pricing_link: '' },
                    });
                  } else {
                    navigate("/deactivate", {
                      state: { is_archived: false, uid: '', unique_pricing_link: result.data.data.unique_pricing_link },
                    });
                  }
                }
              } else {
                noDataFoundNavigation();
              }
            } else {
              defaultNavigate();
            }
          })
          .catch((err) => defaultNavigate(err, raw));
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.uid, navigate]);
  const deactivate = () => {
    navigate("/deactivate", {
      state: { is_archived: false, uid: '' },
    });
  };
  const defaultNavigate = (err, raw) => {
    switch (err.response?.status) {
 
      case 404:
        setRedirect(true);
        setType("default");
        break;
      case 500:
        setAlert({type:'error',msg:t('global.error.err_500')});
        slackAlert(params.uid, 500,err?.message, raw);
        break;
      case 0:
        setAlert({type:'error',msg:t('global.error.no_internet')});
        break;
      default:
        setAlert({type:'error',msg:t('global.error.wrong')});
        break;
    }
  };
  const noDataFoundNavigation = () => {
    navigate("/no-data");
  };

  const replaceEncodedSymbols = (obj) => {
    for (var prop in obj) {    
      if (typeof obj[prop] === "string") {
        obj[prop] = obj[prop].replace(/&#039;/g, "'");
        obj[prop] = obj[prop].replace(/&lt;/g, "<");
        obj[prop] = obj[prop].replace(/&gt;/g, ">");       
        obj[prop] = obj[prop].replace(/&amp;/g, "&");       
      } else if (typeof obj[prop] === "object") {
        replaceEncodedSymbols(obj[prop]); 
      }
    }
  }

  const redirectPage = () => {
    replaceEncodedSymbols(data);
    if (redirect === true) {
      switch (type) {
        case "menu":
          return <Menu qrData={data} />;
        case "url":
          // console.log(data.url);
          const url = data?.url.startsWith("https://")
            ? data?.url
            : `https://${data?.url}`;
          const decodedUrl = url.replace(/&amp;/g, "&");
          window.open(decodedUrl, "_self");
          break;
        // return <WebsiteNew qrData={data} />;
        case "pdf":
          return <PDF qrData={data} />;
        case "images":
          return <Images qrData={data} />;
        case "video":
          return <Video qrData={data} />;
        case "business":
          return <Business qrData={data} />;
        case "vcard":
          return <Vcard qrData={data} />;
        case "mp3":
          return <Mp3 qrData={data} />;
        case "app":
          return <Apps qrData={data} />;
        case "links":
          return <ListOfLinks qrData={data} />;
        case "coupon":
          return <Coupon qrData={data} />;
        // case "feedback":
        //   return <Feedback qrData={data} />;
        case "default":
          return <DefaultPage />;
        default:
          return null;
      }
    } else {
      return null;
    }
  };

const slackAlert = (uid,errCode,reason,raw) => {
  if(process.env.REACT_APP_CONFIG === 'production'){
    SlackAlert(uid,errCode,reason,raw);
  }
}
  

  return (
    <>
      {showAlert ? (
        <ShowAlert type={showAlert?.type} msg={showAlert?.msg} />
      ) : (
        <>
          {redirect ? (
            redirectPage()
          ) : (
            <PasswordModal
              open={modal}
              setRedirect={setRedirect}
              showModal={showModal}
              psw={data?.password}
            />
          )}
        </>
      )}
    </>
  );
}

const PasswordModal = ({ open, setRedirect, showModal, psw }) => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const t = useLanguage();

  const verifyPassword = () => {
    if (md5(password) === psw) {
      showModal(false);
      setRedirect(true);
    } else {
      setPasswordError(t('global.password.incorrect_pass'));
    }
  };

  useEffect(() => {
    window.onkeyup = (e) => {
      if (e.key === "Enter") {
        verifyPassword();
      }
    };
  });

  return (
    <Dialog open={open}>
        <DialogTitle>{ t('global.password.required_pass') }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            { t('global.password.title') }
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label={ t('global.password.label') }
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            error={passwordError ? true : false}
            helperText={passwordError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={verifyPassword}>{ t('global.password.enter_btn') }</Button>
        </DialogActions>
      </Dialog>
  )
}
