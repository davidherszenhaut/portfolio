// @format
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import data from "../../content/projects.json"

console.log(data)

//export default () => (
//  <div>
//    Hello world!
//    <h1>{data.text.title}</h1>
//    <h2>{data.text.subtitle}</h2>
//    <p>{data.text.caption}</p>
//  </div>
//)

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>{data.text.title}</h1>
        <h2>{data.text.subtitle}</h2>
        <p>{data.text.caption}</p>
        <p>test</p>
        <Footer />
      </div>
    )
  }
}
