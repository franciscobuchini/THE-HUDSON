import React from "react";
import "../stylesheets/food-menu.css"

function FoodMenu(props) {
    return (
        <div className="menu-container">
            <div className="menu-subcontainer">
                <div className="menu-image"></div>
                <div className="menu-text">
                    <h3 className="menu-title">{props.title}</h3>
                    <p className="menu-description">{props.describe}</p>
                </div>
            </div>
            <div className="menu-price">{props.price}</div>
        </div>
    )
}

export default FoodMenu