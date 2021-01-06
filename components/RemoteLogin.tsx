import React from "react";
import RemoteWrapper from "../utils/RemoteWrapper";
import MfsUrl from "../constants/MfUrls";

const remoteSimFormMf = MfsUrl.registerClient.loginModule;


const RemoteLogin = () => {
  return (
    <RemoteWrapper
      scope={remoteSimFormMf.scope}
      module={remoteSimFormMf.module}
      remoteUrl={remoteSimFormMf.remoteUrl}
    />
  );
};

export default RemoteLogin;
