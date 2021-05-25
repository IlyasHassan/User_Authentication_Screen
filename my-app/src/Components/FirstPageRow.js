import Authentification from './Authentification';
import BDImageRender  from './BDImageRender';
import { Row, Col, Container, Text, Image } from "atomize";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function ContainerRow() {

    return (
        <Container>
        <div className='rowC' >
       
       
                <BDImageRender />
                <Authentification />
  
        </div>
        </Container>
    );
    }
 

 export default ContainerRow;