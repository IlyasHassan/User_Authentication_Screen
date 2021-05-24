import * as React from "react";
import { Text, Container } from "atomize";


class Authentification extends React.Component {

    render() {

        return (  
        <div className="auth-comp" style={{marginTop: '2rem', marginBottom: '2rem'}} >  
          <Container
            shadow="3"
            alignSelf = 'flex-end'
            marginTop = '-5'
            border={{ b: "2px solid" }}
            borderColor="gray400"
            bg="white" 
          > 
          <h4 className="titleAuth">Sign up to begin your adventure</h4>
          <h6 className="MemberLogIn">Already a member? Login instead</h6>

            
          </Container>
        </div>
    )
}
}

export default Authentification;