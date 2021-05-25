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

          <t style={{fontSize: "small"}}>Already a member? <t className="UnderlinedRed">Login instead</t></t>
          <Button className="ContinueButton"
      h="4rem"
      w="90%"
      height="10%"
      m={{ x: "1.75rem" }}
      p={{ x: "1.75rem" }}
      textSize="body"
      textColor="info700"
      hoverTextColor="info900"
      bgc="white"
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
        bg='white'
        rounded="xl"
        src={GoogleLogo}
        />
         &nbsp;Continue with google
    </Button>
    <label className="OrSignUpText">
          <input className="OrSignUpText"
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} 
            />
            or sign up with email
        </label>
    <Text>Email</Text>
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
            I agree to the <t className="UnderlinedRed" >Terms of Service </t> and <t className="UnderlinedRed">Privacy Policy</t>
        </label>
</form>
<Button className="GetStartBTN"
      h="4rem"
      w="90%"
      width="100%"
      m={{ x: "1.75rem" }}
      p={{ x: "1.75rem" }}
      textSize="body"
      textColor="white"
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