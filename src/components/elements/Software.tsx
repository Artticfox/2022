import React from "react";
import styled from "styled-components";
import { Logos } from "../../lib/Logos";

interface Props {
  software: any;
  description?: boolean;
}

const Software = ({ software, description }: Props) => {
  return (
    <Item>
      <Logos logo={software.slug.current} />
      <h6>{software.title}</h6>
      {description && <p>{software.description}</p>}
    </Item>
  );
};

const Item = styled.div`
  display: grid;
  gap: 1rem;
  align-content: start;
`;

export default Software;
