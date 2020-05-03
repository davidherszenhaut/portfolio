import React from "react"

import "../styles/Footer.css"

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <p>David Herszenhaut &copy; {new Date().getFullYear()}</p>
      </div>
    )
  }
}
