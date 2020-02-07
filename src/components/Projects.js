import React from "react"
import PropTypes from "prop-types"

export default class Projects extends React.Component {
  render() {
    return <div>{this.props.data.name}</div>
  }
}

Projects.propTypes = {
  data: PropTypes.array,
}
