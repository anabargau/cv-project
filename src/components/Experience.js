import React, { Component } from 'react';
import Input from './Input';

class Experience extends Component {
    render() {
        const { handleChange, edit, group, addExperience, state, deleteExperience } = this.props;
        return(
            <div className="experience-container">
                {state.map((elem, index) => 
                    <fieldset key={index}>
                        <legend>Experience</legend>
                        <Input name="Position" onChange={handleChange} edit={edit} value={elem.position} group={group} index={index}/>
                        <Input name="Company" onChange={handleChange} edit={edit} value={elem.company} group={group} index={index}/>
                        <Input name="City" onChange={handleChange} edit={edit} value={elem.city} group={group} index={index}/>
                        <Input name="From" onChange={handleChange} edit={edit} value={elem.from} group={group} index={index}/>
                        <Input name="To" onChange={handleChange} edit={edit} value={elem.to} group={group} index={index}/>
                        { edit && index !==0 ? <button className="delete-button" onClick={deleteExperience} id={index}>Delete</button> : null }
                    </fieldset>
                )}
                { edit ? <button className="add-button" onClick={addExperience}>Add Experience</button> : null }
            </div>
        )
    }
}

export default Experience;
