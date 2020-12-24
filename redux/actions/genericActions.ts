import actionTypes from '../constants/actionTypes';

export const redirectNext = (routeTarget: string) => {
  return {
    type: actionTypes['router/REDIRECT'],
    payload: { routeTarget: routeTarget },
  };
};

export const triggerNextStep = (step: string, actionNav?: string) => {
  return {
    type: actionTypes['switcher/TRIGGER_NEXT_STEP'],
    payload: { step: step, actionNav: actionNav },
  };
};

export const modalShowState = (activate: boolean) => {
  return {
    type: actionTypes['action/SHOW_MODAL'],
    payload: { activate: activate },
  };
};
