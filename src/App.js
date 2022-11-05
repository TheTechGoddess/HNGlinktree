import {Route, Routes } from 'react-router-dom'; 
import Footer from "./components/Footer";
import Linktree from "./components/Linktree";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  return (
          <>
          
         <Routes>
            
            <Route exact path="/" element={
              <>
              <Profile />
              <Linktree />
              </>
            }/>
            
            <Route exact path="/contact" element={<Contact />}/>
    
          </Routes>
          <Footer />
          </>
    
  );
}

export default App;
