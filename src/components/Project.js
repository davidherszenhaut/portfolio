import React from "react"
import PropTypes from "prop-types"

export default class Project extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <h1>{data.name}</h1>
        <p>
          {data.stack.map(e => {
            return <span key={e}>{e} </span>
          })}
        </p>
        {data.links
          ? Object.keys(data.links)
              .filter(key => data.links[key] !== "TODO")
              .map((e, i) => (
                <span key={i}>
                  {i > 0 && " "}
                  <a href={data.links[e]}>{e}</a>
                </span>
              ))
          : null}
        <p>{data.description}</p>
      </div>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object,
}
