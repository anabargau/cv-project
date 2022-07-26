import React, { Component } from 'react';

class Input extends Component {

    render() {
        const { name, onChange, edit, value, group } = this.props;
        if (edit) {
            return (
                <div className="input-container">
                    <label>{name}</label>
                    <input type="text" onChange={onChange} value={value} className={group} id={group + '-' + name.split(' ').join('-').toLowerCase()}></input>
                </div>
            )
        } else {
            return (
                <div className="input-container">
                    <div>{name}</div>
                    <div className="value">{value}</div>
                </div>
            )
        }
        
    }
}

export default Input;