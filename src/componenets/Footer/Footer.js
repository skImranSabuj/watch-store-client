import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { faUser, faSchool, faAddressBook, faAnchor, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../hooks/useAuth';
import './Footer.css'
const userLogo = <FontAwesomeIcon icon={faUser} />
const school = <FontAwesomeIcon icon={faSchool} />
const third = <FontAwesomeIcon icon={faAddressBook} />
const fourth = <FontAwesomeIcon icon={faAnchor} />
const down = <FontAwesomeIcon icon={faDownload} />

const Footer = () => {
    const { user } = useAuth()
    return (
        <div className="bg-dark py-3 px-1 text-center text-white">
            <p>Thanks Yoy Dear. <strong> {user.displayName} </strong>   for vising Us!</p>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Terms & Conditions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        ©2021 Dorkar Watch
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="socail-icons">
            </div>
            <ul className="footer-icons">
                <li>{school}</li>
                <li>{userLogo}</li>
                <li>{third}</li>
                <li>{fourth}</li>
                <li>{down}</li>
            </ul>

            <p>Dorkar Watch is part of Dorkar Ltd., the world leader in online Watch selling, services.</p>
        </div>
    );
};

export default Footer;