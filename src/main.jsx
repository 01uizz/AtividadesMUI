import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import FormCadastro from './Components/FormCadastro'
import Quantidade from './Components/Quantidade'
import FormPreferencias from './Components/FormPreferencias'
import FormConfiguracoes from './Components/FormConfiguracoes'
import CadastrodeProdutos from './Components/CadastrodeProdutos'
import ContadorEstoque from './Components/ContadorEstoque'
import ExemploUseState from './Components/ExemploUseState'
import ExemploSweetAlert from './Components/ExemploSweetAlert'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormCadastro />
    <Quantidade />
    <FormConfiguracoes />
    <FormPreferencias />
    <CadastrodeProdutos />
    <ExemploUseState />
    <ContadorEstoque />
    <ExemploSweetAlert />
  </StrictMode>
)
