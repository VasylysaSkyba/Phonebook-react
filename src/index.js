import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <AuthLayout>
  <BrowserRouter basename="/goit-react-hw-08-phonebook/">
            <App />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
  </Provider>
</React.StrictMode>
);