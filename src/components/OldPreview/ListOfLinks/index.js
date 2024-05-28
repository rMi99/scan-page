import { Typography, CardMedia } from "@mui/material";
import React from "react";
// import StatusBar from "../../StatusBar";

let PreviewListOfLinks = (props) => {
  const list = [
    {
      name: "Truffled Eggs",
      image: "/linklist1.webp",
    },
    {
      name: "Vegetable Soup",
      image: "/linklist2.webp",
    },
    {
      name: "Yogurt cake",
      image: "/linklist3.webp",
    },
  ];
  return (
    <div
    className="app-pages"
    style={{
      paddingTop:"50px",
      backgroundColor: "#201c1c",
      color: "#fff",
    }}
    >
    {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <CardMedia
        component="img"
        style={{
          borderRadius: "50%",
          width: "auto",
        }}
        height={130}
        image="/linklistimage.webp"
        // alt="green iguana"
      />
      <div style={{ marginBottom: 30 }}>
        <Typography
          style={{
            padding: "4px 10px 0px 10px",
            fontSize: 16,
          }}
        >
          <b>Takeshi Fujimoto</b>
        </Typography>
        <Typography style={{fontSize:14,}}>Gourmet recipes</Typography>
      </div>
      {list.map((i, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "#403c3c",
            width: "90%",
            display: "flex",
            alignItems: "center",
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
          }}
        >
          <CardMedia
            component="img"
            // alt="green iguana"
            height="auto"
            image={i.image}
            style={{
              width: 30,
              // padding: "3%",
            }}
          />
          <Typography
            style={{
              paddingLeft: "20%",
              color: "#e5f47a",
            }}
          >
            {i.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default PreviewListOfLinks;
