import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCompany() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white"  sticky={'top'}>
      <Container>
        <Navbar.Brand href="#discover"><img className="logo" src="../companylogo.png" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse bg="white" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#whoweare">Who We Are</Nav.Link>
            <Nav.Link href="#corevalue">Our Core Values</Nav.Link>
            <Nav.Link href="#our-speciality">Our Speciality</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#discover">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarCompany;