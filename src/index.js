import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { CardListProvider } from './context/cardlist';

const rootEle = document.getElementById('root');
const root = ReactDOM.createRoot(rootEle);
root.render(
    <React.StrictMode>
        <CardListProvider>
            <App />
        </CardListProvider>
    </React.StrictMode>
);

