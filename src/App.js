import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Footer from "./components/Footer";
import Linktree from "./components/Linktree";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
         <Routes>
            
            <Route path="/" element={
              <>
              <Profile />
              <Linktree />
              </>
            }/>
            
            <Route path="/contact" element={<Contact />}/>
    
          </Routes>
          <Footer />
    </Router>
    
  );
}

export default App;