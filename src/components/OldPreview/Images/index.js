import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from "react";
import '../../../custom.css';
import { isLight } from "../../../utils/Color";
// import StatusBar from "../../StatusBar";
   


let PreviewImages = (props) => {
  const images = [
    "../images/images/01.webp",
    "../images/images/02.webp",
    "../images/images/03.webp",
  ];

  // const light = isLight(props.primaryColor);
  return (

    <div>
       {/* <StatusBar  statusBarImg="/statusbar-w.png"/> */}
      <Container fluid className="px-0 pt-5 " style={{ backgroundColor: '#88825F', paddingBottom:'100px' }}>
        <Col lg="4" xs="12" className="mx-auto">
          <Row className="justify-content-center align-items-center mx-0" style={{ color: '#ffffff' }}>
            <Col xs="8" lg="8" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' }}>Our wedding</Col>
          </Row>
          <Row className="justify-content-center align-items-center mx-0" style={{ color: '#ffffff' }}>
            <Col xs="12" lg="8" style={{ fontSize: '15px', marginBottom: '24px' }}>
              Words can't express the love we have for one another. That's why we want to share with you our wedding photos.
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center mx-0">
            <Button className='see-more-btn' style={{fontSize: '15px'}}>See more</Button>{' '}
          </Row>
        </Col>
      </Container>

      <Container fluid className="px-0" style={{ position: 'relative', zIndex:'1', top:'-72px', }}>
        <Row className="justify-content-center flex">
          <Card className='px-0' style={{ background:'transparent',border:'0', boxShadow:'unset', position: 'relative', width: '190px', flexShrink: '0', borderRadius: '8px', marginBottom: '12px' }}>
            <Card.Img style={{ width: '190px', height: '130px', zIndex: '1', objectFit: 'cover', borderRadius: '8px' }} variant="top" src="../images/images/01.webp" />
          </Card>
        </Row>
        <Row className="justify-content-center flex">
          <Card className='px-0' style={{background:'transparent',border:'0', boxShadow:'unset', position: 'relative', width: '190px', flexShrink: '0', borderRadius: '8px', marginBottom: '12px' }}>
            <Card.Img style={{ width: '190px', height: '130px', zIndex: '1', objectFit: 'cover', borderRadius: '8px' }} variant="top" src="../images/images/02.webp" />
          </Card>
        </Row>
        <Row className="justify-content-center flex">
          <Card className='px-0' style={{background:'transparent',border:'0', boxShadow:'unset', position: 'relative', width: '190px', flexShrink: '0', borderRadius: '8px', marginBottom: '12px' }}>
            <Card.Img style={{ width: '190px', height: '130px', zIndex: '1', objectFit: 'cover', borderRadius: '8px' }} variant="top" src="../images/images/03.webp" />
          </Card>
        </Row>
        <Row className='mt-3'>
          <Col style={{ color: '#5A5B70', fontSize: '15px' }}>www.mypwedding.com</Col>
        </Row>
      </Container>


    </div>
  );
};

export default PreviewImages;
