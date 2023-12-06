import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {store} from "./store/index.js";
import {Provider} from "react-redux";
import {MainPage} from "./pages/MainPage/MainPage.js";
import {ConfigurePage} from "./pages/ConfigurePage/ConfigurePage.js";

export const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route element={<MainPage/>} path='/'/>
                    <Route element={<ConfigurePage/>} path='configure'/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

