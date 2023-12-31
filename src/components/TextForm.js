import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Uppercase ", "success")
    }
    const handleLwClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lowercase ", "success")
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared ", "success")
    }
    const handleCopy = () => {
       navigator.clipboard.writeText(text)
       props.showAlert("Copied to clipboard ", "success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }
    
    const handleOnChange = (event) => {
        // console.log('On change was clicked');
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{color: props.mode ==='dark' ? 'white' : '#042743'}}>
            <h2 className='mb-3'>{props.heading}</h2>
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark' ? '#13466e' : 'white', color: props.mode ==='dark' ? 'white' : '#042743'}}></textarea>
                </div>
            
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={handleUpClick}>Convert to Uppercase </button>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={handleLwClick}>Convert to Lowercase </button>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={handleClearText}>Cleat Text</button>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mt-3 mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className='container my-3' style={{color: props.mode ==='dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length } words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !==0 }).length} Minutes read </p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>

        </div>
        </>
      
     
  )
}
