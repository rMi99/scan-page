import { IconButton, Typography, Button } from "@mui/material";
import {
  Replay as ReplayIcon,
  ContentCopy as ContentCopyIcon,
  WatchLaterOutlined as WatchLaterOutlinedIcon,
} from "@mui/icons-material";
import React from "react";

let Cardback = (props) => {
  return (
    <div
      className="back"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <div>
        <div
          style={{
            zIndex: 10,
            position: "absolute",
            right: 10,
            top: 0,
          }}
        >
          <IconButton
            size="small"
            onClick={props.onClick}
            style={{
              borderRadius: 5,
              marginTop: 5,
            }}
          >
            <ReplayIcon />
          </IconButton>
        </div>
        <div>
          <h2 style={{ margin: "20px 0px" }}>Coupon code</h2>
          <div
            style={{
              marginBottom: 40,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
              }}
            >
              SALE25OFF
            </Typography>

            <div
              style={{
                zIndex: 10,
                position: "absolute",
                right: 10,
                top: 72,
              }}
            >
              <IconButton
                size="small"
                onClick={() => {
                  navigator.clipboard.writeText("SALE25OFF");
                }}
                style={{
                  borderRadius: 5,
                  marginTop: 5,
                }}
              >
                <ContentCopyIcon />
              </IconButton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <WatchLaterOutlinedIcon
              style={{
                marginRight: 5,
              }}
            />
            Valid untill 13 Nov 2022
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "24px 14px",
          width: "100%",
        }}
      >
        <Button
          style={{
            backgroundColor: "#ff3434",
            color: "#fff",
            width: "100%",
            height: 50,
          }}
        >
          Redeem now
        </Button>
      </div>
    </div>
  );
};

export default Cardback;
