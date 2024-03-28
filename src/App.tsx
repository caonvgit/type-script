import { Route, Routes } from "react-router-dom";
import "./_mixin.scss";
import './App.css'
import Footer from "./componnents/footer";
import Header from "./componnents/header";
import "./home.scss"
import Index from "./componnents";
function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Index />} />
    </Routes> 
      

     <Footer />
    </>
  )
}

export default App
