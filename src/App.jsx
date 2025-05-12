
import './App.css'
import RootLayout from './Components/Layout/RootLayout'
import Home from './Components/Page/Home'
import About from './Components/Page/About'
import Contract from './Components/Page/Contract'
import { Router, Routes, Route} from 'react-router-dom';
function App() {
  

  return (
    <>
   <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contract" element={<Contract/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
