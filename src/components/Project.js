import React from "react"
import PropTypes from "prop-types"

export default class Project extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.description}</p>
      </div>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object,
}
