import React from "react"
import PropTypes from "prop-types"

import Contact from "./Contact"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import Extracurriculars from "./Extracurriculars"
import Coursework from "./Coursework"

export default class Resume extends React.Component {
  render() {
    const data = this.props.data
    console.log(data)
    const contact = data[0].data
    const education = data[1].data
    const experience = data[2].data
    const skills = data[3].data
    const extracurriculars = data[4].data
    const coursework = data[5].data
    return (
      <div>
        <Contact data={contact} />
        <Education data={education} />
        <Experience data={experience} />
        <Skills data={skills} />
        <Extracurriculars data={extracurriculars} />
        <Coursework data={coursework} />
      </div>
    )
  }
}

Resume.propTypes = {
  data: PropTypes.array,
}
