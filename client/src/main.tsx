import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const review = process.env.REACT_APP_BASE_URL;
console.log(review);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
