import React from "react";
import "../stylesheets/field2080.css"
import DailyDeals from "./dailydeals";

function Field2080(props) {
    return (

        <div className="field-container">
            <div className="field80-container">
                <DailyDeals
                    title01="FAMOUS BRUNCH"
                    title02="GIN TASTING BOARDS"
                    title03="CHOICE HOUR"
                    title04="BEER & BURGER DEAL"
                    title05="BEER TASTING BOARDS"
                    title06="FONDUE NIGHT"
                    title07="STEAK NIGHT"
                    subtitle01="(SATURDAYS 11AM-3PM)"
                    subtitle02="(EVERY DAY)"
                    subtitle03="(MON-THU 6PM-8PM)"
                    subtitle04="(TUESDAY & WEDNESDAY)"
                    subtitle05="(EVERY DAY)"
                    subtitle06="(FRIDAYS)"
                    subtitle07="(MONDAYS & THURSDAYS)"
                    text01="Round up your mates and head on down to The Hudson for our famous brunch! Mimosas, Aperol spritz's, house lagers and pale ales are flowing as well as a great range of non-alcoholic options! Be sure to book in so you don't miss out. "
                    text02="Due to popular demand, we've extended our beer and burger special to span over two days! Come and join us for our burger of the week, a Choice Bros beer and fries for just $25.00"
                    text03="Get two paddles of four gins and a charcuterie board for you and a friend for just $60! We have twelve amazing gins to choose from both paddles are accompanied by a single serve East Imperial tonic water."
                    text04="Grab a beer paddle of any four craft beers we have on tap for just $18 each! We have ales, stouts, sours and much more for your tastebuds to tango with."
                    text05="Thanks to our wonderful brothers and sisters over at Choice Bros and Luna Estate you can now swing by The Hudson every Monday through to Thursday 6pm-8pm for $10 Luna Estate wines and $10 Choice Bros pints and cans."
                    text06="Every Friday night is fondue night here at The Hudson! Velvety, hot, bubbling cheese with a selection of breads, meats and pickled vegetables."
                    text07="The Hudson are excited to present a new addition to our weekly deals - every Monday and Thursday is steak night! Head on down for a grilled steak cooked to your liking and serve with accompaniments for just $25 each!" />
            </div>

            <div className="field20-container">
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}

export default Field2080