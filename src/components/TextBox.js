import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextBox(props) {
    const handleOnChange = (e)=> {
        setText(e.target.value);   // it is use for text add with {text} value;
    }

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalClick = ()=> {
        let newText = text.split(" ");
        newText = newText.filter((value, inde)=>{
            return value;
        })
        
        let capitArray = []
        newText.forEach((ele)=>{
            capitArray.push(ele[0].toUpperCase()+ele.substring(1).toLowerCase());
        
        });
        setText(capitArray.join(" "));
        // let firstLetter = e.target.value.charAt(0);
        // e.target.value = firstLetter.toUpperCase() + e.target.text.slice(1);
    }

    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
    }

    const handleClearSpaceClick = ()=> {
        let newText = text.split(" ");
        newText = newText.filter((value, inde)=>{
            return value;
        })
        setText(newText.join(" "));
    }

    const handleCopyClick = ()=> {
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        document.execCommand('copy');
    }
    const [text, setText]  = useState('');
    let word_count = text.split(' ').filter((val)=>{
        return val;
    })

    let word_count_per_sec = Math.floor((word_count.length * 0.008)*60).toFixed(0);
    let word_minut = Math.floor(word_count_per_sec/60);
    let word_second = word_count_per_sec % 60;

    console.log(word_minut);
    console.log(word_second);
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalClick} >Capitalization</button>
            <button className="btn btn-primary mx-2" onClick={handleClearSpaceClick} >Remove Extra Space</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summery</h1>
            {/* <p>3542 words and 35245562 characters</p> */}
            <p>{word_count.length} words and {text.length} characters</p>
            <p>{word_count.length > 0 ? word_minut : "( Not Available )"} Minutes read & {word_count.length > 0 ? word_second : "( Not Available )"} Second Read</p>
            <h2>Preview</h2>
            <span>{word_count.length > 0 ? text : "Nothing to Preview"}</span>
        </div>
        </>
    )
}

TextBox.propTypes = {
    heading: PropTypes.string
}
