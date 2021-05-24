import Authentification from './Authentification';
import BDImageRender  from './BDImageRender';
import { Row, Col, Container, Text, Image } from "atomize";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function ContainerRow() {

    return (
        <div className='rowC' display = 'flex' flex-direction ='row'>
       
               
                <BDImageRender />
                
                <Authentification />
                
          
  
        </div>
        
    );
    }
 

 export default ContainerRow;