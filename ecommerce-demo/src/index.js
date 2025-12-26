import AppProvider from './context/AppContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <AppProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AppProvider>
    </Provider>
  </BrowserRouter>

);


