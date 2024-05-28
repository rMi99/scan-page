import { Card, CardContent, CardMedia, Typography, Icon } from "@mui/material";
import { Google as GoogleIcon, Apple as AppleIcon } from "@mui/icons-material";
import React from "react";
import { useTranslation} from 'react-i18next';
// import StatusBar from "../../StatusBar";

let Apps = (props) => {

  const { t, i18n } = useTranslation();

  return (
    <div
    style={{
      backgroundColor: "#1c2018",
      color: "#fff",
      justifyContent:"start",
      paddingTop:"50px",
    }}
    className="app-pages"
    >
    {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <div
        style={{
          backgroundColor: "#1c2018",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <h4
            style={{
              marginBottom: 0,
            }}
          >
            <b
              style={{
                fontSize: 16,
              }}
            >
            {t('main.header')}
            </b>
          </h4>
          <p
            style={{
              marginTop: 4,
              fontSize: 10,
            }}
          >
            Tech & Corp
          </p>
        </div>

        <Card
          style={{
            marginTop: 21,
            boxShadow:
              "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 10px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
            borderRadius: 20,
            margin: 15,
            height: "auto",
            padding: "5%",
            width:"100%",
          }}
        >
          <div
            style={{
              boxShadow:
                "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 10px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
              borderRadius: 5,
              height: 90,
              position: "absolute",
              // left: "36%",
              width: 90,
              top: "15%",
              backgroundColor: "white",
              padding: 13,
              left: "calc(50% - 45px)",
            }}
          >
            <CardMedia component="img" image="/apps.svg" />
          </div>
          <CardContent
            style={{
              marginTop: 50,
              padding:"16px 8px",
            }}
          >
            <Typography sx={{ mb: 1.5 }} color="text.secondary" style ={{fontSize:"12px",}}>
              Control all statistics in a single application
            </Typography>
          </CardContent>
          <Card
            style={{
              backgroundColor: "black",
              height: "auto",
              margin: "0px auto 8px auto",
              display: "flex",
              color: "white",
              borderRadius: 30,
              width : "180px",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                padding:"10px 16px",
              }}
            >
              <Icon
                        style={{
                          height: "auto",
                          width: "auto",
                          fontSize: 0,
                        }}
                      >
                        <img
                          src="/playstore.png"
                          alt="playstore"
                          style={{
                            width: 25,
                            height: "auto",
                            maxMidth:"100%"
                          }}
                        />
                      </Icon>
            </CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <Typography style={{ fontSize: 10, lineHeight:"10px", }}> Get it on</Typography>
              <Typography style={{ fontWeight: "bold", fontSize: 14.5, lineHeight:"20px", }}>Google Play</Typography>
            </div>
          </Card>

          <Card
            style={{
              backgroundColor: "black",
              height: "auto",
              margin: "0px auto 8px auto",
              display: "flex",
              color: "white",
              borderRadius: 30,
              width : "180px",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                padding:"10px 16px",
              }}
            >
            <Icon
            style={{
              height: "auto",
              width: "auto",
              fontSize: 0,
            }}
          >
            <img
              src="/apple.png"
              alt="apple"
              style={{
                width: 26,
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Icon>
            </CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <Typography style={{ fontSize: 10, lineHeight:"10px", }}> Download on the</Typography>
              <Typography style={{ fontWeight: "bold", fontSize: 14.5, lineHeight:"20px", }}>
                App Store
              </Typography>
            </div>
          </Card>
        </Card>

        <span>www.online-qr-generator.com</span>
      </div>
    </div>
  );
};

export default Apps;
