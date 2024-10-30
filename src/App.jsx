import EstiloGlobal, { Container } from './EstiloGlobal'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './Pages/Home/index'

import store from '../Store'
import AdicionarContato from './Pages/Cadastro/index'

const rotas = createBrowserRouter([        
    {           
        path: '/',           
        element: <Home/>
    }, 
    {           
        path: '/novo',           
        element: <AdicionarContato/> 
    }
    ])

function App (){
    return(
        <Provider store = {store}>
            <EstiloGlobal/>
            <Container>
            <RouterProvider router={rotas} />
            </Container>
        </Provider>

)
}

export default App
