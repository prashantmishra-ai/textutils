import React , {useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = ()=>{
        // console.log("The Button UpperCase is Clicked")
        setText(text.toUpperCase())
        props.ShowAlert("Converted to Uppercase", "success  ")
    }
    const handleLowerCase = ()=>{
        setText(text.toLowerCase())
        props.ShowAlert("Converted to Lowercase", "success  ")
    }
    const handleSpecialCase = ()=>{
        setText(text.replaceAll(" ", "_"))
        props.ShowAlert("Converted to Spaces to underscore", "success  ")
    }
    const handleonChange = (event)=>{
        // console.log("Handle on Change Called")
        setText(event.target.value)
    }
    const handleRevSpecialCase = ()=>{
        setText(text.replaceAll("_", " "))
        props.ShowAlert("Converted to Underscores to Spaces", "success  ")
    }
    const handleClearCase = ()=>{
        setText("")
        props.ShowAlert("Cleared your TextArea", "success  ")
    }
  return (
    <>
        <div className="container">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder = "Enter Your Text here.." value = {text} onChange={handleonChange} rows="3"></textarea>
            <button className="btn btn-primary my-4 mx-3" onClick={handleUpClick}>Change to UpperCase</button>
            <button className="btn btn-primary my-4 mx-3" onClick={handleLowerCase}>Change to LowerCase</button>
            <button className="btn btn-primary my-4 mx-3" onClick={handleSpecialCase}>Change to Space to Underscore</button>
            <button className="btn btn-primary my-4 mx-3" onClick={handleRevSpecialCase}>Change to Underscore to Spaces</button>
            <button className="btn btn-primary my-4 mx-3" onClick={handleClearCase}>Clear Text Area</button>
        </div>
        <div className="container">
            <h2>Your Text Information: </h2>
            <p>Your Text have : {text.split(" ").length} words and {text.length} characters</p>
            <p>It will take {text.split(" ").length * 0.08} minutes to read</p>
            <h3>Preview</h3>
            <p className='w-50'>{text}</p>
        </div>

    </>
);
}
