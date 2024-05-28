import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Utilities

// import StatusBar from "../../StatusBar";




let DefaultPreview = (props) => {
  return (
    <div>
    {/* <StatusBar  statusBarImg="/statusbar-b.png"/> */}
      <Container
        className="px-0"
        style={{ marginTop: '125px' }}
      >
        <Row className="justify-content-center flex">
          <img
            className="img-fluid mb-3"
            style={{ width: "100px", alignItems: "center", opacity: '0.3' }}
            src="../images/dafault.png"
            alt="default-preview"
          />
          <p
            className="default-para"
            style={{
              fontSize: "18px",
              textAlign: "center",
              fontWeight: "bold",
              padding :'0px 50px 28px 48px'
            }}
          >
            Select a type of QR code in the left column
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default DefaultPreview;
