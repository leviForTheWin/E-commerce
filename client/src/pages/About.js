import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Zenith Store"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about-us.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At Zenith Store, we believe in providing you with a seamless and enjoyable online shopping experience. 
          </p>
          <h6> Why Choose Us? </h6>
          <ol>
            <li>Vast Product Selection</li>
            <li>User-Friendly Interface</li>
            <li>Secure Shopping</li>
            <li>Fast and Reliable Shipping</li>
            <li>Exceptional Customer Support</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default About;
