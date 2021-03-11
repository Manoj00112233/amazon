import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      {/* product  */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Learn Startup: How Constant Innovation Creates Successful Businesses Paperback"
          price={11.5}
          rating={5}
          image="https://www.xda-developers.com/files/2020/05/XPS-17-1024x1024.png"
        />
        {/* 2nd product */}
        <Product
          id="12321342"
          title="The Learn Startup: How Constant Innovation Creates Successful Businesses Paperback"
          price={15.5}
          rating={4}
          image="https://cms.qz.com/wp-content/uploads/2019/08/Samsung-Galaxy-Note10-Plus-review.jpg?quality=75&strip=all&w=1200&h=900&crop=1"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321343"
          title="The Learn Startup: How Constant Innovation Creates Successful Businesses Paperback"
          price={11.5}
          rating={5}
          image="https://www.imaging-resource.com/PRODS/nikon-p1000/Z-NIKON-P1000-FRONTLEFT-ZOOM.JPG"
        />
        {/* 2nd product */}
        <Product
          id="12321344"
          title="The Learn Startup: How Constant Innovation Creates Successful Businesses Paperback"
          price={11.5}
          rating={5}
          image="https://i.gadgets360cdn.com/large/Samsung_Galaxy_S20_ultra_cover_1585735378271.jpg"
        />
        <Product
          id="12321345"
          title="The Learn Startup: How Constant Innovation Creates Successful Businesses Paperback"
          price={11.5}
          rating={5}
          image="https://content.abt.com/image.php/big-MVVJ2LLA.jpg?image=/images/products/BDP_Images/big-MVVJ2LLA.jpg&canvas=1&quality=80&min_w=600&min_h=400"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="The Learn Startup: How Constant Innovation Creates Successful Businesses Paperback"
          price={11.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
