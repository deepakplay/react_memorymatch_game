import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { CardListProvider } from './context/cardlist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CardListProvider>
            <App />
        </CardListProvider>
    </React.StrictMode>
);

