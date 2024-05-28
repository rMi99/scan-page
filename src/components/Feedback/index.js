import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AOS from "aos";
import "aos/dist/aos.css";
import WelcomeScreen from "../common/WelcomeScreen";
import React from "react";
import "../../custom.css";
import axios from "axios";

let Feedback = ({ qrData }) => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  // eslint-disable-next-line
  const [flip, setFlip] = useState(false);

  const data = qrData
    ? {
        ...qrData,
        primaryColor: qrData.primaryColor
          ? qrData.primaryColor.includes("#")
            ? qrData.primaryColor
            : "#" + qrData.primaryColor
          : null,
        SecondaryColor: qrData.SecondaryColor
          ? qrData.SecondaryColor.includes("#")
            ? qrData.SecondaryColor
            : "#" + qrData.SecondaryColor
          : null,
        qr_code_id: qrData.qr_code_id,
        name: qrData.basic_info,
        title: qrData.title,
        font_title: qrData.font_title,
        font_text: qrData.font_text,
        uId: qrData.uId,
        feedback_categories: qrData.feedback_categories
          ? JSON.parse(qrData.feedback_categories)
          : [],
        screen: qrData.screen,

        feedback_sub_categories: qrData.feedback_sub_categories
          ? JSON.parse(qrData.feedback_sub_categories)
          : [],
      }
    : {
        primaryColor: urlParams.get("primaryColor")
          ? urlParams.get("primaryColor").includes("#")
            ? urlParams.get("primaryColor")
            : "#" + urlParams.get("primaryColor")
          : null,
        SecondaryColor: urlParams.get("SecondaryColor")
          ? urlParams.get("SecondaryColor").includes("#")
            ? urlParams.get("SecondaryColor")
            : "#" + urlParams.get("SecondaryColor")
          : null,
        name: urlParams.get("basic_info"),
        qr_code_id: urlParams.get("qr_code_id"),
        title: urlParams.get("title"),
        font_title: urlParams.get("font_title"),
        font_text: urlParams.get("font_text"),
        uId: urlParams.get("uId"),
        feedback_categories: urlParams.get("feedback_categories")
          ? JSON.parse(urlParams.get("feedback_categories"))
          : [],

        feedback_sub_categories: urlParams.get("feedback_sub_categories")
          ? JSON.parse(urlParams.get("feedback_sub_categories"))
          : [],
      };

  const [welcomeScreen, showWelcomeScreen] = useState(
    data?.screen ? true : false
  );
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    setTimeout(() => {
      showWelcomeScreen(false);
    }, 3000);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [visible, setVisible] = React.useState(false);
  const [review, setReview] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = React.useState(null);
  const [comment, setcomment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subCategory, setSubCategory] = useState(null);
  const [cateoryName, setCategoryname] = useState(null);
  const [catName, setName] = useState(null);
  // const [cateoryData, setCategoryData] = useState(null); commented this State for keep avoiding es-lint error warns.
  const [parentCat, setIndex] = useState(null);
  // const [message, setMessage] = useState("");

  const getSubCategory = (index) => {
    setSubCategory(data.feedback_sub_categories[index]);
  };

  const getCategoryName = (index, name) => {
    // setCategoryData(data.feedback_categories[index]);

    if (subCategory) {
      setCategoryname(parentCat.name + "/" + name);
      setName(parentCat.name + "-" + name);
    } else {
      setCategoryname(name);
      setName(name);
    }
  };

  const getIndex = (category) => {
    setIndex(category);
  };

  const windowLoad = () => {
    window.location.reload(true);
  };

  // Save feedback data
  var handleSubmit = async (e) => {
    e.preventDefault();

    handleClose();

    axios
      .post(`https://online-qr-generator.com/apiv1/feedback_review.php`, {
        comment: comment,
        star: value,
        email: email,
        phone: phone,
        qr_code_id: data.qrIdAjax,
        category: catName,
      })
      .then((res) => {
        if (res.data.success === "true") {
          setEmail("");
          setCategoryname("");
          setPhone("");
          setReview(null);
          setcomment("");
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <div>
      <Container
        fluid
        className="px-0 pt-5 pb-4"
        style={{ backgroundColor: "#0e379a" }}
      >
        <Col lg="auto" xs="12" className="mx-auto main-card-wrap">
          <Row
            className="justify-content-md-center align-items-center mx-0"
            style={{ color: "#ffffff" }}
          >
            <Col
              xs="2"
              lg="2"
              style={{
                display: visible || review || submit ? "block" : "none",
              }}
            >
              <ArrowBackIcon
                onClick={() => {
                  setVisible(false);
                  setReview(false);
                  setSubmit(false);
                }}
              />
            </Col>
            <Col xs="8" lg="8" style={{ fontSize: "24px", fontWeight: "bold" }}>
              {data?.name}
            </Col>
            <Col xs="2" lg="2">
              <RateReviewIcon />
            </Col>
          </Row>
        </Col>
      </Container>
      <Container fluid className="px-0" style={{ position: "relative" }}>
        <Col
          style={{
            backgroundColor: "#0e379a",
            height: "80px",
            position: "absolute",
            top: "0",
            width: "100%",
            zIndex: "0",
          }}
        ></Col>

        <Col
          lg="auto"
          xs="12"
          className="mx-auto main-card-wrap "
          style={{
            backgroundColor: "#ffffff",
            minHeight: "400px",
            zIndex: "1",
            position: "relative",
            borderRadius: "10px",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.5)",
            padding: "20px",
            display: !visible && !review && !submit ? "block" : "none",
          }}
        >
          <div>
            <h2
              style={{
                textAlign: "left",
                fontSize: "22px",
                marginBottom: "18px",
              }}
            >
              {data?.title}
            </h2>
            <p
              style={{
                textAlign: "left",
                fontSize: "15px",
                color: "#68676c",
                marginBottom: "24px",
              }}
            >
              Please select to review a category.
            </p>
          </div>

          {data?.feedback_categories.map((category, index) => {
            return data.feedback_sub_categories[index + 1] ? (
              <Card
                style={{
                  border: "10px",
                  boxShadow: "0 4px 6px 0 #cdd1e0",
                  position: "relative",
                  padding: "0px 14px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
                key={index}
                onClick={() => {
                  setVisible(true);
                  getSubCategory(index + 1);
                  getIndex(category);
                }}
              >
                <Card.Body style={{ display: "flex", alignItems: "center" }}>
                  <img
                    className="img-fluid"
                    src={`../images/category-icons/${category.icon}.png`}
                    alt=""
                    style={{
                      fontSize: "20px",
                      color: "#68676c",
                      width: "20px",
                      opacity: "0.5",
                    }}
                  />
                  <Card.Text className="mb-0 ms-3" style={{ color: "#68676c" }}>
                    {category.name}
                  </Card.Text>

                  {data.feedback_sub_categories[index + 1] ? (
                    <ArrowForwardIosIcon
                      onClick={() => {
                        setVisible(true);
                        getSubCategory(index + 1);
                        getIndex(category);
                      }}
                      className="ml-auto"
                      style={{ fontSize: "20px", color: "#68676c" }}
                    />
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            ) : (
              <Card
                style={{
                  border: "10px",
                  boxShadow: "0 4px 6px 0 #cdd1e0",
                  position: "relative",
                  padding: "0px 14px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
                key={index}
                onClick={() => {
                  setReview(true);
                  getCategoryName(index, category.name);
                }}
              >
                <Card.Body style={{ display: "flex", alignItems: "center" }}>
                  <img
                    className="img-fluid"
                    src={`../images/category-icons/${category.icon}.png`}
                    alt=""
                    style={{
                      fontSize: "20px",
                      color: "#68676c",
                      width: "20px",
                      opacity: "0.5",
                    }}
                  />
                  <Card.Text className="mb-0 ms-3" style={{ color: "#68676c" }}>
                    {category.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>

        {/* Sub category form */}
        {visible && (
          <Col
            lg="auto"
            xs="12"
            className="mx-auto main-card-wrap "
            style={{
              backgroundColor: "#ffffff",
              minHeight: "400px",
              zIndex: "1",
              position: "relative",
              borderRadius: "10px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.5)",
              padding: "20px",
              display: !review ? "block" : "none",
            }}
          >
            <div>
              <h2
                style={{
                  textAlign: "left",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                {data?.title}
              </h2>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  color: "#68676c",
                  marginBottom: "24px",
                }}
              >
                Please select to review a category.
              </p>
            </div>

            {subCategory.map((category, index) => (
              <Card
                style={{
                  border: "10px",
                  boxShadow: "0 4px 6px 0 #cdd1e0",
                  position: "relative",
                  padding: "0px 14px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
                key={index}
                onClick={() => {
                  setReview(true);
                  getCategoryName(index, category.name, index);
                }}
              >
                <Card.Body style={{ display: "flex", alignItems: "center" }}>
                  <Card.Text className="mb-0 ms-3" style={{ color: "#68676c" }}>
                    {category.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        )}

        {/* Feedback from */}
        {review && (
          <Col
            lg="auto"
            xs="12"
            className="mx-auto main-card-wrap "
            style={{
              backgroundColor: "#ffffff",
              minHeight: "400px",
              zIndex: "1",
              position: "relative",
              borderRadius: "10px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.5)",
              padding: "20px",
              display: !submit ? "block" : "none",
            }}
          >
            <div>
              <h2
                style={{
                  textAlign: "left",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                {cateoryName}
              </h2>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  color: "#68676c",
                  marginBottom: "24px",
                }}
              >
                Please evaluate using the stars..
              </p>
            </div>

            <div>
              <Rating
                className="rating-star"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Add a comment"
              className="mb-3"
            >
              <Form.Control
                style={{ boxSizing: "border-box", height: "150px" }}
                onChange={(e) => setcomment(e.target.value)}
                as="textarea"
                placeholder="Leave a comment here"
              />
            </FloatingLabel>

            <div className="d-sm-flex justify-content-evenly">
              <Button
                className="d-block w-100 mt-2 mx-0 mx-sm-1 save-more"
                variant="outline-primary"
                size="lg"
              >
                Save and rate more
              </Button>{" "}
              <Button
                onClick={handleShow}
                className="d-block w-100 mt-2 mx-0 mx-sm-1 send-feedack"
                variant="secondary"
                size="lg"
                disabled={!value}
                style={{ backgroundColor: value ? "#1D59F9" : "" }}
              >
                Send feedback
              </Button>{" "}
            </div>
          </Col>
        )}

        {submit && (
          <Col
            lg="auto"
            xs="12"
            className="mx-auto main-card-wrap "
            style={{
              backgroundColor: "#ffffff",
              minHeight: "200px",
              zIndex: "1",
              position: "relative",
              borderRadius: "10px",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.5)",
              padding: "20px",
            }}
          >
            <div>
              <h2
                style={{
                  textAlign: "left",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                Thank you!
              </h2>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  color: "#68676c",
                  marginBottom: "24px",
                }}
              >
                Your feedback has been submitted. Thank you for taking the time
                to share your opinion..
              </p>
            </div>

            <div className="d-flex justify-content-evenly">
              <Button
                className="save-more w-100"
                variant="outline-primary"
                size="lg"
                onClick={() => {
                  setVisible(false);
                  setReview(false);
                  setSubmit(false);
                  windowLoad();
                }}
              >
                Back to main page
              </Button>{" "}
            </div>
          </Col>
        )}
      </Container>

      {/* Feedback modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Typography id="modal-modal-description" className="mb-3">
            Please enter your contact information if you want us to get back to
            you.
          </Typography>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email(optional)</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Telephone(optional)</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <div className="d-sm-flex justify-content-evenly">
              <Button
                className="d-block w-100 mt-2 mx-0 mx-sm-1"
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                className="d-block w-100 mt-2 mx-0 mx-sm-1"
                type="submit"
                variant="primary"
                onClick={() => {
                  setSubmit(true);
                }}
              >
                Send
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Feedback;
