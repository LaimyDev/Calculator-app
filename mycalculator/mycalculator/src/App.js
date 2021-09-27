/* eslint-disable no-eval */
import React from 'react';
import './App.css';
import Keypad from "./components/Keypad";
import Output from "./components/Output";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
 
state = {
  result:""
};

buttonPressed = buttonName => {

  if (buttonName === "="){

    this.calculate();
  }

  else if (buttonName === "AC"){

    this.setState({ 
      result:""
      });
  }

  else {
    this.setState({ result:this.state.result + buttonName
     });
  }
};


calculate = () => {

  try{
    this.setState({result:eval(this.state.result)
    });
  } catch(e){
    this.setState({result:"Error"});
  }
};

render(){

  return(
    <div className="App">
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
  integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
  crossorigin="anonymous"
/>
<Container>
  <Row>
   <Col>
    <Output result={this.state.result}></Output>
  </Col>
  </Row>
  <Row>
  <Col>
    <Keypad buttonPressed={this.buttonPressed}></Keypad>
    </Col>
    </Row>
</Container>
</div>
  );
};
}

export default App;
