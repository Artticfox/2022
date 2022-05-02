import React from "react";
import styled from "styled-components";

export const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email <input type="email" name="email" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

const Container = styled.div`
  display: grid;
`;
