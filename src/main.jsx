import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CadastroDeProdutos from './Components/CadastroDeProdutos'
import ExemploSweetAlert from './Components/ExemploSweetAlert'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CadastroDeProdutos />
    <ExemploSweetAlert />
  </StrictMode>
);