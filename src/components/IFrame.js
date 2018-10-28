/*global chrome*/

import React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";

export const IFrame = ({ children }) => {
  return (
    <Frame
      head={[
        <link
          type="text/css"
          rel="stylesheet"
          href={chrome.runtime.getURL("/static/css/content.css")}
        />
      ]}
    >
      <FrameContextConsumer>
        {({ document, window }) => {
          return children;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
