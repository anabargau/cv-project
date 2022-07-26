import './App.css';
import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Title from './components/Title';
import Preview from './components/Preview';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        mail: '',
        phone: ''
      },
      education: {
        school: '',
        city: '',
        subject: '',
        from: '',
        to: ''
      },
      experience: [
        {
        position: '',
        company: '',
        city: '',
        from: '',
        to: ''
        }
        ],
      edit: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeEditMode = this.changeEditMode.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handleChange(event) {
    const elem = event.target;
    let value = elem.value;
    let prop;
    if (elem.classList.contains('general')) {
      prop = this.state.generalInfo;
      switch(elem.id) {
        case 'general-first-name':
          prop.firstName = value;
          break;
        case 'general-last-name':
          prop.lastName = value;
          break;
        case 'general-mail':
          prop.mail = value;
          break;
        case 'general-phone-number':
          prop.phone = value;
          break;
        default:
          prop.firstName = value;
      }
    }

    if (elem.classList.contains('education')) {
      prop = this.state.education;
      switch(elem.id) {
        case 'education-school-name':
          prop.school = value;
          break;
        case 'education-city':
          prop.city = value;
          break;
        case 'education-subject':
          prop.subject = value;
          break;
        case 'education-from':
          prop.from = value;
          break;
        case 'education-to':
          prop.to = value;
          break;
        default:
          prop.school = value;
      }

    }

    if (elem.classList.contains('experience')) {
      prop = this.state.experience[parseInt(event.target.dataset.index)];
      switch(elem.id) {
        case 'experience-position':
          prop.position = value;
          break;
        case 'experience-company':
          prop.company = value;
          break;
        case 'experience-city':
          prop.city = value;
          break;
        case 'experience-from':
          prop.from = value;
          break;
        case 'experience-to':
          prop.to = value;
          break;
        default:
          prop.position = value;
      }

    }

    this.setState({prop});

  }

  changeEditMode(event) {
    event.preventDefault();
    this.setState((prevState) => {
      if (prevState.edit === true) {
        return {
          edit: false
        }
      } else {
        return {
          edit: true
        }
      }
    })
  }

  addExperience(event) {
    event.preventDefault();
    const obj = {position: '', 
                company: '', 
                city: '', 
                from: '', 
                to: ''};
    this.setState((prevState) => (
      {
        generalInfo: prevState.generalInfo,
        education: prevState.education,
        experience: prevState.experience.concat(obj),
        edit: prevState.edit
      }
    ))
  }

  deleteExperience(event) {
    event.preventDefault();
    let index = parseInt(event.target.id);
    console.log(index);
    if(index > 0) {
      this.setState((prevState) => (
        {
          generalInfo: prevState.generalInfo,
          education: prevState.education,
          experience: prevState.experience.filter((elem, idx) => idx !== index),
          edit: prevState.edit
        }
      ))
    }
    
  }

  render() {
    const edit = this.state.edit;
    const { generalInfo, education, experience } = this.state;
    if (edit) {
      return (
        <div className='app'>
          <Title />
          <form>
            <GeneralInfo handleChange={this.handleChange} edit={edit} state={generalInfo} group="general"/>
            <Education handleChange={this.handleChange} edit={edit} state={education} group="education"/>
            <Experience handleChange={this.handleChange} edit={edit} state={experience} group="experience" addExperience={this.addExperience} deleteExperience={this.deleteExperience}/>
            <button className="submit-button" type="submit" onClick={this.changeEditMode}>Submit</button>
          </form>
        </div>
      ) 
    } else {
      return (
        <Preview state={this.state} handleClick={this.changeEditMode}/>
      )
    }
    
  }
}
export default App;
