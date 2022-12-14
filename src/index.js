import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate} from 'redux-persist/integration/react';
import { persistor, store } from './store/configureStore';
import AppRoutes from './components/AppRoutes';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
