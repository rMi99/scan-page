import { CardMedia } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

const WelcomeScreen = ({ screen }) => {
  return (
    <>
      <div className="linearProgress">
        <LinearProgress />
      </div>
      <div
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image={screen}
          className="welcome_img"
          style={{
            // marginTop: 40,
            maxWidth:"100%",
            height: "auto",
            width: "250px",
            // position: "absolute",
            top: '25%',
            marginTop: '100px',
            // transform: 'translateY(-50%)',
          }}
        />
      </div>
    </>
  );
};

export default WelcomeScreen;
