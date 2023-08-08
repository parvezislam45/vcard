import React from "react";
import Banner from "./Banner";
import Nfc from "./Nfc";
import Started from "./Started";
import Count from "./Count";
import Service from "./Service";
import Partner from "./Partner";
import Product from "./Product";
import Features from "./Features";
import Question from "./Question";
import ClientSay from "./ClientSay";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Nfc/>
      <Started/>
      <Count/>
      <Service/>
      <Partner/>
      <Product/>
      <Features/>
      <Question/>
      <ClientSay/>
    </div>
  );
};

export default Home;
