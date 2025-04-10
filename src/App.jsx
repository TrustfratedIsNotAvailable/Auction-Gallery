import './App.css'
import AuctionsContainer from './Components/AuctionsContainer/AuctionContainer'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AuctionsContainer></AuctionsContainer>
      <Footer></Footer>
    </>
  )
}

export default App
