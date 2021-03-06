import * as React from "react";
import { Container,Image } from "atomize";
import BDImage from "../Styles/assets/backdrop.jpg";

class BDImageRender extends React.Component {
  
  render() {

    return (
      <div className="img-1" style={{justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
        <Container
          shadow="3"
          border={{ b: "5px solid" }}
          bg="white"
          p={{ b: "5rem", x: "2rem" }}
          borderColor="gray400"
          rounded="xl"
        >
          
                <br />
                <Image
                  shadow="3"
                  width="80%"
                  height= '80%'
                  border={{ b: "3px solid" }}
                  borderColor="gray400"
                  m={{ r: "2rem" }}
                  rounded="xl"
                  src={BDImage}
                  d={{ lg: "none" }}
                />
              

        </Container>
      </div>
    );
  }
}

export default BDImageRender;
