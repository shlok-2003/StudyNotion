import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
// import { ThemeProvider } from '@/components/theme/theme-provider.tsx';
import { Provider } from 'react-redux';
import store from '@/redux';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

{
    /* <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> */
}
{
    /* </ThemeProvider> */
}
