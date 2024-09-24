import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Testingpage from './testingpage.jsx'
import Headerpage from './header.jsx'
import Addition from './Addition.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testingpage/>
    <Headerpage/>
    <Addition/>
  </StrictMode>,
)
