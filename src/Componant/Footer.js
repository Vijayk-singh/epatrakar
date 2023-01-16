import React from "react";
import { Link, Outlet } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import{
  AiFillApple
} from "react-icons/ai"
import{
  TbBrandGooglePlay
} from "react-icons/tb"
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Logo from "../Componant/Footer/Logo.jpg";
export const Footer = () => {
  return (
    <div className="footer ">
      <div className="Explore row">
        <h4>Explore</h4>
        <div className="footer-link col-2 me-5">
          <ul>
            <li>
              <a to="/">Entertainment</a>
            </li>
            <li>
              <a>Astrology</a>
            </li>
          </ul>
        </div>
        <div className="footer-link col-2 me-5">
          <ul>
            <li>
              <a to="/">Sports</a>
            </li>
            <li>
              <a to="/">Trending</a>
            </li>
          </ul>
        </div>
        <div className="footer-link col-2 me-5">
          <ul>
            <li>
              <a to="/">Travel</a>
            </li>
            <li>
              <a to="/">Weather</a>
            </li>
          </ul>
        </div>
        <div className="footer-link col-2 me-5">
          <ul>
            <li>
              <a to="/">History</a>
            </li>
            <li>
              <a to="/">Lifestyle</a>
            </li>
          </ul>
        </div>
        <div className="footer-link col-1 me-5">
          <ul>
            <li>
              <a to="/">Reel</a>
            </li>
            <li>
              <a to="/">Culture</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Footer1 row pt-5">
        <div className="Social col-3  ">
          {" "}
          <h4 className="ps-4 pb-3">
            <img src={Logo} width="190px" height="190px"></img>
          </h4>
          <ul>
            <a className="pe-3 ">
              {" "}
              <BsFacebook size={25} color="white" />
            </a>
            <a className="pe-3 ps-3">
              {" "}
              <BsInstagram size={25} color="white" />
            </a>
            <a className="pe-3 ps-3 ">
              {" "}
              <BsLinkedin size={25} color="white" className="border rounded"/>
            </a>
            <a className="ps-3">
              {" "}
              <BsTwitter size={25} color="white" />
            </a>
          </ul>
        </div>
        <div className="About col-2  pt-5">
          <h3>About us</h3>
          <ul>
            <li>Who we are</li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Advertise with us</li>
          </ul>
        </div>{" "}
        <div className="Support col-2  pt-5">
          <h3>Support</h3>
          <ul>
            <li>FAQS</li>
            <li>Help Center</li>
            <li>My account</li>
            <li>Give feedback</li>
          </ul>
        </div>
        {/* </Col>
            <Col> */}{" "}
        <div className="Contactus col-2  pt-5">
          <h3>Contact us</h3>
          <ul>
            <li>9999999999</li>
            <li>info@epatrakaar.com</li>
            <li>E - patrakaar Complex phase 1 , New Delhi 110048, India</li>
            <li></li>
          </ul>
        </div>{" "}
        <div className="Getintouch col-3  pt-5 ">
          <h3 className="text-center">Get in touch</h3>

          <div class="input-group mb-3 pt-3 container">
            <input
              type="text"
              className="form-control "
              placeholder="Email id"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <a class="input-group-text bg-dark text-white" id="basic-addon2">
              <BsArrowRight />
            </a>
          </div>
          <div className="container pt-4">
            <a className="border border-white rounded-3 text-white me-3 pt-2 "><AiFillApple size={30}  />App Store </a>
            <a className="border border-white rounded-3 text-white pt-2"><TbBrandGooglePlay size={30}/>Google Play</a>
          </div>
         
        </div>
        <div className="row pt-5  mt-5 pb-3  small">
            <div className="col  ps-5  ms-2">  © 2022 E-patrakaar LLC. All rights reserved.</div>
            <div className="col pe-4 me-2 text-end">To report security issues mail us at security@epatrakaar.com</div>
          </div>
      </div>
    </div>
  );
};
