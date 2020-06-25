import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Emaily
          </a>

          <ul className="right">
            <li>
              <a>Login with google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
