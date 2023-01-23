import React from 'react'
import { BsSearch } from "react-icons/bs";

export const Menu = () => {
  return (
    <div className="row p-4 navb  search " id="">
    {" "}
    <div className="">
    <div  className="row navb  align-content-center " id="navbarToggleExternalContent" >

    <div class=" col-6 searchbar mb-4" >
      <input
        type="search"
        class="form-control col"
        placeholder="Search "
        aria-label="Search"
        aria-describedby="search-addon"
      /></div>{" "}
      <div className="col-1  BsSearch ">  <BsSearch size={18} /></div>
     
    
     
    
    </div>
    <div className="row ms-5 ps-5 text-white fs-6 nav2">
      <div className="col-1  me-5 p-2"> <ul>
      <li className="pb-3">
        <a to="/">Entertainment</a>
      </li>
      <li>
        <a>Astrology</a>
      </li>
    </ul></div>
      <div className="col-1  me-5 p-2"> <ul>
      <li className="pb-3">
        <a to="/">Entertainment</a>
      </li>
      <li>
        <a>Astrology</a>
      </li>
    </ul></div>
      <div className="col-1  me-5 p-2"> <ul>
      <li className="pb-3">
        <a to="/">Entertainment</a>
      </li>
      <li>
        <a>Astrology</a>
      </li>
    </ul></div>
      <div className="col-1  me-5 p-2"> <ul>
      <li className="pb-3">
        <a to="/">Entertainment</a>
      </li>
      <li>
        <a>Astrology</a>
      </li>
    </ul></div>
      <div className="col-1  me-5 p-2"> <ul>
      <li className="pb-3">
        <a to="/">Entertainment</a>
      </li>
      <li>
        <a>Astrology</a>
      </li>
    </ul></div>
      <div className="col-1  me-5 p-2"> <ul>
      <li className="pb-3">
        <a to="/" >Entertainment</a>
      </li>
      <li>
        <a>Astrology</a>
      </li>
    </ul></div>
      <div className="col-1  me-5 p-2"> <ul>
      <li className="pb-3">
        <a to="/">Entertainment</a>
      </li>
      <li>
        <a>Astrology</a>
      </li>
    </ul></div>
    </div>
    </div>
    </div>
  )
}
