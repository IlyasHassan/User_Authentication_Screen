import * as React from "react";
import { Text, Container } from "atomize";
import { Button } from "atomize";



class Authentification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
          
        };
    }

    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    render(){

        return (  
        <div className="auth-comp" >  
          <Container
            shadow="3"
            justifyContent='center'
            marginTop = '-5'
            border={{ b: "2px solid" }}
            borderColor="gray400"
            bg="white" 
          > 
          <h4 className="titleAuth">Sign up to begin your adventure</h4>
          <h6 className="MemberLogIn">Already a member? Login instead</h6>
          <Button
      h="4rem"
      w="90%"
      m={{ x: "1.75rem" }}
      p={{ x: "1.75rem" }}
      textSize="body"
      textColor="info700"
      hoverTextColor="info900"
      bg="white"
      hoverBg="info200"
      border="1px solid"
      borderColor="info700"
      hoverBorderColor="info900"
    >
      Continue with google
    </Button>
    <Button
      h="4rem"
      w="90%"
      m={{ x: "1.75rem" }}
      p={{ x: "1.75rem" }}
      textSize="body"
      textColor="info700"
      hoverTextColor="info900"
      bg="white"
      hoverBg="info200"
      border="1px solid"
      borderColor="info700"
      hoverBorderColor="info900"
    >
      or sign up with email
    </Button>
    <p>Email</p>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>

</form>
<p>Password (min. 8 characters)</p>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>

</form>

<form>
<label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} 
            />
            I agree to the Terms of Service and Privacy Policy
        </label>
</form>

            
          </Container>
        </div>
    );

        }
    }



export default Authentification;