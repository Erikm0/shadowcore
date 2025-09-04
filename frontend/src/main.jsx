import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AllProducts from './AllProducts.jsx'
import Collection from './Collection.jsx'
import AboutUs from './AboutUs.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/products" element={<AllProducts/>}></Route>
            <Route path="/collections" element={<Collection/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
        </Routes>
    </BrowserRouter>,
)
