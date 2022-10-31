import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Layout } from "../components/global/Layout";

const success = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <Layout title="Success Page">
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>We got you message</h1>
            </header>

            <p>
              Thank you for contacting us! We will get back to you as soon as we
              can.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const Container = styled.div`
  display: grid;
`;

export default success;
