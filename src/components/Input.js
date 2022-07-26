import React, { Component } from 'react';

class Input extends Component {

    render() {
        const { name, onChange, edit, value, group } = this.props;
        if (edit) {
            return (
                <div>
                    <label>{name}</label>
                    <input type="text" onChange={onChange} value={value} className={group} id={group + '-' + name.split(' ').join('-').toLowerCase()}></input>
                </div>
            )
        } else {
            return (
                <div>
                    <div>{name}</div>
                    <div>{value}</div>
                </div>
            )
        }
        
    }
}

export default Input;