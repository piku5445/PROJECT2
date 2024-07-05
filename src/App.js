//import {Button} from "@chakra-ui/react"
import {  BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Footer from './Components/footer';
import Header from "./Components/Header";
import Login from "./Components/login";
import Home from "./Components/home";
import Upload from "./Components/upload";
import Videos from "./Components/videos";
import Signup from "./Components/signup";


function App() {
  return(
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/videos" element={<Videos />} />
    <Route path="/upload" element={<Upload />} />
   
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer/>
</Router>
  )   
    
}

export default App;
