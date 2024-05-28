import { Card } from "react-bootstrap";
import { Typography, Button, CardMedia } from "@mui/material";
import React from "react";
// import StatusBar from "../../StatusBar";

let Video = (props) => {
  return (
    <div
    className="app-pages"
    style={{
      backgroundColor: "#6874e4",
      color: "white",
      justifyContent:"flex-start",
      paddingTop:40,
    }}
    >
    {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <Card.Text
        style={{
          padding: "20px 20px 10px 20px",
          fontSize: 20,
          marginBottom:0,
        }}
      >
        {"Tech & Corp"}
      </Card.Text>
      <CardMedia
        component="img"
        // alt="green iguana"
        height="200"
        image="/video.webp"
      />

      <Card.Title>
        <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
          Tech & Corp Manifesto
        </Typography>
      </Card.Title>
      <Card.Text
        style={{
          width: "80%",
        }}
      >
        A decalogue for you to learn all about who we are at Tech & Corp.
      </Card.Text>

      <Button
        size="small"
        style={{
          // backgroundColor: "#000",
          borderRadius: 5,
          color: "white",
          marginTop: 20,
          border: "1px solid #fff",
        }}
      >
        Find out more
      </Button>
    </div>
  );
};

export default Video;
