import { CardMedia, CardContent, Button, Typography } from "@mui/material";
import React from "react";
// import StatusBar from "../../StatusBar";

let Business = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#984424",
        color: "black",
        height: "25vh",
        paddingTop:24,
      }}
    >
      {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <div
        style={{
          padding: "0px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography
            style={{
              color: "#fff",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Specialty coffee
          </Typography>
        </CardContent>

        <div>
          <CardMedia
            component="img"
            height="250"
            image={"/business.webp"}
            style={{
              borderRadius: 5,
            }}
          />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Special Coffee
          </Typography>
          <Typography variant="body2">
            Natural, artisan and local coffee. Open from Tuesday to Sunday from
            8:00 am to 7:00 pm. Barista courses are held on Mondays.
          </Typography>
        </CardContent>

        <Button
          size="small"
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            color: "#000",
            marginTop: 5,
            border: "1px solid #000",
            padding: 10,
          }}
        >
          online order
        </Button>
      </div>
    </div>
  );
};

export default Business;
