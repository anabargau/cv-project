import React from "react";
import GeneralInfo from "./GeneralInfo";
import Title from "./Title";
import Education from "./Education";
import Experience from "./Experience";

function Preview(props) {
  const { edit, generalInfo, education, experience } = props;
  return (
      <div className="app">
          <Title />
          <GeneralInfo edit={edit} state={generalInfo}/>
          <Education edit={edit} state={education} />
          <Experience edit={edit} state={experience} />
          <button className="edit-button" onClick={props.handleClick}>Edit</button>
      </div>
  );
};

export default Preview;