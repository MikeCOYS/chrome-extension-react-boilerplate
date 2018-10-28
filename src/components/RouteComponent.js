import React from "react";
import { goBack } from "route-lite";
import { IFrame } from "./IFrame";

export const RouteComponent = ({ text }) => {
  return (
    <IFrame>
      <div>
        <h1>{text}</h1>
        <button onClick={goBack}>Go Back</button>
      </div>
    </IFrame>
  );
};
