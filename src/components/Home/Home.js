import React from "react";
import "../Home/Home.css";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id="12321341"
              title="The lean startup: How Constant Innovation Creates Radically Successful Buisnesses Paperback"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
            />
            <Product
              id="19538091"
              title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band"
              price={289}
              image="data:image/webp;base64,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"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="4903850"
              title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
              price={29.99}
              image="data:image/webp;base64,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"
              rating={4}
            />
            <Product
              id="23445930"
              title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone"
              price={189}
              image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SX522_.jpg"
              rating={4}
            />
            <Product
              id="3254354345"
              title="Apple AirPods with Charging Case (Wired)"
              price={189}
              image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="2347861"
              title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
              price={189}
              image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg"
              rating={3}
            />
            <Product
              id="7889652"
              title="Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)"
              price={189}
              image="https://images-na.ssl-images-amazon.com/images/I/61vflt1U5gL._AC_SL1024_.jpg"
              rating={3}
            />
            <Product
              id="56748893"
              title="Microsoft Xbox One S 1Tb Console - White"
              price={189}
              image="https://images-na.ssl-images-amazon.com/images/I/61zjj2sgXML._SL1500_.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
      <Footer footerStyle="second-footer" />
    </div>
  );
}

export default Home;
