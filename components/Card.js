import {useState, useRef} from "react";
import {useInView} from "react-intersection-observer";


export default function Card(props){
    const [ref, inView, entry] = useInView({
        /* Optional options */
        triggerOnce: true,

      })
    const sampleTexts = [
        "All their equipment and instruments are alive.",
        "I watched the storm, so beautiful yet terrific.",
        "Then came the night of the first falling star.",
        "The spectacle before us was indeed sublime.",
        "The sky was cloudless and of a deep dark blue."
    ]
    const [text, setText] = useState(sampleTexts[Math.floor(Math.random()*sampleTexts.length)]) 
    
    return(
        <div className="card-container" ref={ref}>
            {props.index <=20 || inView ? 
                <div className="card">
                    <div className="card-header">
                        <div className="font-family">{props.font.family}</div>
                        {/* <p className="author"></p> */}
                        <button>+</button>
                    </div>
                    
                    <div className="font-preview">{props.type.length ? props.type : text }</div>
                </div>
                :
                <div className="card">
                    <div className="card-header">
                        <div className="font-family">Loading...</div>
                        {/* <p className="author"></p> */}
                        <button>+</button>
                    </div>
                    
                    <div className="font-preview"></div>

                </div>
            }
            <style jsx>
                {`
                    ${props.index <= 20 || inView ? `@Font-face{
                        font-family:${props.font.family};
                        src:url(${props.font.files.regular});
                    }` : ""}
                   
                    .card-container{
                        flex:1;
                        min-width:300px;
                    }
                    .card{
                        min-width:200px;
                        min-height:200px;
                        background-color:var(--primary-color);
                        color:var(--accent-color);
                        border-top: 1px solid var(--accent-color);
                        font-family:${props.font.family};
                        font-size:20px;
                        padding-top: 0.5rem;
                        display:flex;
                        flex-direction:column;
                        align-items: center;
                        margin:1rem;
                        flex-grow:1;
                    }

                    .card-header{
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                    }

                    button {
                        border-radius: 50%;
                        background-color:red;
                        width:25px;
                        height:25px;
                        color: var(--primary-color);
                        border: none;
                        font-size:20px;
                    }

                    .font-preview{
                        width:100%;
                        font-family:${props.font.family};
                        font-size:${props.fontSize + "px"};
                        color: var(--accent-color);
                        margin-top:1rem;
                        align-self: center;
                        margin: auto;
                    }

                    @media only screen and (max-width: 650px){

                    }
                `}

            </style>
        </div>
    )
}