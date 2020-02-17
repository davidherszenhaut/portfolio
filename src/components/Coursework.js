import React from "react"
import PropTypes from "prop-types"

export default class Coursework extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <h2>Coursework</h2>
        <p>Computer Science</p>
        <ul>
          {data["cs"].sort().map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
        <p>Mathematics</p>
        <ul>
          {data["math"].sort().map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
        <p>Psychology</p>
        <ul>
          {data["psyc"].sort().map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
      </div>
    )
  }
}

Coursework.propTypes = {
  data: PropTypes.object,
}
