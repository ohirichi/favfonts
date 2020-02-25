import {useState, useRef} from "react";
import Head from "next/head";


export default function Card(props){
    

    const sampleTexts = [
        "All their equipment and instruments are alive.",
        "I watched the storm, so beautiful yet terrific.",
        "Then came the night of the first falling star.",
        "The spectacle before us was indeed sublime.",
        "The sky was cloudless and of a deep dark blue."
    ]
    const [text, setText] = useState(sampleTexts[Math.floor(Math.random()*sampleTexts.length)]) 
    const url = "https://fonts.googleapis.com/css?family="+ props.font.family.replace(" ", "+") + "&display=swap"
    return(
        
        <div className="card-wrapper"  >
            <Head>
                <link href={url} rel="stylesheet" />
            </Head>

            <div className="card-container"> 
               
                    <div className="card">
                        <div className="card-header">
                            <div className="font-family">{props.font.family}</div>
                           
                            <button>+</button>
                        </div>
                        
                        <div className="font-preview">{props.type.length ? props.type : text }</div>
                    </div>
                    
            </div>
            <style jsx>
                {`
                    .card-container{
                        min-width:300px;
                        max-width:${props.view == "list" ? "100vw" : "23vw"};
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
                        font-family:"${props.font.family}";
                        font-size:${props.fontSize + "px"};
                        color: var(--accent-color);
                        margin-top:1rem;
                        align-self: center;
                        margin: auto;
                        overflow-wrap:break-word;
                        word-wrap:break-word;
                    }

                    @media only screen and (max-width: 1210px){
                        .card-container{
                            max-width:${props.view == "list" ? "100vw" : "31vw"};
                        }

                    }
                    @media only screen and (max-width: 900px){
                        .card-container{
                            max-width:${props.view == "list" ? "100vw" : "48vw"};
                        }
                    }
                    @media only screen and (max-width: 600px){
                        .card-container{
                            max-width:100vw;
                        }
                    }
                `}

            </style>
        </div>
    )
}