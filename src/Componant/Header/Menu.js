import React from 'react'
import Nav from 'react-bootstrap/Nav';

export const Menu = () => {
  return (
    <div className=" text-center bg-danger p-3" >
    <Nav >
            <Nav.Link href="#features">Entertainment</Nav.Link>
            <Nav.Link href="#pricing">Sports</Nav.Link>
            <Nav.Link href="#pricing">Travel</Nav.Link>
            <Nav.Link href="#pricing">History</Nav.Link>
            <Nav.Link href="#pricing">News</Nav.Link>
            <Nav.Link href="#pricing">Astrology</Nav.Link>
            <Nav.Link href="#pricing">Trending</Nav.Link>
            <Nav.Link href="#pricing">Weather</Nav.Link>
            <Nav.Link href="#pricing">Lifestyle</Nav.Link>
          </Nav>
          </div>

  )
}
