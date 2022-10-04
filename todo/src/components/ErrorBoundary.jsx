import React, { Component } from "react";
import { Dummy } from "./Dummy";
import { UIBackup } from "./UIBackup";

export class ErrorBoundary extends Component {
  render() {
    return (
      <>
        <div>error component</div>
        <UIBackup>
          <Dummy country="india" />
        </UIBackup>
        <UIBackup>
          <Dummy country="russia" />
        </UIBackup>
        <UIBackup>
          <Dummy country="usa" />
        </UIBackup>
      </>
    );
  }
}