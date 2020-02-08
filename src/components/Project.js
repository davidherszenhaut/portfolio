import React from "react"
import PropTypes from "prop-types"

export default class Project extends React.Component {
  render() {
    console.log(this.props.data)
    const data = this.props.data
    return (
      <div>
        <h1>{data.name}</h1>
        <p>
          {data.stack.map(e => {
            return <span key={e}>{e} </span>
          })}
        </p>
        <p>
          {data.links
            ? Object.keys(data.links)
                .filter(key => data.links[key] !== "TODO")
                .map(function(e) {
                  return (
                    <a key={e} href={data.links[e]}>
                      {e} &nbsp;
                    </a>
                  )
                })
            : null}
        </p>
        <p>{data.description}</p>
      </div>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object,
}
