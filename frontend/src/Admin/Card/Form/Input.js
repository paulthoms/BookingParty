import React, {useEffect, useState} from 'react';

function Input (props) {
    const [focus,setFocus] = useState(false);
    const [input,setInput] = useState(props.value);
    function handleOnFoucusFocus(){
        setFocus(true);
    }
    function handleOnBlurFocus(){
        setFocus(false);
    }

    function onChange(e){
        props.onChange(e);
        setInput(e.target.value);
    }

    return (
        <div className="MuiGrid-root makeStyles-grid-356 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-3">
            <div className="MuiFormControl-root undefined makeStyles-formControl-206 MuiFormControl-fullWidth">
                <label className={"MuiFormLabel-root MuiInputLabel-root makeStyles-labelRoot-201 MuiInputLabel-formControl MuiInputLabel-animated " + (focus && 'MuiInputLabel-shrink ') + (input != '' && " MuiInputLabel-shrink MuiInputLabel-filled")} data-shrink="false" htmlFor = {props.id} >{props.name}</label>
                <div className={"MuiInputBase-root MuiInput-root MuiInput-underline makeStyles-underline-198 MuiInputBase-formControl MuiInput-formControl " + (focus && 'Mui-focused')}>
                    <input aria-invalid="false" onChange = {onChange} onFocus={handleOnFoucusFocus} type = {props.type} onBlur = {handleOnBlurFocus} className="MuiInputBase-input MuiInput-input" id= {props.id} value = {input}/>
                </div>
            </div>
        </div>
    );
}

export default Input;
