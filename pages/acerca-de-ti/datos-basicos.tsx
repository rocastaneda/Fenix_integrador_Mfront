import React, { useEffect, useState } from 'react';
import FormularioDatosBasicos from '../../components/acerca-de-ti/FormularioDatosBasicos';
import { store } from '../../redux/store';
import CodigoVerificacion from '../../components/acerca-de-ti/CodigoVerificacion';
import Layout from '../../components/acerca-de-ti/Layout';
import { Stack } from '../../utils/simpleStack';
import { triggerNextStep } from '../../redux/actions/genericActions';
import { CargaIdentificacion } from '../../components/acerca-de-ti/CargaIdentificacion';
import IconPhoneAssistant from '../../components/shared/IconPhoneAssistant/IconPhoneAssistant';
import CargaInformacionDomiciliaria from '../../components/acerca-de-ti/CargaInformacionDomiciliaria';

enum ActionsNav {
  BACK = 'BACK',
  FORWARD = 'FORWARD',
}

export const navStack = new Stack<string>();
navStack.push('default');
const firstView = navStack.peek();
//we control the navigation with a stack

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
      return <FormularioDatosBasicos triggerNextStep={triggerNextStep} />;

    case 'verificationCode':
      return <CodigoVerificacion triggerNextStep={triggerNextStep} />;

    case 'threeStepForm':
      return <CargaIdentificacion triggerNextStep={triggerNextStep} />;

    case 'addressInformation':
      return <CargaInformacionDomiciliaria />;

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
