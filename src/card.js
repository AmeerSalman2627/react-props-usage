import React from "react";
import faker from "@faker-js/faker";

const CardDetails = (props) => {
    const mystyle = {
        padding: "10px",
        margin:"10px",
        fontFamily: "Arial"

      };
    return (
        <div className="col" style={mystyle} >
        <div className="ui card">
            <div className="image">
                <img alt="avatar" src={faker.image.avatar()}></img>
            </div>
            <div className="content">
                <a href="/" className="header">{props.name}</a>
                <div className="meta">
                    <span className="phone">{props.phno}</span>
                </div>
                <div className="email" style={{textDecorationLine:'underline'}}>
                    {props.email}
                </div>
            </div>             
            
        </div>
        </div>
    );

};

export default CardDetails;