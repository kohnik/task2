import React, { Fragment } from "react";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner
} from 'reactstrap';

import {Link} from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
//import {connect} from "react-redux";
import NewsItem from "./newsitem"

export default class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news:null
        }

    }

    render(){
    let {news}=this.state
    {news==null?this.fetch():null}
        
        
        return  <Fragment>
        
                {news ? news.map((item)=>
                    <NewsItem newsItem={item} key={item.id}/>
                ):<Row><Col fluid="12" className="text-center"><Spinner  /></Col></Row>}

             </Fragment>
    
                }
    fetch()
    {
        console.log(324444444)
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://newsinfo-b188.restdb.io/rest/news",
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "5fc62c784af3f9656800d138",
                "cache-control": "no-cache"
            }
        }
        $.ajax(settings).done(item => this.setState({
                 news:item
                }));

                
    }

  
      
        
  
}

// const mapStateFromProps = (store)=>{


//     return {
//         posts: store
//     }
// }


// export default connect(mapStateFromProps)(PostItem);