import React, { Component } from 'react';
import Input from './Input';

class Experience extends Component {
    render() {
        const { handleChange, edit, group } = this.props;
        const { position, company, city, from, to } = this.props.state;
        return(
            <fieldset>
                <legend>Experience</legend>
                <Input name="Position" onChange={handleChange} edit={edit} value={position} group={group}/>
                <Input name="Company" onChange={handleChange} edit={edit} value={company} group={group}/>
                <Input name="City" onChange={handleChange} edit={edit} value={city} group={group}/>
                <Input name="From" onChange={handleChange} edit={edit} value={from} group={group}/>
                <Input name="To" onChange={handleChange} edit={edit} value={to} group={group}/>
            </fieldset>
        )
    }
}

export default Experience;
