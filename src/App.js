import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ons from './Ons';
import Lorem from './Lorem';
import {Button,Navbar,Nav,} from 'react-bootstrap';
import Footer from './Footer';

import { Link, } from "react-scroll";





class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      variant:'light',
      bg:'transparent',
      expand:true,
      expanded:false,
    
    }
  }

  toggleExpanded = () =>{
      this.state.expanded?this.setState({expanded:false}):this.setState({expand:true})


      this.state.expanded?this.setState({expanded:false}):this.setState({expanded:true});

      // if(this.state.expanded){
      //   this.setState({expanded:false})
      // }
      // else{
      //   this.setState({expanded:true})
      // }

  }

  toggleExpandedFalse = () =>{
    this.setState({expanded:false})

  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
    window.addEventListener('resize', this.updateWindowDimensions);

  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () =>{

    if(window.innerWidth<900){
      this.setState({bg:'dark',variant:'dark',expand:false})
    }
    else{
      this.setState({bg:'transparent',variant:'light',expand:true})
    }
  }

  handleScroll = () =>{
    console.log(window.scrollY);
    if(window.scrollY>500){
      this.setState({bg:'dark',variant:'dark'})
      console.log(this.state.class)
    }
    if(window.scrollY<500){
      this.setState({bg:'transparent',variant:'light'})
      
    }
  }

  scrollItem = () =>{
    window.scrollTo({
      top: 600,
      left: 100,
      behavior: 'smooth'
    });

  }


  getDimensions = () =>{
      return window.innerWidth;

  }
  handleClick=()=>{
    console.log('Button clicked')

  }
  onToggle = () =>{
    console.log('the navbar toggled')
  }
  render(){

      console.log(this.getDimensions());
      if(this.getDimensions()>700){
        return (
          <div className="App">
          <Navbar onToggle = {this.itToggled} bg={this.state.bg} variant={this.state.variant}  expand={this.state.expand} fixed="top" >
      <Navbar.Brand href="#home"><h1>React-Bootstrap</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link ><div className="linkItems">
            <Link
    activeClass="active"
    to="section_1"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>SECTION 1</Link>
            </div></Nav.Link>
            <Nav.Link ><div className="linkItems">
            <Link
    activeClass="active"
    to="section_2"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Section 2</Link>
            </div></Nav.Link>
            <Nav.Link ><div className="linkItems">
            <Link
    activeClass="active"
    to="section_3"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Section 3</Link>
            </div></Nav.Link>
          <Nav.Link ><div className="linkItems">
            <Link
    activeClass="active"
    to="contactus"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>Contactus</Link>
            </div></Nav.Link>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
      <div onScroll={this.handleScroll}>
      <div style={{paddingTop:"100px"}}><p>Hello Zoha</p></div>
      <div>
      <Button variant="primary" size="lg" onClick={this.scrollItem}>
        Primary
      </Button>
      
      </div>
      <Ons />
      <section style={{paddingTop:"50px"}}  id = 'section_1'>
      <Lorem col={'lorem1'}/>
      </section>
      <section style={{paddingTop:"50px"}} id = 'section_2'>
      <Lorem col={'lorem2'}/>
      </section>
      <section style={{paddingTop:"50px"}} id = 'section_3'>
      <Lorem col={'lorem3'}/>
      </section>
      <section style={{paddingTop:"50px"}} id = 'contactus'>
      <Footer />
      </section>

      

     
 

 
    </div> 
          </div>

        );
      }
      else{
        return (
          <div className="App">







<Navbar collapseOnSelect={true} expanded={this.state.expanded} expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick = {this.toggleExpanded}/>
  <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#test">Test</Nav.Link>
        <Nav.Link href="#resr"><div className="linkItems">
            <Link
    activeClass="active"
    to="section_1"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
    onClick = {this.toggleExpandedFalse}
>SECTION 1</Link>
            </div></Nav.Link>
            <Nav.Link ><div className="linkItems">
            <Link
    activeClass="active"
    to="section_2"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
    onClick = {this.toggleExpandedFalse}
>Section 2</Link>
            </div></Nav.Link>



            <Nav.Link ><div className="linkItems">
            <Link
    activeClass="active"
    to="section_3"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
    onClick = {this.toggleExpandedFalse}
>Section 3</Link>
            </div></Nav.Link>
          <Nav.Link ><div className="linkItems">
            <Link
    activeClass="active"
    to="contactus"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
    onClick = {this.toggleExpandedFalse}
>Contactus</Link>
            </div></Nav.Link>
            </Nav>
  </Navbar.Collapse>
</Navbar> */}









      <div onScroll={this.handleScroll}>
      <div style={{paddingTop:"100px"}}><p>Hello Zoha</p></div>
      <div>
      <Button variant="primary" size="lg" onClick={this.toggleExpanded}>
        Primary
      </Button>
      
      </div>
      <Ons />
      <section style={{paddingTop:"50px"}}  id = 'section_1'>
      <Lorem col={'lorem1'}/>
      </section>
      <section style={{paddingTop:"50px"}} id = 'section_2'>
      <Lorem col={'lorem2'}/>
      </section>
      <section style={{paddingTop:"50px"}} id = 'section_3'>
      <Lorem col={'lorem3'}/>
      </section>
      <section style={{paddingTop:"50px"}} id = 'contactus'>
      <Footer />
      </section>

      

     
 

 
    </div> 
          
          </div>
          
      
      
        );
      }

   

  }
 

  
}

export default App;
