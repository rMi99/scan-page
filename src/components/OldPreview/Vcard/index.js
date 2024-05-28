import { CardMedia, Typography, Card, CardHeader } from "@mui/material";
import {
  Call as CallIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  BusinessCenter as BusinessCenterIcon,
  Cake as CakeIcon,
} from "@mui/icons-material";
import React from "react";
// import StatusBar from "../../StatusBar";


let Business = (props) => {
  return (
    <div
      // className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#a92d2e",
        padding: "75px 0px 0px",
        // height: "23vh",
      }}
    >
       {/* <StatusBar  statusBarImg="/statusbar-b.png"/> */}
      <div
        style={{
          width: 80,
          backgroundColor: "#fff",
          height: 80,
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CardMedia
          component="img"
          style={{
            borderRadius: "50%",
            width: 66,
          }}
          image="/vcard.webp"
          // alt="green iguana"
        />
      </div>
      <div>
        <h4
        style={{
          fontSize: 22,
          marginTop: 20,
          color: "#fff",
        }}
        >
          <b>Álvaro Muñoz</b>
        </h4>
        <p
        style={{
          fontSize: 14,
          color: "#fff",

        }}
        >CEO</p>
      </div>
      <div
        style={{
          paddingBottom: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              // paddingLeft: 11,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#ff6b6c",
                borderRadius: 5,
                padding: 10,
                width: 50,
              }}
            >
              <CallIcon style={{color: "#fff"}} />
            </div>
            <Typography
              style={{
                padding: 5,
                fontSize: 12,
                color: "#fff"
              }}
            >
              Call
            </Typography>
          </div>
          <div
            style={{
              paddingLeft: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#ff6b6c",
                borderRadius: 5,
                padding: 10,
                width: 50,
              }}
            >
              <EmailIcon style={{color: "#fff"}} />
            </div>
            <Typography
              style={{
                padding: 5,
                fontSize: 12,
                color: "#fff"
              }}
            >
              Email
            </Typography>
          </div>

          <div
            style={{
              paddingLeft: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#ff6b6c",
                borderRadius: 5,
                padding: 10,
                width: 50,
              }}
            >
              <LocationOnIcon style={{color: "#fff"}} />
            </div>
            <Typography
              style={{
                padding: 5,
                fontSize: 12,
                color: "#fff"
              }}
            >
              Location
            </Typography>
          </div>
        </div>
      </div>

      <Card
        style={{
          boxShadow:
            "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 10px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
          width: "100%",
          padding: "20px 0"
        }}
      >
        <Typography
          style={{
            color: "#000",
            padding: "0px 16px",
            fontSize: "13px",
            color: "#220e27"
          }}
        >More than fifteen years of experience in the technology sector working for the most important companies: AME, Sternac, Riketan. Open to listening to innovative proposals.</Typography>
        <hr />
        <CardHeader
          avatar={<CallIcon />}
          title={"123456"}
          style={{
            padding: "0px 16px",
            textAlign: "left",
          }}
        />
        <hr />

        <CardHeader
          avatar={<EmailIcon />}
          style={{
            padding: "0px 16px",
            textAlign: "left",
          }}
          title={"test@gmail.com"}
        />
        <hr />
        <CardHeader
          avatar={<CakeIcon />}
          style={{
            padding: "0px 16px",
            textAlign: "left",
          }}
          title={"21-sep-2022"}
        />
        <hr />
        <CardHeader
          avatar={<BusinessCenterIcon />}
          style={{
            padding: "0px 16px",
            textAlign: "left",
          }}
          title={"Google"}
        />
        <hr />

        <CardHeader
          avatar={<LocationOnIcon />}
          title={
            "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
          }
          style={{
            padding: "0px 16px",
            textAlign: "left",
          }}
        />
        <hr />
      </Card>
    </div>
  );
};

export default Business;
