import React, { Component } from 'react';
import Input from './Input';

class GeneralInfo extends Component {
    render() {
        const { handleChange, edit, group } = this.props;
        const { firstName, lastName, mail, phone } = this.props.state;
        return (
            <fieldset>
                <legend>General Info</legend>
                <Input name="First Name" onChange={handleChange} edit={edit} value={firstName} group={group}/>
                <Input name="Last Name" onChange={handleChange} edit={edit} value={lastName} group={group}/>
                <Input name="Mail" onChange={handleChange} edit={edit} value={mail} group={group}/>
                <Input name="Phone Number" onChange={handleChange} edit={edit} value={phone} group={group}/> 
            </fieldset>
        )
    }


}

export default GeneralInfo;