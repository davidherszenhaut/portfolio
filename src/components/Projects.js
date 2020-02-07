import React from "react"
import PropTypes from "prop-types"

import Project from "./Project"

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(project => {
          return <Project key={project.name} data={project} />
        })}
      </div>
    )
  }
}

Projects.propTypes = {
  data: PropTypes.array,
}
