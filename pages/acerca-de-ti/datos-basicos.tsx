import React, { useEffect, useState } from 'react';
import CreacionUsuario from '../../components/acerca-de-ti/CreacionUsuario';
import { store } from '../../redux/store';
import Layout from '../../components/acerca-de-ti/Layout';
import { Stack } from '../../utils/simpleStack';
import { triggerNextStep } from '../../redux/actions/genericActions';
import RegisterClient from '../../components/acerca-de-ti/CargaIdentificacion';
import IconPhoneAssistant from '../../components/shared/IconPhoneAssistant/IconPhoneAssistant';
import { redirectNext } from '../../redux/actions/genericActions';

enum ActionsNav {
  BACK = 'BACK',
  FORWARD = 'FORWARD',
}

export const navStack = new Stack<string>();
navStack.push('default');
const firstView = navStack.peek();

const ComponentSwitcher = () => {
  const [step, setStep] = useState<string>(firstView);

  useEffect(() => {
    window['reduxStore'] = store;
    store.subscribe(() => {
      const navStep: string = store.getState().nextHost.infoTakingSession.step;
      const typeOfActionNav: string = store.getState().nextHost
        .infoTakingSession.actionNav;
      if (typeOfActionNav === ActionsNav.BACK) {
        navStack.pop();
        const pastStep = navStack.peek();
        setStep(pastStep);
      } else {
        navStack.push(navStep);
        const newStep = navStack.peek();
        setStep(newStep);
      }
    });
  }, []);

  switch (step) {
    case 'default':
      return <CreacionUsuario triggerNextStep={triggerNextStep} />;

    case 'registerClient':
      return <RegisterClient triggerNextStep={triggerNextStep} redirectNext={redirectNext} />;

    default:
      return null;
  }
};

const DatosBasicosView = () => {
  return (
    <Layout>
      <ComponentSwitcher />
      <IconPhoneAssistant isWithLayout={true} />
    </Layout>
  );
};

export default DatosBasicosView;
