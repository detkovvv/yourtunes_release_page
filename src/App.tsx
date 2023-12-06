import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AddPage } from './pages/AddPage/AddPage';
import { MainPage } from './pages/MainPage/MainPage.js';
import { store } from './store/index.js';

export const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route element={<MainPage />} path='/' />
                    <Route element={<AddPage />} path='add' />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};
