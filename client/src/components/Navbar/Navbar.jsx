import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { BiSun } from "react-icons/bi";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
      <header className="w-full flex flex-wrap justify-between items-center py-4 px-8 bg-white z-20 shadow-md">
        {/* <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">Mohit Singh</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            {user.isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>}
                            {isLoggedIn ? <li><NavLink to="/logout">Logout</NavLink></li> : <><li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/register">Sign Up</NavLink></li></>}
                        </ul>
                    </nav>
                </div> */}

        <div className="">
          <img
            src="https://base-tailwind.preview.uideck.com/images/logo-light.svg"
            alt=""
          />
          {/* <h4 className="text-4xl font-semibold">Base</h4> */}
        </div>
        <ul className="text-primaryText flex gap-10">
          <li className="hover:text-primary">
            <NavLink to="/" >Home</NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
        <ul className="text-primaryText flex flex-wrap items-center justify-between font-semibold gap-6">
          {/* <li>
            <BiSun className="text-3xl" />
          </li> */}
          {user.isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
          {isLoggedIn ? (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          ) : (
            <>
              <li className="">
                <Link to="/login">Login</Link>
              </li>
              <li className="bg-primary px-7 py-3 text-white rounded-full">
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
