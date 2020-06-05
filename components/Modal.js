import {useState} from 'react';


export default function Modal(props){
    const [hidden, setHidden] = useState(false);


    return (
        <div className={hidden ? "modal-container hidden" : "modal-container"}>
            <div className="background">
            </div>
            <div className="content-container">
                <div className="close" onClick={() => setHidden(true)}>x</div>
                {props.children}
            </div>
            <style jsx>
                {`
                    .modal-container{
                        position: fixed;
                        top:0;
                        left:0;
                        width:100vw;
                        height: 100vh;
                        display:grid;
                        grid-template-rows: 1fr;
                        grid-template-columns: 1fr;
                        grid-template-areas: "main";
                        z-index:1000;
                        pointer-events:none;
                    }
                    .background{
                        position:fixed;
                        width:100vw;
                        height:100vh;
                        top:0;
                        left:0;
                        background-color: var(--accent-color);
                        opacity: 0.7;
                        pointer-events:none;
                        grid-area:main;

                    }

                    .content-container{
                        z-index:2000;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:flex-start;
                        color: var(--accent-color);
                        padding: .5rem;
                        padding-bottom: 1.5rem;
                        grid-area:main;
                        background-color:var(--primary-color);
                        place-self:center;
                        border-radius:5px;
                        max-width: 80vw;
                        pointer-events:none;


                    }

                    .close{
                        border-radius:50%;
                        align-self: flex-end;
                        margin: 0 .5em;
                        padding: 5px;
                        
                        color:var(--accent-color);
                        cursor:pointer;
                        font-size: 1.5rem;
                        pointer-events:auto;
                        position:relative;
                        top: -10px;
                        right: -10px;
                    }

                    .hidden {
                        display: none;
                    }

                `}
            </style>
        </div>
    )
}