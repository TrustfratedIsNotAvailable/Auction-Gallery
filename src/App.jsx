import './App.css'
import Banner from './Components/Banner/Banner'
import BidItems from './Components/BidItems/BidItems'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='w-11/12 mx-auto'>
        <div className="left-container w-[70%]">
            <BidItems></BidItems>
        </div>
        <div className="right-container w-[30%]"></div>
      </div>
    </>
  )
}

export default App
