import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from '../routes';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  return (
    <>      
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </>
  )
}

export default App;
