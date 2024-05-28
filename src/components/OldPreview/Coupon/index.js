import { CardMedia, CardContent, Button, Typography } from "@mui/material";
import { useState } from "react";
import Cardback from "./Cardback";
import React from "react";
// import StatusBar from "../../StatusBar";

let PreviewCoupon = (props) => {
  const [flip, setFlip] = useState(false);
  return (
    <div
    style={{
      backgroundColor: "#585454",
      height: "150vh",
      padding: "70px 10px 0px",
    }}
    >
    {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor:"#fff",
          // maxWidth:490
        }}
      >
        <Typography
          style={{
            fontSize: 25,
            color: "#fff",
            display: "flex",
            paddingBottom: 15,
          }}
        >
          Electrofy
        </Typography>
        <div className={`cardok${flip ? " flip" : ""}`}>
          <div
            className="front"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                // style={{
                //   width: 490,
                // }}
                image="/coupon.webp"
                alt="green iguana"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -26,
                  right: 0,
                  backgroundColor: "#ff3434",
                  color: "#fff",
                  padding: 9,
                  borderRadius: 7,
                }}
              >
                <Typography
                  style={{
                    fontSize: 16,
                  }}
                >
                  10% off
                </Typography>
              </div>
            </div>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: 25,
              }}
            >
              <Typography
                style={{
                  fontSize: 20,
                }}
                gutterBottom
              >
                25% OFF
              </Typography>

              <Typography
                style={{
                  fontSize: 20,
                }}
              >
                Use this coupon in all technology products
              </Typography>
            </CardContent>

            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                onClick={() => {
                  setFlip(!flip);
                }}
                style={{
                  backgroundColor: "#ff3434",
                  color: "#fff",
                  width: "100%",
                  height: 50,
                }}
              >
                Get Coupon
              </Button>
            </CardContent>
          </div>
          <Cardback
            onClick={() => {
              setFlip(!flip);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewCoupon;
