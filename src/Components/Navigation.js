import React, {Component} from 'react'

export default class Navigation extends Component {
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