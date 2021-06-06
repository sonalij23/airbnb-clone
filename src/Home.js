import React from "react";
import "./Home.css";
import Banner from "./Banner.js";
import Card from "./Card.js";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://www.glassdoor.com/blog/app/uploads/sites/2/iStock-502915568-2.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://img.redbull.com/images/c_crop,w_2038,h_1359,x_10,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2020/3/10/avwi80ft4disoohi6xh5/bubble-dome-finn-lough"
          title="Unique Stays"
          description="Places that are more fun than just a place to sleep"
        />
        <Card
          src="https://luxury-houses.net/wp-content/uploads/2020/08/Exquisite-Los-Angeles-Modern-House-215-N-Saltair-Ave-1.jpg"
          title="Entire home"
          description="Comfortable private places with rooms for friends or family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://assets.vogue.in/photos/5e2a721e1b8dcb000823d69b/master/w_1600%2Cc_limit/The%252520Stroud%252520House.jpg"
          title="3 Bedroom Flat in Mumbai"
          description="Superhost with the stunning view of the beachside in Mumbai"
          price="₹15000/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/3c30bf5b-245d-413e-b67a-68b8de29807f.jpg?im_w=720"
          title="Penthouse in Bangalore"
          description="Enjoy the amazing sights of Bangalore with this stunning penthouse"
          price="₹35000/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/58cd9cd9-322b-4afb-ac0b-52de4b733a54.jpg?im_w=720"
          title="1 Bedroom Apartment"
          description="Superhost with great amenities and a fabulous shopping complex nearby"
          price="₹4000/night"
        />
      </div>
    </div>
  );
}

export default Home;
