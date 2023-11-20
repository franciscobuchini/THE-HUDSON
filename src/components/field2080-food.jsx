import React from "react";
import "../stylesheets/field2080.css"
import FoodMenu from './food-menu.jsx'

function Field2080Food(props) {
    return (

        <div className="field-container">
            <div className="field20-container">
                <h1>{props.text}</h1>
            </div>
            <div className="field80-container">
                <FoodMenu
                    title="Fries, Rosemary & Sea salt"
                    describe="(vegetarian on request)"
                    price="12" />
                <FoodMenu
                    title="Focaccia, Rosemary"
                    describe="with olive oil"
                    price="5" />
                <FoodMenu
                    title="Country ham cooked in stout"
                    describe="100g"
                    price="12" />
                <FoodMenu
                    title="Cured Meats - Salami & Coppa"
                    describe="60g"
                    price="12" />
                <FoodMenu
                    title="Grilled halloumi"
                    describe="with chili chutney & lemon "
                    price="16" />
                <FoodMenu
                    title="Pork belly bites"
                    describe="with honey soy glaze & pickled onion"
                    price="18" />
                <FoodMenu
                    title="Smoky Roasted Lamb Ribs"
                    describe="with BBQ sauce"
                    price="20" />
                <FoodMenu
                    title="Crispy fried squid"
                    describe="with chili & lime salt"
                    price="18" />
                <FoodMenu
                    title="Popcorn chicken, southern fried"
                    describe="with Sriracha Mayo"
                    price="18" />
                <FoodMenu
                    title="Fries, Rosemary & Sea salt"
                    describe="(vegetarian on request)"
                    price="12" />
                <FoodMenu
                    title="Focaccia, Rosemary"
                    describe="with olive oil"
                    price="5" />
                <FoodMenu
                    title="Country ham cooked in stout"
                    describe="100g"
                    price="12" />
                <FoodMenu
                    title="Cured Meats - Salami & Coppa"
                    describe="60g"
                    price="12" />
                <FoodMenu
                    title="Grilled halloumi"
                    describe="with chili chutney & lemon "
                    price="16" />
                <FoodMenu
                    title="Pork belly bites"
                    describe="with honey soy glaze & pickled onion"
                    price="18" />
                <FoodMenu
                    title="Smoky Roasted Lamb Ribs"
                    describe="with BBQ sauce"
                    price="20" />
                <FoodMenu
                    title="Crispy fried squid"
                    describe="with chili & lime salt"
                    price="18" />
                <FoodMenu
                    title="Popcorn chicken, southern fried"
                    describe="with Sriracha Mayo"
                    price="18" />
            </div>
        </div>
    )
}

export default Field2080Food