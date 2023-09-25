import { Provider } from 'react-redux';
import './App.css';
import Body from './Body';
import Head from './Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>   
  <Head></Head>
  <Body></Body>

  </Provider>

  );
}

export default App;
