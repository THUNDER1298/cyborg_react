
import './app.css'
import { BrowserRouter as Router  , Route ,Routes } from 'react-router-dom'

import {  Container } from './Compo/index'
import { Header,Footer} from './sections/index'
import {Home,Profile} from './Pages/index'

const app = () => {
    return(

    <>
      <Router>
        <Header />
        <Container > 
          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/Profile' element={<Profile/>}/>

               
          </Routes>
        </Container>
    <Footer />

    </Router>
    </>
    )
}

export default app