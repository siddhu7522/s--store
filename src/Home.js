import React from 'react'
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className="home">
          <img className="home__image" src="https://blog-assets.freshworks.com/freshsales-crm/wp-content/uploads/2018/11/Banner_002.png"/>
<div className="home__row">
          <Product
          
          id="1"
          title="Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Alexa Hands-Free "
          price={14999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg"

          
          
          />
           <Product
          
          id="2"
          title="Nivia Storm Football - Size 5  "
          price={349.00}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81V5qz2qbhL._SX466_.jpg"

          
          
          />
          </div>
          <div className="home__row">
          <Product
          
          id="3"
          title="Pond's Pure White Anti Pollution Activated Charcoal Face Wash, 50 g  "
          price={75.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51VL1KEE3KL._SX679_.jpg"
          />
           <Product
          
          id="4"
          title="Callas Multipurpose Foldable Laptop Table with Cup Holder | Drawer | Mac Holder | Table Holder Study Table, Breakfast Table, Foldable and Portable/Ergonomic. "
          price={849.00 }
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61HZfQba3NL._SL1353_.jpg"
          />
           
           

          </div>
        <div className="home__row">
        <Product
          
          id="5"
          title="Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black "
          price={2499.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
          
          id="6"
          title="Whirlpool 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (WDE 205 ROY 4S INV, Sapphire Radiance, Inverter Compressor) with Base-Drawer"
          price={15290.00 }
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71oQpBCgrNL._SL1500_.jpg"
          />
           <Product
          
          id="7"
          title="Haier 53 L 2 Star Direct-Cool Single Door Desktop Fridge (HR-65KS, Black)"
          price={8890.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/11b4PnMZx4L.jpg"
          />
          
        </div>
      <div className="home__row">
      <Product
          
          id="8"
          title="pTron Bassbuds Lite V2 In-Ear True Wireless Bluetooth 5.0 Headphones with HiFi Deep Bass, Total 20Hrs Playtime, Ergonomic Sweatproof Earbuds, Noise... "
          price={899.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51YMl%2BOstqL._SL1100_.jpg"
          />
      </div>
      <div className="home__row">
      <Product
          
          id="9"
          title="
          Philips Avent SCF796/00 Aven Straw Cup 200 ml (Assorted Color) "
          price={354.00}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/6136uHxzlEL._SL1500_.jpg"
          />
           <Product
          
          id="10"
          title="
          Sattviko Pudina Roasted Makhana Healthy Snacks, (3x67 gm) | Lotus Seeds and Fox Nuts | Immunity Boosters for Adults | Diet Food | Gluten Free | Kids Above 5... "
          price={430.00}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81Zqk9GKd7L._SL1500_.jpg"
          />

      </div>
        </div>
    )
}

export default Home
