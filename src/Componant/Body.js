import React from "react";
import  Crisis  from "./Body/Crisis";
import  Morev  from "./Body/Morev";
import { Politics } from "./Body/Politics";
import { Recommended } from "./Body/Recommended";
import { Tech } from "./Body/Tech"
import Trending from "./Body/Trending";
import { Viral } from "./Body/Viral";
import { Viralv } from "./Body/Viralv";

export const Body = () => {
  return (
    <div className="border border-dark p-4 body">

      <div className="row trending">
        <Trending/>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="crisis">
            <Crisis />
          </div>
          <div className="morev ">
            <Morev />
          </div>
        </div>
        <div className="col-4">
          <div className="viral">
            <Viral />
          </div>
          <div className="recommended">
            <Recommended />
          </div>
        </div>
      </div>
      <div className="politics m-3">
        <Politics />
      </div>
      <div className="row m-1">
        <div className="col-4 viralv ">
          <Viralv />
        </div>
        <div className="col-8 tech ">
          <Tech />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
