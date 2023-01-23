import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Nav, { Nav1 } from './Header/Nav1'
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Menu } from "./Header/Menu";
import Nav from "react-bootstrap/Nav";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { border } from "@mui/system";


export const Header = () => {
  
  const [expanded, setExpanded] = useState(false);
  const [close, setClose] = useState(false);

  function toggleSearch() {
    setExpanded(!expanded);
  }

  function cross() {
    setExpanded(close);
  }

  return (
    <div className="">
      {/* <Nav1/> */}
      <div className="header row  ">
        <div className="col-3  text-start">
        <button
          className="searchb  navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleSearch}
        >
          {" "}
          <BsSearch size={25} />
        </button></div>
        <h1 className=" col-6 text-danger  fs-4 text-center">E-PATRAKAR </h1>
        <div className="userb col-3 ">
          <BiUser size={25} />
        </div>
      </div>
      <div>
        <div className=" text-center navb p-2 row text-dark navexpand">
          <Nav>
            <Nav.Link href="#features" className="text-white ms-5 me-3 fs-5">
              Entertainment
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              Sports
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              Travel
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              History
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              News
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              Astrology
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              Trending
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              Weather
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white ms-3 me-3 fs-5">
              Lifestyle
            </Nav.Link>
            {expanded && (
              <a
                
                onClick={cross}
                style={{ cursor: "pointer", fontWeight:"bold", fontSize:"20px", color:"white"}}
              >X</a>
            )}
          </Nav>
        </div>
        {expanded && <Menu/>}
        
      </div>
    </div>
  );
};
