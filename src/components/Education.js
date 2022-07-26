import React, { Component } from 'react';
import Input from './Input';

class Education extends Component {
    render() {
        const { handleChange, edit, group } = this.props;
        const { school, city, subject, from, to } = this.props.state;
        return (
            <fieldset>
                <legend>Education</legend>
                <Input name="School Name" onChange={handleChange} edit={edit} value={school} group={group}/>
                <Input name="City" onChange={handleChange} edit={edit} value={city} group={group}/>
                <Input name="Subject" onChange={handleChange} edit={edit} value={subject} group={group}/>
                <Input name="From" onChange={handleChange} edit={edit} value={from} group={group}/>
                <Input name="To" onChange={handleChange} edit={edit} value={to} group={group}/>
            </fieldset>
        )
    }
}

export default Education;