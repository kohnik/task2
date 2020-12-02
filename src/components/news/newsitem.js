import React from "react";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner, Media 
} from 'reactstrap';

import {Link} from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
//import {connect} from "react-redux";

export default class NewsItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news:null,
            photo:null,
        }

    }


    

    render(){
        let {newsItem,img}=this.props
        let {photo}=this.state
        var SRC=`https://newsinfo-b188.restdb.io/media/${this.props.newsItem.img[0]}`
       
        var lol = new Image;
        lol.src = SRC;
            
       
      
        return  <Card>
            <CardBody>
                <CardTitle tag="div">
                <Media>
                     <Media left href="#">
                     <Media src={`https://newsinfo-b188.restdb.io/media/${this.props.newsItem.img[0]}`} alt="Generic placeholder image" />
                        {/* <img src={`https://newsinfo-b188.restdb.io/media/${this.props.newsItem.img[0]}`}/> */}
                     </Media>
                     <Media body>
                        <Media heading>
                            {newsItem.preview}
                        </Media>
                        {newsItem.full_text}
                     </Media>
                 </Media>
                    
                    
                </CardTitle>
            </CardBody>

    
        </Card>
    }     
    
    // fetch()
    // {
    //     let lol=this.props
        
    //     var settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": `https://newsinfo-b188.restdb.io/media/${this.props.newsItem.img[0]}`,
    //         "method": "GET",
    //         "headers": {
    //             "content-type": "application/json",
    //             "x-apikey": "5fc62c784af3f9656800d138",
    //             "cache-control": "no-cache"
    //         }
    //     }
    //     $.ajax(settings).done(item => 

    //         this.setState({
    //              photo:item
    //             }));

               
    // }
    }

    



    









// const mapStateFromProps = (store)=>{


//     return {
//         posts: store
//     }
// }


// export default connect(mapStateFromProps)(PostItem);