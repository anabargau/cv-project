import React from 'react';
import Input from './Input';

function Education(props) {
    const { handleChange, edit, group } = props;
    const { school, city, subject, from, to } = props.state;
    return (
        <fieldset>
            <legend>Education</legend>
            <Input name="School Name" onChange={handleChange} edit={edit} value={school} group={group}/>
            <Input name="City" onChange={handleChange} edit={edit} value={city} group={group}/>
            <Input name="Subject" onChange={handleChange} edit={edit} value={subject} group={group}/>
            <Input name="From" onChange={handleChange} edit={edit} value={from} group={group}/>
            <Input name="To" onChange={handleChange} edit={edit} value={to} group={group}/>
        </fieldset>
    );
};

export default Education;