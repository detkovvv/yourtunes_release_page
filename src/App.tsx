import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AddPage } from './pages/AddPage/AddPage';
import { MainPage } from './pages/MainPage/MainPage';
import { store } from './store/store';

export const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store()}>
                <Routes>
                    <Route element={<MainPage />} path='/' />
                    <Route element={<AddPage />} path='add' />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};
