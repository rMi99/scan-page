import React from "react";
import { useLocation } from "react-router-dom";

import "../custom.css";
import useUpdateDomTitle from "../utils/updateDomTitle";
import useLanguage from "../utils/useLanguage";
import TextsWithUrl from "./common/textsWithUrl";

let DeactivatePage = (props) => {
  const location = useLocation();
  const t = useLanguage();

  useUpdateDomTitle(t('deactivatePage.title'))

  const is_archived           = location.state?.is_archived;
  const uid                   = location.state?.uid;
  const unique_pricing_link   = location.state?.unique_pricing_link;

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: "1",
          maxWidth: "330px",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginBottom: "100px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
            height: "63%",
          }}
        >
          <div>
            <span
              style={{
                borderRadius: "100px",
                backgroundColor: "#e3e2e5",
                width: "150px",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              <img style={{ width: "80px" }} src="/disconnected.png" alt="" />
            </span>
            <div style={{ padding: "2px 16px" }}>
              <h1
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "10px 5px",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                { t('deactivatePage.pageTitle') }
              </h1>

              <p
                style={{
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "15px",
                }}
              >
               { t('deactivatePage.inactive_desc') } 
                <br />
                {is_archived === true ? (
                  <TextsWithUrl
                    linkUrl={`mailto:support@online-qr-generator.com?subject=${t('deactivatePage.inactive_subject')} ${uid}&body=${t('deactivatePage.inactive_body')}`}
                    text={t('deactivatePage.inactive_description_2')}
                  />
                ) : (
                  <TextsWithUrl
                    linkUrl={unique_pricing_link != '' || unique_pricing_link != null ? unique_pricing_link : 'https://online-qr-generator.com/plans-and-prices'}
                    text={t('deactivatePage.description_2')}
                  />
                )}
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://online-qr-generator.com/"
          className="footer-logo"
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: "15px",
            marginBottom: "15px",
          }}
        >
          <img
            src="/images/new_logo.webp"
            alt=""
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "100%",
              height: "35px",
              width: "auto",
            }}
          />
          {/* <p className="mb-0 ms-2">Powered by <b>OQG</b></p> */}
        </a>
      </div>
    </div>
  );
};
export default DeactivatePage;
