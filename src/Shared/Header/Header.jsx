import moment from "moment";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import bg from '../../assets/bg1.png';
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
        <div className="d-flex">
          <Button variant="danger">Danger</Button>
          <Marquee speed={80} pauseOnHover="boolean">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain — as it happened !
          </Marquee>
        </div>
        <div className="my-5">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Career</Nav.Link>
                </Nav>
                <Nav>
                <Image style={{height:'55px'}} src={bg} roundedCircle />
                  <Nav.Link eventKey={2} href="#memes">
                  <Button variant="dark">Login</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </Container>
  );
};

export default Header;
