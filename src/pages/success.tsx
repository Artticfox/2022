import React from "react";
import styled from "styled-components";
import { Layout } from "../components/global/Layout";

const success = () => {
  return (
    <Layout title="Success Page">
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Success/Thank You Page</h1>
            </header>

            <p>Thank you for contacting us!</p>
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
