import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
    }

    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This app analyzes your text and gives you the exact word count and character count as well. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            "ConvertYourText" works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. You can use this in your pc as well as mobile phones.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            "ConvertYourText" is a free tool where you can perform different operations on your text. You also get the word count and character count which is helpful in writing text when word count is limited.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
