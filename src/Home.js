import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home(){
  return(
    <div className="home">
    <div className="home_container">
    <img className="home_image" src="images/amazon_home.jpg"/>
    <div className="home_row">
    <Product title="Gigabyte Nvidia GeForce RTX 3080 AORUS Xtreme 10GB GDDR6X Graphics Card (GV-N3080AORUS X-10GD)" price={6969.69} image="images/Graphic_card.jpg" rating={5} />
    <Product title="Samsung 108 cm (43 Inches) Super 6 Series 4K UHD LED Smart TV UA43NU6100 (Black) (2019 model)" price={6969.69} image="images/samsung_tv.jpg" rating={3}/>

    {/*product*/}
    {/*product*/}
    </div>
    <div className="home_row">
    <Product title="JBL Endurance Run BT Sweat Proof Wireless in-Ear Sport Headphones (Yellow)" price={6969.69} image="images/jbl_speaker.jpg" rating={4}/>
    <Product title="Mi 10 (Coral Green, 8GB RAM, 256GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready" price={6969.69} image="images/mi_10.jpg" rating={3} />
    <Product title="LG G8X (Black, 128 GB)  (6 GB RAM)" price={6969.69} rating={4} image="images/my_phone.jpeg"/>

    {/*product*/}
    {/*product*/}
    {/*product*/}
    </div>
    <div className="home_row">
    <Product title="Asus VivoBook Gaming F571GT-AL318T (2020) (Core i7 9th Gen/16 GB + 32 GB Optane/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650/15.6 inch 120 Hz/Star Black/2.14 kg)" price={6969.69} image="images/my_laptop.jpg" rating={4}/>

    {/*product*/}
    </div>
    </div>
    </div>
  );
}

export default Home
