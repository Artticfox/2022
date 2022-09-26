import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
import styled from "styled-components";

interface Props {
  id?: string;
  publicID: string;
  description: string;
  mobile: boolean;
}

const Video = ({ id, publicID, description, mobile }: Props) => {
  console.log(mobile);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "arttic-fox",
      apiKey: "572276458979255",
      apiSecret: "DtrsXISJd42JvxbVmPnhZrWnXvE",
    },
  });
  return (
    <div>
      <AdvancedVideoS
        cldVid={cld.video(publicID)}
        autoPlay
        loop
        mobile={mobile}
        plugins={[lazyload()]}
      />
      <p>{description}</p>
    </div>
  );
};

export default Video;

const AdvancedVideoS = styled(AdvancedVideo as any)<{ mobile: boolean }>`
  width: 100%;
  max-width: ${({ mobile }: any) => (mobile ? "375px" : "100%")};
  border-radius: ${(props) => (props.mobile ? "32px" : "8px")};
  box-shadow: 2px 1px 6px rgb(0 0 0 / 20%);
`;
