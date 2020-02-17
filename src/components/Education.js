import React from "react"
import PropTypes from "prop-types"

export default class Education extends React.Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        {this.props.data.map((e, i) => {
          return (
            <div key={i}>
              <p>{e.name}</p>
              <p>{e.place}</p>
              <p>{e.date}</p>
              {e.text.map((t, j) => {
                return <p key={j}>{t}</p>
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

Education.propTypes = {
  data: PropTypes.array,
}
