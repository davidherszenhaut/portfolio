import React from "react"
import PropTypes from "prop-types"

export default class Hero extends React.Component {
  render() {
    const data = this.props.data
    console.log(data)
    Object.keys(data.links)
      .sort()
      .forEach(function(v) {
        console.log(v, data.links[v])
      })
    return (
      <div>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <p>{data.caption}</p>
        <ul>
          {Object.keys(data.links)
            .sort()
            .map(function(e) {
              return (
                <li key={e}>
                  <a key={e} href={data.links[e]}>
                    {e}
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

Hero.propTypes = {
  data: PropTypes.object,
}
