import React from "react"
import PropTypes from "prop-types"

import "../../src/styles/Resume.css"

export default class Contact extends React.Component {
  render() {
    const data = this.props.data
    return (
      // <div className="contactContainer">
      <div>
        <h2>Contact</h2>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.linkedin}</p>
      </div>
    )
  }
}

Contact.propTypes = {
  data: PropTypes.object,
}
