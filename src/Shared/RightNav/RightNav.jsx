import { Button, Card, ListGroup } from "react-bootstrap";
import {
    FaFacebookF,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import bg from "../../assets/bg1.png";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightNav = () => {
  return (
    <>
      <div className="">
        <Button className="mb-2 w-100" variant="outline-secondary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="w-100" variant="outline-secondary">
          <FaGithub /> Login with GitHub
        </Button>
      </div>
      <div className="mt-4">
        <h5 className="">Find Us On</h5>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FaFacebookF /> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter /> Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="bg-secondary px-4 py-4 mt-4">
        <h5>Q-Zone</h5>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className="mt-4 position-relative">
        <div className="bg-dark">
          <img className=" w-100 mt-4 opacity-25" src={bg} alt="" />
        </div>
        <div className="position-absolute top-0 mt-5 pt-5 text-white">
          <h1 className="text-center my-4">Create an Amazing Newspaper</h1>
          <p className="px-3 text-center">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <div className="text-center">
            <Button variant="danger" size="lg">
              Large button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNav;
