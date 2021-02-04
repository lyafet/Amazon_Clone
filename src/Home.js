import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMjpg_.jpg"
          alt=""
        />
        <div className="home__row">
        <Product
            id="90829332"
            title="
            Samsung C49J890DKN, CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty"
            price={899.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SX679_.jpg"
          />
          <Product
            id="49538094"
            title="Mission: Impossible 6 Movie Collection [Blu-ray + Digital] 4K UHD"
            price={63.12}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81F-AqqpnWL._SL1500_.jpg"
          />
          <Product
            id="12321341"
            title="HP 27 Pavilion All-in-One PC, 10th Gen Intel i7-10700T Processor, 16 GB RAM, Dual Storage 512 GB SSD and 1TB HDD, Full HD IPS 27 Inch Touchscreen, Windows 10 Home, Keyboard and Mouse (27-d0072, 2020)"
            price={1699.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/913XRDUR03L._AC_SX569_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Brooks Brothers Mens 11026 Madison Fit Loro Piana 100% Cashmere Two Button Blazer Jacket Sport Coat Navy Blue"
            price={598.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51ftinu055L._AC_UX342_.jpg"
          />

          <Product
            id="99903850"
            title="Valentines Day Gourmet Dried Fruit &amp; Nut Gift Basket, Black Tower (12 Mix) - Food Arrangement Platter, Care Package Variety, Prime Birthday Assortment, Healthy Kosher Snack Box for Women, Men, Adults"
            price={45.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/819eO08OOnL._SX425_.jpg"
          />
          <Product
            id="3254354345"
            title="A Promised Land Hardcover – November 17, 2020"
            price={39.81}
            rating={4}
            image="https://m.media-amazon.com/images/I/41bffUhJ4xL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="908293132"
            title="Signature Design by Ashley - Alenya Microfiber Upholstery Sofa w/ 2 Throw Pillows, Charcoal"
            price={486.99}
            rating={4}
            image="https://m.media-amazon.com/images/S/abs-image-upload-na/4/AmazonStores/ATVPDKIKX0DER/e12227e3e5b0a471f9be3cf9a005fd15.w1482.h989._CR0%2C397%2C1482%2C296_SX1482_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="The North Face Women's Fur HD Down Parkina Hooded Puffer Jacket Parka"
            price={329.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81ptfvYSU7L._AC_SX342._SX._UX._SY._UY_.jpg"
          />
          <Product
            id="8903851"
            title="LULU the Tiger Goes to the Grocery Store (Cooking Adventures)"
            price={0.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51MODgNHoPL._SX260_.jpg"
          />
          <Product
            id="23445930"
            title="Jordan Air 1 x Off-White NRG - US 10.5"
            price={3519.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/716ShDUCKTL._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12654341"
            title="Pro MERN Stack: Full Stack Web App Development with Mongo, Express, React, and Node"
            price={39.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41NsQLhnYDL._SX348_BO1,204,203,200_.jpg"
          />
          <Product
            id="49923094"
            title="SAMSUNG 85-inch Class QLED Q950T Series - Real 8K Resolution Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model)"
            price={9997.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61HjKBW-cJL._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;