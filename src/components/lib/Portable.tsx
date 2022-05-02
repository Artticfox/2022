// `components` object you'll pass to PortableText w/ optional TS definition
import React from "react";
import { PortableTextComponents } from "@portabletext/react";
import styled from "styled-components";

export const Portable: PortableTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em>{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <H2>{children}</H2>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
};

const H2 = styled.h2`
  display: grid;
  margin-bottom: 1rem;
`;
