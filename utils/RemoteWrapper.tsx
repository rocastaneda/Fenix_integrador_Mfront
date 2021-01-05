import React from 'react';
import dynamic from 'next/dynamic';
import { useDynamicScript } from './useDynamicScript';

const RemoteWrapper = ({ scope, module, remoteUrl, ...props }) => {
  const { ready, failed } = useDynamicScript(remoteUrl); //we mount the script tag <script> only when it's necessary

  if (!ready || failed || !global) {
    //if the dynamic mount fails, return null to don't crash the app
    return null;
  }

  const microFrontScope = String(scope); //microfront name, eje: 'mf1'
  const moduleName = String(module); //microfront module/component to require, eje: './Component'

  const Component: React.ComponentType<any> = dynamic(
    async () => {
      const react = require('react');
      const sharedScope = {
        react: {
          [react.version]: {
            get: () =>
              new Promise((reactResolve) => {
                reactResolve(() => react);
              }),
          },
        },
      };

      const mfWindowScope = window[microFrontScope];

      await mfWindowScope.init(sharedScope);

      const moduleFactory = await mfWindowScope.get(moduleName);

      return await moduleFactory();
    },
    {
      ssr: props.ssr || true,
    } //ssr is enabled by default, however, we can turn it off if we have a library that only works with browser
  );

  const { ssr, ...rest } = props; //we clean props from the ssr prop in cased that is passed, since it's not needed in the microfrontend side

  return <Component {...rest} />; //finally, we just render the dynamic component
};

export default RemoteWrapper;
