import { Fade as Hamburger } from "hamburger-react";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <div className="square"></div>
        <p className="logo-text">PROVINCE</p>
      </div>

      <div className="nav-menu">
        <ul>
          <li className="active">HOME</li>
          <li>ABOUT</li>
          <li>SERVICE</li>
          <li>CONTACT</li>
        </ul>
        <div className="hamburger">
          <Hamburger size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
