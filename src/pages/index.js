// @format
import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Resume from "../components/Resume"

import about from "../../content/about.json"
import projects from "../../content/projects.json"
import resume from "../../content/resume.json"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleProjectsChange = this.handleProjectsChange.bind(this)
    this.handleResumeChange = this.handleResumeChange.bind(this)
    this.state = {
      tab: "projects",
    }
  }

  changeTab(tab) {
    if (tab !== this.state.tab) {
      this.setState({ tab: tab })
    }
  }

  handleProjectsChange() {
    this.setState({ tab: "projects" })
  }

  handleResumeChange() {
    this.setState({ tab: "resume" })
  }

  render() {
    return (
      <div>
        <Header
          onProjectsChange={this.handleProjectsChange}
          onResumeChange={this.handleResumeChange}
        />
        <Hero data={about} />
        {this.state.tab === "projects" ? <Projects data={projects} /> : null}
        {this.state.tab === "resume" ? <Resume data={resume} /> : null}
        <Footer />
      </div>
    )
  }
}
