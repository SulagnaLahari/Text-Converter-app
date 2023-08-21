import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to upper case!!","success");
    }
    const handleDownClick = () => {
        console.log("Lower Case was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case!!","success");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const handleCapLetter = () => {
        let newtext = " ";
        text.split(" ").forEach((word) => {
            word = word.charAt(0).toUpperCase() + word.substring(1);
            newtext = newtext + " " + word;
        })
        setText(newtext);
        props.showAlert("First letter has been converted to upper case!!","success");
    }
    const handleClear = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Text has been cleared!!","success");
    }
    const handleExtraspaces = () => {
        let newtext = text.split(/[  ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces has been removed!!","success");
    }
    const [text, setText] = useState("");
    // let word=text.trim();
    // let word_length;
    // if(word.length==0)
    // {
    //     word_length=0;
    // }
    // else{
    //     word_length=text.split(" ").length();
    // }
    // text="xyydghf"//Wrong way to change the text
    // setText("New text")//Correct way to change the text
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCapLetter}>Capitalize first letter</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your paragraph summary</h1>
                <p> {(text.length>0)?text.trim().split(" ").length:0} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}