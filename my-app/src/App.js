
/*import './App.css';*/
import { BrowserRouter} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import BDImageRender from "./Components/BDImageRender"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar>
       
      </Navbar>
    </div>
    
    <BDImageRender
/>
    </BrowserRouter>
    
     
   

  );
}

export default App;

