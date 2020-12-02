import React from "react";
import {
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import {Link} from "react-router-dom";


export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        let {collapse}=this.state
        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand ><Link to={"/"}>На главную</Link></NavbarBrand>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink ><Link to={"/news"}>Новости</Link></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        {localStorage.getItem("login")?<Link to={"/profile"}>Профиль</Link>:<Link to={"/login"}>Профиль</Link>}
                        </NavLink>  
                        
                    </NavItem>
                   
                  </Nav>
                  <NavbarText>Task1 from React</NavbarText>
                
              </Navbar>
            </div>
          );
          
        // return <Row className={"header"}>
        //     <Col lg={12}>
        //         <ul>
        //             <li><Link to={"/"}>Home</Link></li>
        //             <li><Link to={"/posts"}>Posts</Link></li>
        //             <li><Link to={"/users"}>Users</Link></li>

        //         </ul>
        //     </Col>


        // </Row>
    }


    
}