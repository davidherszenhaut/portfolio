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
              <div className="extracurricularsHeader">
                <p>{e.name}</p>
                <p>{e.organization}</p>
                <p>{e.date}</p>
              </div>
              {e.text ? <li>{e.text}</li> : null}
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
