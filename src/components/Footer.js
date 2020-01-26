import React from "react"

export default class Footer extends React.Component {
  render() {
    return <p>David Herszenhaut &copy; {new Date().getFullYear()}</p>
  }
}
