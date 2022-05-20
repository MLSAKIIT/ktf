import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import App from './App'
import NotFound from '@pages/_404';
import '@styles/global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
