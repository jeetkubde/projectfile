import React, { Component } from "react";
import "./Navbarstyles.css";
import { MenuItems } from "./MenuItems";
import { Link, link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleclick = this.handleclick.bind(this);
  }
  state = { clicked: false };
  handleclick() {
    console.log("cl");
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    return (
      <nav className="NavbarIterms">
        <h1 className="Navbar-logo">PARIKRAMA</h1>

        <div className="menu-icons" onClick={() => this.handleclick()}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i class={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button> <Link to="./signup">Signup</Link></button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
