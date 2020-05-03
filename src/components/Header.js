import React from "react"
import PropTypes from "prop-types"

import "../styles/Header.css"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleProjectsChange = this.handleProjectsChange.bind(this)
    this.handleResumeChange = this.handleResumeChange.bind(this)
  }

  handleProjectsChange() {
    this.props.onProjectsChange()
  }

  handleResumeChange() {
    this.props.onResumeChange()
  }

  render() {
    const activeTab = this.props.activeTab
    return (
      <div className="headerContainer">
        <div className="headerLeft">
          <h1>DH</h1>
        </div>
        <div className="headerRight">
          <a
            className={activeTab && activeTab === "projects" ? "activeTab" : ""}
            onClick={this.handleProjectsChange}
          >
            Projects
          </a>
          <a
            className={activeTab && activeTab === "resume" ? "activeTab" : ""}
            onClick={this.handleResumeChange}
          >
            R&eacute;sum&eacute;
          </a>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  onProjectsChange: PropTypes.func,
  onResumeChange: PropTypes.func,
  activeTab: PropTypes.string,
}
