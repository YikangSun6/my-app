import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Register from './Register'
import Home from './Home'
import AddQuestion from './AddQuestion'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
		<Route path="/Register" element={<Register />} />
		<Route path="/Home" element={<Home />} />
		<Route path="/AddQuestion" element={<AddQuestion />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
