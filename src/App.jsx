import './App.css'
import AuctionsContainer from './Components/AuctionsContainer/AuctionContainer'
import Banner from './Components/Banner/Banner'
import Category from './Components/Category/Category'
import Footer from './Components/Footer/Footer'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function App() {

//   return (
//     <>
//       <Navbar></Navbar>
//       <Banner></Banner>
//       <AuctionsContainer></AuctionsContainer>
//       <Footer></Footer>
//       <ToastContainer  position="top-right" autoClose={3000}  />
//     </>
//   )
// }

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <section id="auctions">
        <AuctionsContainer />
      </section>
      <section id="categories">
        {/* <div className="h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold">Categories Section</h2>
        </div> */}
        <Category />
      </section>
      <section id="how-it-works">
        {/* <div className="h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold">How It Works Section</h2>
        </div> */}
        <HowItWorks />
      </section>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}


export default App
