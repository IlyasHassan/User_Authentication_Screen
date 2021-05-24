
/*import './App.css';*/
import { BrowserRouter} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import { Row, Col, Container, Text, Image } from "atomize";
import BDImageRender from "./Components/BDImageRender"
import AuthentificationComponent from "./Components/Authentification"
import FirstPageRow from "./Components/FirstPageRow"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar>
       
      </Navbar>
    </div>


    
            
          

  
  <FirstPageRow
  />

  
</BrowserRouter>
  

  )  ;

  
}

export default App;

