import React from "react";
import "../stylesheets/title-food-menu.css"

function TitleFoodMenu(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
        </div>
    )
}

export default TitleFoodMenu