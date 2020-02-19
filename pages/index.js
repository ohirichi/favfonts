import {Component} from "react";
import Link from "next/link";
import Head from "next/head";

import Navbar from "../components/Navbar";

export default class Index extends Component{
    constructor(props){
        super(props);
        this.initialState={
            search:"",
            type:"",
            fontSize:10,
            theme:"light",
            view:"grid"
        }

        this.state = this.initialState;
        this.updateState = this.updateState.bind(this);
    }


    updateState(updObj){
        this.setState(updObj);
    }
    
    
    render(){
        console.log(this.state)

        return(
            <div>
                <Head>
                    {/* Head tags including title etc for SEO */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <header>
                    <img src="" className="logo" />
                    <ul className="link-list">
                        <li><Link href="/"><a>Catalog</a></Link></li>
                        <li><a href="#" >Featured</a></li>
                        <li><a href="#" >Articles</a></li>
                        <li><a href="#" >About</a></li>
                        
                    </ul>
                </header>
                {/* To Do: Navbar component */}
                <Navbar state={this.state} onInputChange={this.updateState} />
                <main>
                    {/* To Do: Card Component */}
                </main>
                <footer>
                    <p> Coded by ohirichi | 2020 | Chingu Solo Project </p>
                </footer>
            
            </div>
        
        )
    }
    
}