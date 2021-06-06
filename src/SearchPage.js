import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>35 stays . 20 February to 26 February . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>

        <Button variant="outlined">Rooms and beds</Button>

        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/9a8ba267-c65f-44a6-9feb-d18cbe21ce56.jpg?im_w=1200"
        location="Private room in Mumbai"
        title="Lush lodge w/ balcony perfect for couples & work"
        description="2 guests · 1 bedroom · 1 bed · 1 private bathroom · Air conditioning · Wifi · Washing Machine "
        star="4.88"
        price="₹3,850/ night"
        total="₹26,432"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-48355240/original/4aa5ddf7-ba8f-47bf-8701-82fb97256df4.jpeg?im_w=1200"
        location="Entire flat in Mumbai"
        title="❤ Elegant Insta-ready City View 1BHK Wifi Netflix"
        description="5 guests · 1 bedroom · 1 bed · 2 bathrooms · Air conditioning · Kitchen · Wifi · Washing Machine"
        star="4.6"
        price="₹4,020/ night"
        total="₹27,014"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/d10db0a6-3b7d-47cb-ad78-091a6d47253d.jpg?im_w=1200"
        location="Entire flat in Mumbai"
        title="16th floor spacious newly furnished 3BHK apartment"
        description="6 guests · 3 bedrooms · 3 beds · 3 bathrooms · Air conditioning · Kitchen · Wifi · Washing Machine"
        star="4.69"
        price="₹7,450/ night"
        total="₹44,700"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/1a1c6860-35f8-48e9-a3af-485ce60da495.jpg?im_w=1200"
        location="Entire house in Mumbai"
        title=" Entire house hosted by Team"
        description="2 guests · 1 bedroom · 1 bed · 1 bathroom"
        star="4.86"
        price="₹3,349/ night"
        total="₹25,972"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b30771e9-f233-48fe-8829-c8f6262fec5e.jpg?im_w=1200"
        location="Private room in Mumbai"
        title="Luxurious Ensuite Master Room in Colaba!"
        description="4 guests · 1 bedroom · 3 beds · 1 private bathroom · Air conditioning · Kitchen · Wifi · Washing Machine"
        star="5.0"
        price="₹2,500/ night"
        total="₹19,485"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/a7d5d3a0-c0b6-47e8-93a2-c603a714e4e5.jpg?im_w=1200"
        location="Private room in Mumbai"
        title="Luxury room in Dadar near station"
        description="3 guests · 1 bedroom · 1 bed · 1 private bathroom · Air conditioning · Wifi"
        star="4.75"
        price="₹1,500/ night"
        total="₹11,351"
      />
    </div>
  );
}

export default SearchPage;
