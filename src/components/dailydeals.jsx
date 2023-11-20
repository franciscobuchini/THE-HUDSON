import React from 'react'
import dailydeal01 from '../assets/dailydeal01.png'
import dailydeal02 from '../assets/dailydeal02.png'
import dailydeal03 from '../assets/dailydeal03.png'
import dailydeal04 from '../assets/dailydeal04.png'
import dailydeal05 from '../assets/dailydeal05.png'
import dailydeal06 from '../assets/dailydeal06.png'
import dailydeal07 from '../assets/dailydeal07.png'
import "../stylesheets/dailydeals.css"

function DailyDeals(props) {
    return (
        <div className="dailydeals-container">
            {/* <div className="dailydeals-text">There's always something going on at the Hudson!</div> */}
            <div className="dailydeal dailydeal01">
                <h3>{props.title01}</h3>
                <h4>{props.subtitle01}</h4>
                <img src={dailydeal01} />
                <p>{props.text01}</p>
            </div>
            <div className="dailydeal dailydeal02">
                <h3>{props.title02}</h3>
                <h4>{props.subtitle02}</h4>
                <img src={dailydeal02} />
                <p>{props.text02}</p>
            </div>
            <div className="dailydeal dailydeal03">
                <h3>{props.title03}</h3>
                <h4>{props.subtitle03}</h4>
                <img src={dailydeal03} />
                <p>{props.text03}</p>
            </div>
            <div className="dailydeal dailydeal04">
                <h3>{props.title04}</h3>
                <h4>{props.subtitle04}</h4>
                <img src={dailydeal04} />
                <p>{props.text04}</p>
            </div>
            <div className="dailydeal dailydeal05">
                <h3>{props.title05}</h3>
                <h4>{props.subtitle05}</h4>
                <img src={dailydeal05} />
                <p>{props.text05}</p>
            </div>
            <div className="dailydeal dailydeal06">
                <h3>{props.title06}</h3>
                <h4>{props.subtitle06}</h4>
                <img src={dailydeal06} />
                <p>{props.text06}</p>
            </div>
            <div className="dailydeal dailydeal07">
                <h3>{props.title07}</h3>
                <h4>{props.subtitle07}</h4>
                <img src={dailydeal07} />
                <p>{props.text07}</p>
            </div>
        </div>
    )
}

export default DailyDeals