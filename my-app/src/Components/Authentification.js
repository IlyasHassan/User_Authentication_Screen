import * as React from "react";
import { Text, Container, Image } from "atomize";
import { Button } from "atomize";
import GoogleLogo from "../Styles/assets/google_logo.svg"



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
            border={{ b: "5px solid" }}
            borderColor="gray400"
            bg="white" 
          > 
          
          <Text className="SignInText" style={{fontWeight: "bold"}}> Sign up to begin your adventure</Text>

          <t style={{fontSize: "small"}}>Already a member? Login instead</t>
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
       <Image
        shadow="3"
        width="5%"
        justifyContent='center'
        border={{ b: "3px solid" }}
        borderColor="gray400"
        m={{ r: "2rem" }}
        rounded="xl"
        src={GoogleLogo}
        />
         &nbsp;Continue with google
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
    <input type="text" name="name" />
  </label>

</form>
<p>Password (min. 8 characters)</p>
<form>
<label>
    <input type="text" name="name" />
  </label>

</form>

<form >
<label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} 
            />
            I agree to the Terms of Service and Privacy Policy
        </label>
</form>
<Button
      h="4rem"
      w="90%"
      m={{ x: "1.75rem" }}
      p={{ x: "1.75rem" }}
      textSize="body"
      textColor="info700"
      justifyContent='right'
      hoverTextColor="info900"
      bg="white"
      hoverBg="info200"
      border="1px solid"
      borderColor="info700"
      hoverBorderColor="info900"
    >
      Get Started
    </Button>

            
          </Container>
        </div>
    );

        }
    }



export default Authentification;