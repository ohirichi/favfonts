import {useState, useRef} from "react";
import {useInView} from "react-intersection-observer"


export default function Wrapper(props){

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: .05,
        triggerOnce:true
      })

    return(
        <div ref= {ref}>
            {inView ? props.child : <div className="loading">Fetching Font...</div>}
            <style jsx>
                {`
                    .loading{
                        height:200px;
                        margin:1rem;
                        display:flex;
                        border-top: 1px solid var(--accent-color);
                        justify-content:center;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}