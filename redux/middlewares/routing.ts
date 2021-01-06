import Router from 'next/router';
import { Store } from 'redux';

type Action<T> = {
  type: string;
  payload: T;
};

export const routerMiddleware = () => {
  return (next: (action: Action<any>) => void) => {
    return (action: Action<any>) => {
      if (action.payload?.routeTarget) {
        Router.push(action.payload.routeTarget);
      }
      const result = next(action);

      return result;
    };
  };
};
