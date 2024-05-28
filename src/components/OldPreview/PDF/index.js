import { Typography, CardMedia } from "@mui/material";
import React from "react";
// import StatusBar from "../../StatusBar";


let PDF = (props) => {
  return (
    <div
    // className="app-pages"
    style={{
      backgroundColor: "#3064b4",
      color: "white",
      height: "55vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "24px",
    }}
    >
    {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <Typography
        style={{
          padding: 22,
          fontSize: 17,
        }}
      >
        Los Burgueses
      </Typography>
      <Typography
        style={{
          fontSize: 23,
          padding: 10,
          fontWeight: "bold",
        }}
      >
        The Burgers
      </Typography>
      <Typography
        style={{
          padding: "0px 30px",
          fontSize: 15,
        }}
      >
        Our selection of burgers will surprise you. Their flavour will delight
        you.
      </Typography>

      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: 25,
          borderRadius: 10,
          marginTop: 22,
          width: "80%",
          // height: 260,
          // marginLeft:"8%",
          boxShadow:
            "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 10px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          // height="200"
          image="/pdf.jpg"
          style={{
            borderRadius: 10,
            maxWidth: "100%",
            height:"auto",
            width:"200px",
            margin:'0 auto'
          }}
        />
      </div>
    </div>
  );
};

export default PDF;
