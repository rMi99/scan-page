import { Typography, CardMedia } from "@mui/material";
import { Card } from "react-bootstrap";
import React from "react";
// import StatusBar from "../../StatusBar";
let PreviewMenu = (props) => {
  const menu = [
    {
      image: "/menuproduct1.webp",
      name: "T-Bone",
      description: "Our star piece. Once you try it, there's no going back.",
      price: "$ 20",
    },
    {
      image: "/menuproduct2.webp",
      name: "Criollo Chorizo",
      description: "Made with beef from La Pampa and Iberico pork.",
      price: "$ 4.5",
    },
    {
      image: "/menuproduct3.webp",
      name: "Sirloin steak",
      description:
        "Enjoy the tenderness of one of the classic cuts of meat for the grill.",
      price: "$ 25",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <div
        style={{
          height: 260,
          backgroundColor: "#201c3c",
          color: "white",
          paddingTop: 46,
        }}
      >
        <div
          style={{
            height: 100,
            width: 100,
            display: "-webkit-inline-box",
          }}
        >
          <CardMedia
            component="img"
            // alt="green iguana"
            height="100%"
            image={"/menuimage.jpg"}
            style={{
              borderRadius: 10,
              width: "100%",
            }}
          />
        </div>
        <Card.Title>
          <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
            Don Tulio
          </Typography>
        </Card.Title>
        <Card.Text
          style={{
            margin: "0px 0px 50px 0px",
          }}
        >
          Assortment of 100% Argentinian grilled meats
        </Card.Text>
        <div
          style={{
            borderRadius: 5,
            height: "auto",
            position: "absolute",
            left: "10%",
            width: "80%",
            top: 250,
          }}
        >
          <Card
            style={{
              boxShadow:
                "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 10px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
              backgroundColor: "white",
              color: "black",
              borderRadius: 5,
            }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h6"
              gutterBottom
              style={{
                fontWeight: "bold",
                color: "#00288a",
              }}
            >
              Starters
            </Typography>
            {menu.map((i, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", padding: 5 }}>
                  <Card.Img
                    variant="top"
                    src={i.image}
                    height={100}
                    width={100}
                    style={{
                      display: "flex",
                      borderRadius: 10,
                      margin: 10,
                      width: 80,
                      height: 80,
                    }}
                  />
                  <Card.Body
                    style={{
                      textAlign: "left",
                      paddingTop:'10px',
                      padding: '2px',
                      paddingLeft: '2px',                     
                    }}
                  >
                    <Card.Title style={{ fontWeight: "bold", fontSize:'16px'}}>
                      {i.name} 
                    </Card.Title>
                    <Typography
                      variant="caption"
                      style={{
                        wordBreak: "break-word",
                        fontSize:'10px'
                      }}
                    >
                      {i.description}
                    </Typography>
                    <Card.Title
                      style={{
                        color: "#ff9c04",
                        fontWeight: "bold",
                      }}
                    >
                      {i.price}
                    </Card.Title>
                  </Card.Body>
                </div>
                {idx !== menu.length - 1 && <hr />}
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PreviewMenu;
