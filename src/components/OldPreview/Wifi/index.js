import { Typography, Button, CardActions } from "@mui/material";
import { Wifi as WifiIcon } from "@mui/icons-material";
import React from "react";
// import StatusBar from "../../StatusBar";

let Wifi = (props) => {
  return (
    <div
      className="app-pages"
      style={{
        backgroundColor: "#c0bcbc",
      }}
    >
      {/* <StatusBar  statusBarImg="/statusbar-b.png"/> */}
      <WifiIcon
        style={{
          fontSize: 100,
          color: "white",
          // padding: "10%",
        }}
      />

      <div
        style={{
          borderRadius: 10,
          backgroundColor: "#fff",
          padding: "5%",
          margin: "7%",
        }}
      >
        <Typography
          style={{
            fontSize: 23,
          }}
        >
          Join the "Hotel bar" Wi-fi network?
        </Typography>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            style={{
              backgroundColor: "#fff",
              borderRadius: 5,
              color: "#1c7c8c",
              padding: "3% 15%",
              border:"1px solid"
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            style={{
              backgroundColor: "#280c24",
              borderRadius: 5,
              color: "#fff",
              padding: "3% 15%",
            }}
          >
            Access
          </Button>
        </CardActions>
      </div>
    </div>
  );
};

export default Wifi;
