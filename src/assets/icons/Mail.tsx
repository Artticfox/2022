import React from "react";
import Lottie from "lottie-react";
import email from "./email.json";

export const Mail = () => {
  return <Lottie animationData={email} loop autoPlay />;
};
