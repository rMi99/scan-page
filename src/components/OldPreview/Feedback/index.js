import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../../../custom.css';
import "aos/dist/aos.css";

import React from "react";


let PreviewFeedback = (props) => {


    const feedback_categories = [
        {
            'name': 'Restaurant',
            'icon': 'Food',
        },
        {
            'name': 'Room',
            'icon': 'Room',
        },
        {
            'name': 'Beverages',
            'icon': 'Beverages',
        },
    ];

    const feedback_sub_categories = [

        [
            {
                'name': 'Food'
            },
            {
                'name': 'Beverages'
            },
            {
                'name': 'Service'
            }
        ],
        [
            {
                'name': 'Bed'
            },
            {
                'name': 'Cleaning'
            },
            {
                'name': 'Services'
            }
        ],


    ];


    const title = 'Give us your feedback';
    const name = 'Hotel Opera';


    const data = {
        feedback_categories,
        title,
        name,
        feedback_sub_categories
    }

    const [visible, setVisible] = React.useState(false);

    const [subCategory, setSubCategory] = useState(null);

    const [review, setReview] = useState(null);

    const [value, setValue] = React.useState(null);

    const getSubCategory = (index) => {
        setSubCategory(data.feedback_sub_categories[index]);
    }


    return (
        <div>
            <Container fluid className="px-0 pt-5 pb-4" style={{ backgroundColor: '#0e379a' }}>
                <Col lg="4" xs="12" className="mx-auto">
                    <Row className="justify-content-md-center align-items-center mx-0" style={{ color: '#ffffff' }}>
                        <Col xs="2" lg="2" style={{ display: visible || review ? 'block' : 'none' }}>
                            <ArrowBackIcon onClick={() => { setVisible(false); setReview(false) }} />
                        </Col>
                        <Col xs="8" lg="8" style={{ fontSize: '24px', fontWeight: 'bold', }}>{data?.name}</Col>
                        <Col xs="2" lg="2">
                            <RateReviewIcon />
                        </Col>
                    </Row>
                </Col>
            </Container>
            <Container fluid className="px-0" style={{ position: 'relative', }}>
                <Col style={{ backgroundColor: '#0e379a', height: '80px', position: 'absolute', top: '0', width: '100%', zIndex: '0', }}></Col>

                <Col lg="4" xs="12" className="mx-auto " style={{ backgroundColor: '#ffffff', minHeight: '400px', zIndex: '1', position: 'relative', borderRadius: '10px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.5)', padding: '20px', display: !visible && !review ? 'block' : 'none' }}>

                    <div>
                        <h2 style={{ textAlign: 'left', fontSize: '22px', marginBottom: '18px' }}>{data?.title}</h2>
                        <p style={{ textAlign: 'left', fontSize: '15px', color: '#68676c', marginBottom: '24px' }}>Please select to review a category.</p>
                    </div>

                    {data?.feedback_categories.map((category, index) => {
                        return data.feedback_sub_categories[index + 1] ?
                            <Card style={{ border: '10px', boxShadow: '0 4px 6px 0 #cdd1e0', position: 'relative', padding: '0px 14px', marginBottom: '10px', textAlign: 'center' }} key={index} onClick={() => { setVisible(true); getSubCategory(index + 1) }}>
                                <Card.Body style={{ display: 'flex', alignItems: 'center', }}>
                                    <img className='img-fluid' src={`../images/category-icons/${category.icon}.png`} alt="" style={{ fontSize: '20px', color: '#68676c', width: '20px', opacity: '0.5' }} />
                                    <Card.Text className="mb-0 ms-3" style={{ color: '#68676c' }}>{category.name}</Card.Text>

                                    {data.feedback_sub_categories[index + 1] ?
                                        <ArrowForwardIosIcon onClick={() => { setVisible(true); getSubCategory(index + 1) }} className="ml-auto" style={{ fontSize: '20px', color: '#68676c' }} />
                                        : ''
                                    }

                                </Card.Body>
                            </Card>
                            :
                            <Card style={{ border: '10px', boxShadow: '0 4px 6px 0 #cdd1e0', position: 'relative', padding: '0px 14px', marginBottom: '10px', textAlign: 'center' }} key={index} onClick={() => { setReview(true) }} >
                                <Card.Body style={{ display: 'flex', alignItems: 'center', }}>
                                    <img className='img-fluid' src={`../images/category-icons/${category.icon}.png`} alt="" style={{ fontSize: '20px', color: '#68676c', width: '20px', opacity: '0.5' }} />
                                    <Card.Text className="mb-0 ms-3" style={{ color: '#68676c' }}>{category.name}</Card.Text>
                                </Card.Body>
                            </Card>
                    }

                    )}

                </Col>

                {/* Sub category form */}
                {visible &&

                    <Col lg="4" xs="12" className="mx-auto " style={{ backgroundColor: '#ffffff', minHeight: '400px', zIndex: '1', position: 'relative', borderRadius: '10px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.5)', padding: '20px' ,display: !review ? 'block' : 'none' }}>

                        <div>
                            <h2 style={{ textAlign: 'left', fontSize: '22px', marginBottom: '18px' }}>{data?.title}</h2>
                            <p style={{ textAlign: 'left', fontSize: '15px', color: '#68676c', marginBottom: '24px' }}>Please select to review a category.
                            </p>
                        </div>


                        {subCategory.map((category, index) => (
                            <Card style={{ border: '10px', boxShadow: '0 4px 6px 0 #cdd1e0', position: 'relative', padding: '0px 14px', marginBottom: '10px', textAlign: 'center' }} key={index} onClick={() => { setReview(true) }}>
                                <Card.Body style={{ display: 'flex', alignItems: 'center', }}>
                                    <Card.Text className="mb-0 ms-3" style={{ color: '#68676c' }}>{category.name}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}

                    </Col>

                }



                {/* Feedback from */}
                {review &&
                    <Col lg="4" xs="12" className="mx-auto " style={{ backgroundColor: '#ffffff', minHeight: '400px', zIndex: '1', position: 'relative', borderRadius: '10px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.5)', padding: '20px', }} >

                        <div>
                            <h2 style={{ textAlign: 'left', fontSize: '22px', marginBottom: '18px' }}>ssssssssssssss</h2>
                            <p style={{ textAlign: 'left', fontSize: '15px', color: '#68676c', marginBottom: '24px' }}>Please evaluate using the stars..</p>
                        </div>

                        <div>
                            <Rating
                                className='rating-star'
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>

                        <FloatingLabel controlId="floatingTextarea" label="Add a comment" className="mb-3">
                            <Form.Control style={{ boxSizing: 'border-box', height: '150px' }} as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>


                        <div className='d-flex justify-content-evenly'>
                            <Button className='save-more' variant="outline-primary" size="lg">
                                Save and rate more
                            </Button>{' '}
                            <Button className='send-feedack' variant="secondary" size="lg" disabled={!value} style={{ backgroundColor: value ? '#1D59F9' : '' }}>
                                Send feedback
                            </Button>{' '}
                        </div>
                    </Col>
                }

            </Container>


        </div >
    )
};



export default PreviewFeedback;