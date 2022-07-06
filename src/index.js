import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/homepage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    </ChakraProvider>
);

