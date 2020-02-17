import React from "react"
import PropTypes from "prop-types"

export default class Extracurriculars extends React.Component {
  render() {
    return (
      <div>
        <h2>Extracurriculars</h2>
        {this.props.data.map((e, i) => {
          return (
            <div key={i}>
              <p>{e.name}</p>
              <p>{e.organization}</p>
              <p>{e.date}</p>
              {e.text ? <p>{e.text}</p> : null}
            </div>
          )
        })}
      </div>
    )
  }
}

Extracurriculars.propTypes = {
  data: PropTypes.array,
}
