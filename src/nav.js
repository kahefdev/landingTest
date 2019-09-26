
      console.log(this.getDimensions());
      if(this.getDimensions()>700){
        return (
          <div className="App">
          <Navbar onToggle = {this.itToggled} bg={this.state.bg} variant={this.state.variant} expand={this.state.expand} fixed="top">
      <Navbar.Brand href="#home"><h1>React-Bootstrap</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
      <div onScroll={this.handleScroll}>
      <div style={{paddingTop:"100px"}}><p>Hello</p></div>
      <div>
      <Button variant="primary" size="lg" onClick={this.scrollItem}>
        Primary
      </Button>
      </div>
      <Ons />
      <Lorem />
      <Lorem />

     
 

 
    </div> 
          </div>

        );
      }
      else{
        return (
          <div className="App">
          <Navbar  bg={"dark"} variant={"dark"} expand={false} fixed="top" >
      <Navbar.Brand href="#home"><h3>React-Bootstrap</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
      <div onScroll={this.handleScroll}>
      <div style={{paddingTop:"100px"}}><p>Hello</p></div>
      <div>
      <Button variant="primary" size="lg" onClick={this.handleClick}>
          Buttonzz
      </Button>
      
      </div>
      <Ons />
      <Lorem />
      
    </div>
          
          </div>
          
      
      
        );
      }

   

  }
 
