import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/homepage";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        {/*if you want to deploy on github page, you need to add prefix-path*/}
        <Router basename="/personal-website">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    </ChakraProvider>
);

