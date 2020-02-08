import React from "react"

import "../../src/styles/Header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerLeft">
          <h1>DH</h1>
        </div>
        <div className="headerRight">
          <button>Projects</button>
          <button>R&eacute;sum&eacute;</button>
        </div>
      </div>
    )
  }
}
