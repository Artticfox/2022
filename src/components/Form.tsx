import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const Form = () => {
  const [type, setType] = useState("");
  const handleChangeType = (event: any) => {
    setType(event.target.value);
  };
  const [budget, setBudget] = useState("");
  const handleChangeBudget = (event: any) => {
    setBudget(event.target.value);
  };
  const projectType = [
    {
      value: "Design",
      label: "Design",
    },
    {
      value: "Development",
      label: "Development",
    },
    {
      value: "Full Website",
      label: "Full Website",
    },
    {
      value: "Mobile App",
      label: "Mobile App",
    },
    {
      value: "E-Commerce",
      label: "E-Commerce",
    },
    {
      value: "Social Media Managment",
      label: "Social Media Managment",
    },
    {
      value: "SEO Optimization",
      label: "SEO Optimization",
    },
    {
      value: "Digial Marketing",
      label: "Digial Marketing",
    },
  ];

  const projectBudget = [
    {
      value: "$1.000",
      label: "$1.000",
    },
    {
      value: "$3.000",
      label: "$3.000",
    },
    {
      value: "$5.000",
      label: "$5.000",
    },
    {
      value: "$10.000",
      label: "$10.000",
    },
    {
      value: "$10.000+",
      label: "$10.000+",
    },
    {
      value: "Sky is the limit",
      label: "Sky is the limit",
    },
    {
      value: "Don't want to say",
      label: "Don't want to say",
    },
  ];

  return (
    <FormContainer
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      <Input type="hidden" name="bot-field" />
      <Input type="hidden" name="form-name" value="contact" />

      <TextField
        id="outlined-basic"
        label="Your name"
        variant="outlined"
        required
      />

      <TextField
        id="outlined-basic"
        label="Your email"
        variant="outlined"
        type="email"
        required
      />
      <TextField
        id="outlined-basic"
        label="Your phone number"
        variant="outlined"
        type="phone"
        required
      />
      <TextField id="outlined-basic" label="Your company" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Type of project"
        variant="outlined"
        select
        onChange={handleChangeType}
        value={type}
      >
        {projectType.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-basic"
        label="What is your budget?"
        variant="outlined"
        select
        onChange={handleChangeBudget}
        value={budget}
      >
        {projectBudget.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Label>
        <TextField
          id="outlined-basic"
          label="Tell us about your project"
          variant="outlined"
          type="text"
          multiline
          rows={4}
          required
        />
      </Label>

      <Input type="submit" value="Send Message" />
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: grid;
  max-width: 500px;
  gap: 2rem;
`;

const Input = styled.input`
  display: grid;

  &[type="submit"] {
    border: none;
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    border-radius: 4px;
  }
`;

const Label = styled.label`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
`;
