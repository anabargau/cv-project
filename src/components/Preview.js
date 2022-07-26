import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Title from "./Title";
import Education from "./Education";
import Experience from "./Experience";

class Preview extends Component {
  render() {
    const { edit } = this.props.state;
    const { generalInfo, education, experience } = this.props.state;
    return (
        <div className="app">
            <Title />
            <GeneralInfo edit={edit} state={generalInfo}/>
            <Education edit={edit} state={education} />
            <Experience edit={edit} state={experience} />
            <button onClick={this.props.handleClick}>Edit</button>
        </div>
    )
  }  
}

export default Preview