import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar className="no-underline" bg="primary" data-bs-theme="dark">
      <div className="flex justify-between w-screen">
        <div>
          <h2 className="text-white">My Applications</h2>
        </div>

        <div className="flex px-12 gap-4 no-underline ">
          {["todoapp", "counter", "toggle", "example"].map((item) => {
            return (
              <Link to={`/${item}`}>
                {" "}
                <p className="capitalize no-underline text-3xl font-medium text-white cursor-pointer">
                  {item}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
