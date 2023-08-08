import React from "react";

const Features = () => {
  return (
    <div className="mt-20" data-aos="fade-up" data-aos-duration="2000">
      {/* <h1 className="text-black text-7xl font-bold text-center">
        vCard Gen Key Features
      </h1> */}
      <section class=" px-20 mt-40">
        <h2 class="mb-20 text-6xl text-center font-bold">Our Product</h2>
        <div class="grid lg:grid-cols-3 gap-20 gap-y-20 mx-auto mt-40">
          <div className="card lg:card-side shadow-md h-80 p-16">
            <figure>
              <img
                src="https://img.lovepik.com/free-png/20210928/lovepik-cell-phone-png-image_401708275_wh1200.png"
                alt="Album"
                className="w-52 h-52 rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl font-bold">Tap</h2>
              <p className="text-3xl mt-5 font-normal"> Share your information with a tap on NFC compatible Smartphone</p>
             
            </div>
          </div>  
          <div className="card lg:card-side shadow-md h-80 p-16">
            <figure>
              <img
                src="https://img.freepik.com/premium-vector/phone-scanning-qr-code-via-mobile-app-icon_212005-593.jpg"
                alt="Album"
                className="w-44 h-44 rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl font-bold">Scan</h2>
              <p className="text-3xl mt-5 font-normal"> Share your information with a tap on NFC compatible Smartphone</p>
             
            </div>
          </div>  
          <div className="card lg:card-side shadow-md h-80 p-16">
            <figure>
              <img
                src="https://www.shareicon.net/data/2015/05/15/38873_sign_256x256.png"
                alt="Album"
                className="w-36 rounded-full"
              />
            </figure>
            <div className="card-body mx-5">
              <h2 className="card-title text-4xl font-bold">Update</h2>
              <p className="text-3xl mt-5 font-normal"> Update, edit and hide your information any time. No additional</p>
             
            </div>
          </div>  
        </div>
      </section>
    </div>
  );
};

export default Features;
