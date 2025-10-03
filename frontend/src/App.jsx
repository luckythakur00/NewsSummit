import './App.css'
import Navbar from './components/Navbar'
import AboutUsPage from './Pages/AboutUsPage'
import AnalyseNews from './Pages/AnalyseNews'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='bg-gradient-to-br from-black via-black to-purple-900'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyseNews" element={<AnalyseNews />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/feedback" element={<ContactPage />} />
      </Routes>

    </div>
  )
}

export default App
