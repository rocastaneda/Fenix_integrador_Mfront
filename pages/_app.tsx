import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createWrapper } from 'next-redux-wrapper';
import SupportButton from '../components/SupportButton';
import '../styles/globals.css';
import '../styles/supportButton.css';
import '../styles/tooltip.css';

//makeStore function that returns a new store for every request
const makeStore = () => store;
const Wrapper = createWrapper(makeStore);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <SupportButton />
    </Provider>
  );
}

export default Wrapper.withRedux(MyApp);
