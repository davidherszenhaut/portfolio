import React from "react"
import PropTypes from "prop-types"

import "../../src/styles/Resume.css"

export default class Contact extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="contactContainer">
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
