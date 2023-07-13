import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul>
        <li className="nav-item active">
              <a className="nav-link" href="#home" target="_blank" rel="noreferrer">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#About" target="_blank" rel="noreferrer">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contact" target="_blank" rel="noreferrer">Contact</a>
            </li>
        </ul>
      </nav>
    )
  }
}

// Basic navbar from the lab. Not responsive. Will need to do more research to get that method memorized/my go to.