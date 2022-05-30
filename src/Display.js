import React from "react";
import "./Display.css";

const Display = (prop) => {
  return (
    <div id="main">
      <div key="main" className="table">
        <div className="content">
          <h3>City</h3>
        </div>
        <div className="content">
          <h3>State</h3>
        </div>
        <div className="content">
          <h3>Country</h3>
        </div>
        <div className="content">
          <h3>Postcode</h3>
        </div>
        <div className="content">
          <h3>Street number</h3>
        </div>
        <div className="content">
          <h3>Latitude</h3>
        </div>
        <div className="content">
          <h3>Longitude</h3>
        </div>
      </div>
      {prop.data.map((ele, index) => {
        return (
          <div key={index + 1} className="table">
            <div className="content">{`${ele.location.city}`}</div>
            <div className="content">{`${ele.location.state}`}</div>
            <div className="content">{`${ele.location.country}`}</div>
            <div className="content">{`${ele.location.postcode}`}</div>
            <div className="content">{`${ele.location.street.number}`}</div>
            <div className="content">{`${ele.location.coordinates.latitude}`}</div>
            <div className="content">{`${ele.location.coordinates.longitude}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
