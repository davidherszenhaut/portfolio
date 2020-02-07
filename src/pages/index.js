// @format
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Projects from "../components/Projects"

//import about from "../../content/about.json"
import projects from "../../content/projects.json"
//import resume from "../../content/resume.json"

//console.log(about)
//console.log(projects)
//console.log(resume)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: "projects",
    }
  }

  changeTab(tab) {
    if (tab !== this.state.tab) {
      this.setState({ tab: tab })
    }
    console.log(this.state.tab)
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={() => this.changeTab("projects")}>Projects</button>
        <button onClick={() => this.changeTab("resume")}>
          R&eacute;sum&eacute;
        </button>
        {this.state.tab === "projects" ? <Projects data={projects} /> : null}
        {this.state.tab === "resume" ? <h1>Resume</h1> : null}
        <Footer />
      </div>
    )
  }
}
