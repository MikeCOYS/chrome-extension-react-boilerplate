import React from "react";
import { Link } from "route-lite";
import { RouteComponent } from "./RouteComponent";
import { IFrame } from "./IFrame";

export class MainApp extends React.Component {
  render() {
    return (
      <IFrame>
        <div className="extension-root">
          <h1>Chrome extension with React - Boilerplate</h1>
          <Link
            component={RouteComponent}
            componentProps={{ text: "Hello!" }}
          >
            Go to another child component
          </Link>
        </div>
      </IFrame>
    );
  }
}
