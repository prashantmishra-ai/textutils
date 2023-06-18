import React, {useState} from 'react'


export default function About() {
  const [style, setstyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  });
 
  const [btnmodtext, setbtnmodtext] = useState("Change to Dark Mode")
  const toggleMode = ()=>{
    if (style.color === 'white'){
      setstyle({
        color : 'black',
        backgroundColor : 'white'
      })
      setbtnmodtext('Change to Dark Mode')
    }
    else {
      setstyle({
        color : 'white',
        backgroundColor : 'black'
      })
      setbtnmodtext('Change to Light Mode')
    }
  }
  return (
    <div classNameName='container'>
     <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Changing Uppercase
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the button to Change your text to Uppercase</strong> You just need to add your text and Click on the Uppercase Button.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Changing Spaces to Underscore
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> By Clicking here you can Change your Spaces to Underscore Symbol.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Clear Text Area
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> This button Clears the Text area.
      </div>
    </div>
  </div>
</div>
    <div className="container">
    <button type="button" onClick={toggleMode} class="btn btn-dark" style={style}>{btnmodtext}</button>
    </div>
    </div>
  )
}
