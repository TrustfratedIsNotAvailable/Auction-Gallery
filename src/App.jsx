import './App.css'
import AuctionsContainer from './Components/AuctionsContainer/AuctionContainer'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AuctionsContainer></AuctionsContainer>
      <Footer></Footer>
      <ToastContainer  position="top-right" autoClose={3000}  />
    </>
  )
}

export default App
