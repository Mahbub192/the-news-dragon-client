import moment from "moment";
import { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../../assets/1.png";
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h5>All Caterogy</h5>
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            to={`/category./${category.id}`}
            className="text-decoration-none text-secondary px-4 "
          >
            {category.name}
          </Link>
        </p>
      ))}
      <div>
        <img src={image1} alt="" />
        <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
        <div className="d-flex gap-4 fw-lighter">
          <p>Sports</p>{" "}
          <p>
            <FaRegCalendar></FaRegCalendar>{" "}
            <span>{moment().format("MMMM DD, YYYY")}</span>
          </p>
        </div>
      </div>
      <div>
        <img src={image2} alt="" />
        <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
        <div className="d-flex gap-4 fw-lighter">
          <p>Sports</p>{" "}
          <p>
            <FaRegCalendar></FaRegCalendar>{" "}
            <span>{moment().format("MMMM DD, YYYY")}</span>
          </p>
        </div>
      </div>
      <div>
        <img src={image3} alt="" />
        <h5>Bayern Slams Authorities Over Flight Delay to Club World Cup</h5>
        <div className="d-flex gap-4 fw-lighter">
          <p>Sports</p>{" "}
          <p>
            <FaRegCalendar></FaRegCalendar>{" "}
            <span>{moment().format("MMMM DD, YYYY")}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
