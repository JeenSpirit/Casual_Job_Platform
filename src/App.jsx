import CssBaseline from '@mui/material/CssBaseline';
import Home from './page/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import RandomPage from './page/RandomPage';

function App() {


  return (
    <>

      <CssBaseline />

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='randompage' element={<RandomPage/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
