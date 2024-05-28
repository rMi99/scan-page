import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";
// import StatusBar from "@components/StatusBar";
// import StatusBar from "../../StatusBar";


let Website = (props) => {
  return (
    <div
      style={{
        padding: 10,
        paddingTop:50,
      }}
    >
      {/* <StatusBar  statusBarImg="/statusbar-b.png"/> */}
      <Card
        style={{
          marginBottom: 10,
          backgroundColor: "#d0d4e4",
          borderRadius: 20,
        }}
      >
        <CardContent
          style={{
            padding: 10,
           
          }}
        >
          https://online-qr-generator.com
        </CardContent>
      </Card>
      {/* <Card> */}
      <CardMedia
        component="img"
        // alt="green iguana"
        height="200"
        image="/website.webp"
        style={{
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
        }}
      />
      {/* </Card> */}
      <Card
        style={{
          // marginTop: 21,
          boxShadow:
            "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 10px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
          borderRadius: 20,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Pets & Owners
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            The store where pets and their owners are happy.
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "block",
          }}
        >
          <Button
            size="small"
            style={{
              backgroundColor: "#182474",
              borderRadius: 5,
              color: "white",
              width: "90%",
              height: 40,
            }}
          >
            See More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Website;
