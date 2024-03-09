import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
// import { ThemeProvider } from '@/components/theme/theme-provider.tsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);

//! for future feature
{
    /* <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> */
}
{
    /* </ThemeProvider> */
}
