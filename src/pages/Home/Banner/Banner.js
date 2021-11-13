import React from 'react';
import { Carousel, Nav,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/b1.jpg';
import banner4 from '../../../images/b2.jpg';
import banner3 from '../../../images/b3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 bannar-slider">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h4>Get The Best Time!</h4>
                                <p>Dorkar Watch is a very reputed and popular name for world class watches and writing instruments in Bangladesh.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner4}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h4>Style in yoyr Hand!</h4>
                                <p>Move with time, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h4>Style in yoyr Hand!</h4>
                                <p>Move with time, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            
                        </Carousel.Item>
                    </Carousel></div>
                <div className="col-12 col-md-6  d-flex justify-content-start align-items-center">
                    <div className="text-white">
                        <div className="banner-right mx-3">
                            <h2 className="card-title">Dorkar Watch</h2>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <Link to="/allWatches">                                
                                <Button variant="btn btn-secondary" sx={{}}>Explore</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;