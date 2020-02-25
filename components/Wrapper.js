import {useState, useRef} from "react";
import {useInView} from "react-intersection-observer"


export default function Wrapper(props){

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: .05
      })

    return(
        <div ref= {ref}>
            {inView ? props.child : <div className="loading">Fetching Font...</div>}
            <style jsx>
                {`
                    .loading{
                        height:200px;
                        display:flex;
                        justify-content:center;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}