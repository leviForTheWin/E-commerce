import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.jpg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
        {/* <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1> */}
          <p className="text-justify mt-2">
            At Zenith Store, we value your privacy and are committed to
            protecting your personal information.
          </p>
          <p>
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your data when you visit and interact with our website. By
            using our website, you agree to the terms described in this policy.
            If you have any questions or concerns regarding your privacy or the
            information we collect, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

// Effective Date: [Insert Date]
