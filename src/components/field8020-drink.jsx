import React from "react";
import "../stylesheets/field2080.css"
import FoodMenu from './food-menu.jsx'
import TitleFoodMenu from './title-food-menu.jsx'
import Space from './space.jsx'

function Field8020Drink(props) {
    return (

        <div className="field-container">
            <div className="field80-container">
                <TitleFoodMenu
                    title="Sparkling & Champagne " />
                <FoodMenu
                    title="N.V. Até Sparkling Brut"
                    describe="South Eastern Aus"
                    price="11.5" />
                <FoodMenu
                    title="N.V. Montelvini Prosecco Superiore Extra Dry"
                    describe="Valdobbiadene, Italy"
                    price="15" />
                <FoodMenu
                    title="2020 Zonin Prosecco Rose"
                    describe="Gambellara Italy"
                    price="13" />
                <FoodMenu
                    title="N.V. Baumard Cremant de Loire Carte Turquoise Brut"
                    describe="Loire Valley, France"
                    price="12" />
                <FoodMenu
                    title="N.V. Orban Champagne Blanc de Noir"
                    describe="Champagne, France"
                    price="145" />
                <TitleFoodMenu
                    title="White Wine" />
                <FoodMenu
                    title="2021 Caythorpe Sauvignon Blanc"
                    describe="Marlborough"
                    price="11.5" />
                <FoodMenu
                    title="2021 Chateau Belingard, Bergerac Sec"
                    describe="Dordogne Valley, France"
                    price="13" />
                <FoodMenu
                    title="2021 Luna Estate Pinot Gris"
                    describe="Martinborough"
                    price="11.5" />
                <TitleFoodMenu
                    title="Rosé Wine" />
                <FoodMenu
                    title="2022 Las Campanas Rose"
                    describe="Azagra, Spain"
                    price="12" />
                <FoodMenu
                    title="2021 Palliser Rosé"
                    describe="Martinborough"
                    price="14" />
                <FoodMenu
                    title="2022 Luna Rose"
                    describe="Martinborough"
                    price="12" />
            </div>
            <div className="field20-container">
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}

export default Field8020Drink