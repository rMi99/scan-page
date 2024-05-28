import { Typography, CardMedia } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import React from "react";
// import StatusBar from "../../StatusBar";
      
let MP3 = (props) => {
  return (
    <div
      // className="app-pages"
      style={{
        backgroundColor: "#10349c",
        color: "#000",
        height: "33vh",
        paddingTop:16,
      }}
    >
       {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <div
        style={{
          width: "80%",
          display: "flex",
          marginLeft: "11%",
        }}
      >
        <CardMedia
          component="img"
          // alt="green iguana"
          height="200"
          image="/mp3.webp"
          style={{
            marginTop: 40,
          }}
        />
      </div>
      <Typography
        style={{
          fontSize: 23,
          padding: 10,
        }}
      >
        Rain cover
      </Typography>
      <Typography
        style={{
          paddingBottom: 20,
        }}
      >
        My group
      </Typography>
      <ReactAudioPlayer
        src={"/empty.mp3"}
        controls
        style={{
          width: "95%",
        }}
      />
    </div>
  );
};

export default MP3;
