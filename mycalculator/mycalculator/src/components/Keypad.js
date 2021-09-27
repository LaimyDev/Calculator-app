import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Keypad extends React.Component{

    buttonPressed = e =>{
        this.props.buttonPressed(e.target.name);
    };


    render(){
        return(
            //call buttonPressed function on event handler 'onClick'
            <div className="keypad">
        <Container>
         <Row>
           <Col>
            <button 
            name="("
            className="operators"
            onClick={this.buttonPressed}
            >
            (
            </button>
            <button
            name=")"
            className="operators"
            onClick={this.buttonPressed}
            >
            )
            </button>
            <button
            name="%"
            className="operators"
            onClick={this.buttonPressed}
            >
            )
            </button>
            <button 
            name="AC"
            className="operators"
            onClick={this.buttonPressed}
            >
            AC
            </button>
            </Col>
            </Row>
            <Row>
            <Col>
            <button name="7" onClick={this.buttonPressed}>
            7
            </button>
            <button name="8" onClick={this.buttonPressed}>8</button>
            <button name="9" onClick={this.buttonPressed}>9</button>
            <button name="/" className="operators" onClick={this.buttonPressed}>÷</button>
            </Col>
           </Row>
           <Row>
           <Col>
           <button name="4" onClick={this.buttonPressed}>4</button>
           <button name="5" onClick={this.buttonPressed}>5</button>
            <button name="6" onClick={this.buttonPressed}>6</button>
            <button name="*" className="operators" onClick={this.buttonPressed}>x</button>
           </Col>
           </Row>
           <Row>
           <Col>
           <button name="1" onClick={this.buttonPressed}>1</button>
           <button name="2" onClick={this.buttonPressed}>2</button>
           <button name="3" onClick={this.buttonPressed}>3</button>
           <button name="-" className="operators" onClick={this.buttonPressed}>-</button>
           </Col>
           </Row>
           <Row>
           <Col>
           <button name="." onClick={this.buttonPressed}>.</button>
           <button name="0" onClick={this.buttonPressed}>0</button>
           <button name="=" onClick={this.buttonPressed}>=</button>
           <button name="+" className="operators" onClick={this.buttonPressed}>+</button>
           </Col>
           </Row>
            </Container>
            </div>
            );
    }
}