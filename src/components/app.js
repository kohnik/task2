import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import Header from "Comp/header";
import Home from "Comp/home";
import Posts from "Comp/posts";
import Users from "Comp/users";
import Page404 from "Comp/404";
import PostInside from "Comp/posts/itemInside";
import Message from "Comp/comments/message";
import News from "Comp/news/news"
import Login from "Comp/login/login"
import Profile from "Comp/profile/profile"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:null,
           
        }

    }

    render(){
        console.log(this.props)
        return(
            <Router>
                <Container fluid={true}>
                    <Header />

                    <Switch>
                        <Route exact path={"/"} component = {Home} />
                         <Route exact path={"/news"} component = {News}/>
                    
                        <Route exact path={"/profile"} component = {Profile} />
                        <Route exact path={"/login"} component = {Login} /> 
                        <Route component = {Page404} />
                    </Switch>
                    {
                        this.props.message.active ?  <Message /> : null
                    }
                </Container>
            </Router>
        )
    }



   
    



    componentDidMount(){
        // console.log("------componentDidMount");

        // fetch("https://newsinfo-b188.restdb.io/rest/newjson",
        // {
        //     "headers": {
        //         "Content-Type": "application/json",
                
        //         "apikey": " 5fc62c784af3f9656800d138",
        //         "Cache-Control": "no-cache"
        //  } })
        //     .then(data=>data.json())
        //     .then(news=>{
        //         console.log(news)
        //         })
        //     .catch(error=>console.log(error));
               
    }
}

const mapStateFromProps = (store)=>{


    return {
        message: store.message
    }
}


export default connect(mapStateFromProps)(App);