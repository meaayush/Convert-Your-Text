import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let nText=text.toUpperCase();
        setText(nText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick = () =>{
        let nText=text.toLowerCase();
        setText(nText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick = () =>{
        let nText='';
        setText(nText);
        props.showAlert("Text Cleared","success");
    }

    const handleCopy = () =>{
        let ctext=document.getElementById("myBox");
        ctext.select();
        navigator.clipboard.writeText(ctext.value);
        props.showAlert("Text Copied","success");
    }

    const handleSpaces = () =>{
        let ctext=text.split(/[ ]+/);
        setText(ctext.join(" ").trim());
        props.showAlert("Extra Spaces Removed","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
// #124873 #0c2441
    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#0c2441',color: props.mode==='light'?'black':'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove any Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.length===0?0:text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"**Nothing to preview**"}</p>
        </div>
        </>
    );
}
