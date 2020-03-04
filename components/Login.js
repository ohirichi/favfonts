import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import {useState} from "react";


export default function Login (props){
    const [formType, setFormType] = useState("login");

    function handleSubmit(e){
        e.preventDefault();
        const pass = e.target.password.value;
        const email = e.target.email.value;
        console.log("email and pass:", email, pass )

        formType == "register" ?
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(res => console.log(res))
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error:", errorCode, errorMessage)
            // ...
          })
          :
          firebase.auth().signInWithEmailAndPassword(email, pass)
          .then(res => console.log(res))
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error:", errorCode, errorMessage)
            // ...
          })

          props.updateState({showLogin:false})
    }

    return(
        <div className="login-container">
            <div className="card">
                <p className="form-toggle" onClick={()=> formType == "login" ? setFormType("register") : setFormType("login")} >{formType == "login" ? "New User?" : "Already Have An Account?"}</p>
                <p>{formType == "login" ? "Login" : "Sign Up"}</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" />
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" />
                    <button type="submit">{formType == "login" ? "Submit" : "Register"}</button>
                </form>
            </div>
            <style>
                {`
                    .card {
                        
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        margin: 1rem;
                        padding: 1rem;
                        font-family:inherit;
                    }

                    p {
                        font-weight: bold;

                    }

                    .form-toggle {
                        display:block;
                        text-align:right;
                        align-self:flex-end;
                        font-family:inherit;
                        font-size: 0.8rem;
                        cursor:pointer;
                        font-weight:bolder;
                        text-decoration: underline;

                    }

                    

                    form{
                        display:flex;
                        width:80%;
                        padding: 1rem;
                        flex-direction:column;
                        align-items:flex-start;
                        justify-content:center;
                    }


                    input{
                        margin: .5rem;
                        padding: .5rem;
                        color: var(--accent-color);
                        width:100%;
                        border:none;
                        border-bottom: 1px solid var(--accent-color);
                        background-color:var(--primary-color);
                    }
                    label{
                        margin: .5rem;
                        align-self:flex-start;
                    }
                    button {
                        background-color: red;
                        color: white;
                        border: none;
                        border-radius:3px;
                        padding: .7rem;
                        text-align:center;
                        margin:.5rem;
                        margin-top:1rem;
                        
                    }
                `}
            </style>

        </div>
    )
}