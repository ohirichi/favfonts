import {useState, useRef} from "react";
import Head from "next/head";
import axios from 'axios';

import Modal from './Modal';


export default function Card(props){
    

    const sampleTexts = [
        "All their equipment and instruments are alive.",
        "I watched the storm, so beautiful yet terrific.",
        "Then came the night of the first falling star.",
        "The spectacle before us was indeed sublime.",
        "The sky was cloudless and of a deep dark blue."
    ]
    const [text, setText] = useState(sampleTexts[Math.floor(Math.random()*sampleTexts.length)])
    const [showModal, setShowModal] = useState(false);
    
    
    //TO DO: PROVIDE  BELOW URL WHEN CLICKING THE ADD BUTTON:
    const url = "https://fonts.googleapis.com/css?family="+ props.font.family.replace(" ", "+") + "&display=swap";
    const stylesheetCode = `<link rel="stylesheet" href="${url}" />`;


    const updateFavorites = function (){
        axios.post(`${process.env.apiBaseUrl}favorites?uid=${props.state.userId}`, {fontFamily: props.font.family, isFavorite: !props.isFavorite})
        .then(()=> props.updateState({favorites:{...props.favorites, [props.font.family]:!props.isFavorite }}) )
        .catch(err => console.log(err))

    }
    return(
        
        <div className="card-wrapper"  >
            <Head>
                <link href={url} rel="stylesheet" />
            </Head>

            <div className="card-container"> 
               
                    <div className="card">
                        <div className="card-header">
                            <div className="font-family">{props.font.family}</div>
                            <div className="action-container"> 
                            <i className= {props.isFavorite ? "material-icons favorite added" :"material-icons favorite"} onClick={updateFavorites} >favorite</i>
                                <button onClick ={()=>setShowModal(true)} >+</button>
                            </div>
                            
                        </div>
                        
                        <div className="font-preview">{props.type.length ? props.type : text }</div>
                    </div>
                    
            </div>
            <div onClick = {()=> setShowModal(false)}>
                {showModal ? <Modal><h5>Copy and Paste the below:</h5><div className="code-container" onClick={(e)=> e.stopPropagation()}>{stylesheetCode}</div></Modal> : null}
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

                    .action-container{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }

                    .favorite {
                        color: gray;
                        opacity: 0.3;
                        transform: scale(1.2);
                        cursor: pointer;
                        margin: 3px;
                    }

                    .favorite.added {
                        color:red;
                        opacity: 1;
                    }

                    button {
                        border-radius: 50%;
                        background-color:red;
                        width:24px;
                        height:24px;
                        color: var(--primary-color);
                        border: none;
                        font-size:20px;
                        margin: 0 5px;
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

                    h5{
                        pointer-events: none;
                    }
                    .code-container{
                        border-radius: 3px;
                        border: 1px solid gray;
                        background-color: #C1BCBC;
                        font-weight:bolder;
                        padding: 1rem;
                        margin: .5rem;
                        margin-bottom: 2rem;
                        max-width:80%;
                        word-wrap: break-word;
                        overflow-y: auto;
                        cursor:text;
                        pointer-events:auto;
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