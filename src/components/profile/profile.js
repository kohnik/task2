import React, { Fragment } from "react";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner
} from 'reactstrap';

import {Link} from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
//import {connect} from "react-redux";


export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }

    }

    render()
    {
        return  <Fragment>
            <Row>
                <Col>
                Я ЛУЧШИЙ
                
                </Col>
            </Row>
                </Fragment>
    }
 
  
      
        
  
}

// const mapStateFromProps = (store)=>{


//     return {
//         posts: store
//     }
// }


// export default connect(mapStateFromProps)(PostItem);