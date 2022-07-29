import React from 'react';

function Input(props) {
    const { name, onChange, edit, value, group, index } = props;
    if (edit) {
        return (
            <div className="input-container">
                <label>{name}</label>
                <input type="text" onChange={onChange} value={value} className={group} id={group + '-' + name.split(' ').join('-').toLowerCase()} data-index={index}></input>
            </div>
        )
    } else {
        return (
            <div className="input-container">
                <div>{name}</div>
                <div className="value">{value}</div>
            </div>
        );
    };            
};

export default Input;