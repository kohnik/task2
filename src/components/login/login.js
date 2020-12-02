import React, { Fragment } from "react";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner,Form, FormGroup, Label, Input, FormText, Container 
} from 'reactstrap';

import {Link} from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
//import {connect} from "react-redux";


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render()
    {
        return <Container fluid="lg" className="loginContainer">
   <Form onSubmit={this.submit}>
        <FormGroup>
            <Label for="login">Login</Label>
            <Input type="text" name="login" id="login" placeholder="Введите ваш логин" />
        </FormGroup>
        <FormGroup>
             <Label for="password">Password</Label>
             <Input type="password" name="password" id="examplePassword" placeholder="Введите ваш пароль" />
        </FormGroup>
        <Button>Вход</Button>
        

    </Form>                    
                </Container>
    }
 
  
      

  
        submit=(e)=>
        {   e.preventDefault();
            let data= new FormData(e.target)
            
            
            
            if(data.get("login")!="" && data.get("password")!="")
            {
                localStorage.setItem("login",data.get("login"))
                localStorage.setItem("password",data.get("password"));
                {<Link to={"/profile"}>Профиль</Link>}
           
            }
           
        }
       
  
}

// const mapStateFromProps = (store)=>{


//     return {
//         posts: store
//     }
// }


// export default connect(mapStateFromProps)(PostItem);