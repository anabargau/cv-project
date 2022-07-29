import './App.css';
import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Title from './components/Title';
import Preview from './components/Preview';

function App() {
  
  const [generalInfo, setGeneralInfo] = useState({firstName: '',
                                                    lastName: '',
                                                    mail: '',
                                                    phone: ''});
  const [education, setEducation] = useState({school: '',
                                                city: '',
                                                subject: '',
                                                from: '',
                                                to: ''});
  const [experience, setExperience] = useState([{position: '',
                                                  company: '',
                                                  city: '',
                                                  from: '',
                                                  to: ''}]);
  const [edit, setEdit] = useState(true);

  function handleChange(event) {
    const elem = event.target;
    let value = elem.value;
    if (elem.classList.contains('general')) {
      switch(elem.id) {
        case 'general-first-name':
          setGeneralInfo(generalInfo => ({
            ...generalInfo,
            firstName: value
          }));
          break;
        case 'general-last-name':
          setGeneralInfo(generalInfo => ({
            ...generalInfo,
            lastName: value
          }));
          break;
        case 'general-mail':
          setGeneralInfo(generalInfo => ({
            ...generalInfo,
            mail: value
          }));
          break;
        case 'general-phone-number':
          setGeneralInfo(generalInfo => ({
            ...generalInfo,
            phone: value
          }));
          break;
        default:
          return 'Id not found';
      };
    };

    if (elem.classList.contains('education')) {
      switch(elem.id) {
        case 'education-school-name':
          setEducation(education => ({
            ...education,
            school: value
          }));
          break;
        case 'education-city':
          setEducation(education => ({
            ...education,
            city: value
          }));
          break;
        case 'education-subject':
          setEducation(education => ({
            ...education,
            subject: value
          }));
          break;
        case 'education-from':
          setEducation(education => ({
            ...education,
            from: value
          }));
          break;
        case 'education-to':
          setEducation(education => ({
            ...education,
            to: value
          }));
          break;
        default:
          return 'Id not found';
      };
    };

    if (elem.classList.contains('experience')) {
      let idx = parseInt(event.target.dataset.index);
      let newArray = [...experience];
      switch(elem.id) {
        case 'experience-position':
          newArray[idx].position = value;
          setExperience(newArray);
          break;
        case 'experience-company':
          newArray[idx].company = value;
          setExperience(newArray);
          break;
        case 'experience-city':
          newArray[idx].city = value;
          setExperience(newArray);
          break;
        case 'experience-from':
          newArray[idx].from = value;
          setExperience(newArray);
          break;
        case 'experience-to':
          newArray[idx].to = value;
          setExperience(newArray);
          break;
        default:
          return 'Id not found';
      };
    };
  };

  function changeEditMode(event) {
    event.preventDefault();
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    };
    console.log(edit);
  };

  function addExperience(event) {
    event.preventDefault();
    const obj = {position: '', 
                company: '', 
                city: '', 
                from: '', 
                to: ''};
    let newArray = [...experience];
    newArray.push(obj);
    setExperience(newArray);
  };

  function deleteExperience(event) {
    event.preventDefault();
    let index = parseInt(event.target.id);
    let newArray = [...experience];
    newArray.splice(index, 1);
    setExperience(newArray);
    }; 

  if (edit) {
    return (
      <div className='app'>
        <Title />
        <form>
          <GeneralInfo handleChange={handleChange} edit={edit} state={generalInfo} group="general"/>
          <Education handleChange={handleChange} edit={edit} state={education} group="education"/>
          <Experience handleChange={handleChange} edit={edit} state={experience} group="experience" addExperience={addExperience} deleteExperience={deleteExperience}/>
          <button className="submit-button" type="submit" onClick={changeEditMode}>Submit</button>
        </form>
      </div>
    ) 
  } else {
    return (
      <Preview generalInfo={generalInfo} education={education} experience={experience} edit={edit} handleClick={changeEditMode}/>
    )
  };
};
export default App;
