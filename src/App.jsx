import React from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Field2080 from './components/field2080.jsx'
import Field2080Food from './components/field2080-food.jsx'
import Field8020Drink from './components/field8020-drink.jsx'
import Field8020DailyDeals from './components/field8020-dailydeals.jsx'
import Field8020 from './components/field8020.jsx'
import ImageBanner from './components/image-banner.jsx'
import ImageBanner02 from './components/image-banner02.jsx'
import Space from './components/space.jsx'

function App() {

  return (
    <div>
      <header>
        <Navbar
          button1="Make a Booking"
          button2="Functions"
          button3="What's On"
          button4="Eat"
          button5="Drink"
          button6="Contact" />
      </header>
      <section>
        <ImageBanner />
        <Field8020DailyDeals id="DailyDeals"
          text="DAILY DEALS & EVENTS" />
        <Space />
        <ImageBanner02 />
        <Space />
        <Field2080Food id="Eat"
          text="EAT" />
        <Space />
        <Field8020Drink id="Drink"
          text="DRINK" />
        <Space />
        <Field2080 id="Functions"
          text="FUNCTIONS" />
        <Space />
        <Field8020 id="Booking"
          text="BOOKING" />
        <Space />
        <Field2080 id="Contact"
          text="CONTACT" />

      </section >
    </div>




  )
}

export default App
