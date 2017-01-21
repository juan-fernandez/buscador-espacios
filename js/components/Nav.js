import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link className ='navbar-brand' to="/">Buscador de espacios</Link>
          </div>
          <ul class="nav navbar-nav">

          </ul>

        </div>
      </nav>
    );
  }
}
