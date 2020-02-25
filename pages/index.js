import {Component} from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import debounce from "lodash.debounce";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";



export default class Index extends Component{
    constructor(props){
        super(props);
        this.initialState={
            search:"",
            type:"",
            fontSize:20,
            theme:"light",
            view:"grid",
            showNav:false,
            scrolled: false
        }

        this.state = this.initialState;
        this.updateState = this.updateState.bind(this);
        
    }


    updateState(updObj){
        this.setState(updObj);
    }
    
    componentDidMount(){
        window.addEventListener("scroll", debounce(()=>{
            if(window.pageYOffset > 100){
                this.updateState({scrolled:true})
            }
            else{
                this.updateState({scrolled:false})
            }
        },300));

        
    }
    

    render(){

         const state = this.state;
        
         let fontList;
         if(state.search.length){
            const regex = RegExp(`\w*${state.search}+\w*`,"i")
            fontList = this.props.fonts.filter((font) => regex.test(font.family))
            
         }
         else{
             fontList = this.props.fonts;
          
         }
         

        return(
            <div className="container">
                <Head>
                    <title>Favorite Fonts</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <header id="header">
                    <div className="header-left">
                        <i className="material-icons menu" onClick={e=> this.updateState({showNav: true})} >menu</i>
                        {/* <img src="" className="logo" /> */}
                        <div className="logo">Favorite Fonts</div>
                    </div>
                    <div className={ state.showNav ? "header-links active" : "header-links" }onClick={e=> {this.updateState({showNav: false})}}>
                        <ul className="link-list">
                            <li><Link href="/"><a className="active">CATALOG</a></Link></li>
                            <li><a href="#" >FEATURED</a></li>
                            <li><a href="#" >ARTICLES</a></li>
                            <li><a href="#" >ABOUT</a></li>
                            
                        </ul>
                    </div>
                    
                </header>
                
                <Navbar state={this.state} onInputChange={this.updateState} />
                <main id="main">
                    {fontList.map((font, index) => (<Wrapper key={font.family}><Card  font={font} index ={index} fontSize={state.fontSize} view={state.view} type={state.type}  /></Wrapper>))}
                    <Link href="/#header" as="/" ><a className={state.scrolled ? "top-btn" : "top-btn hidden"}><i className="material-icons">arrow_upward</i></a></Link>
                </main>
                
                <footer>
                    <p> Coded by ohirichi | 2020 | Chingu Solo Project </p>
                </footer>
                <style jsx global>
                    {`
                        html{
                            scroll-behavior:smooth;
                            overflow-x:hidden;
                        }
                        body {
                            --primary-color: ${state.theme == "light" ? "white" : "black"};
                            --accent-color: ${state.theme == "light" ? "black" : "white"};
                            background-color: var(--primary-color);
                            color: var(--accent-color);
                            overflow-x:hidden;
                            
                            
                        }


                        .container{
                            display:flex;
                            flex-direction: column;
                            justify-content:center;
                            
                        }

                        header{
                            border-bottom: 1px solid silver;
                            margin-bottom: 1rem;
                            display:flex;
                            align-items:center;
                            justify-content:space-between;
                        }
                        .header-left{
                            display:flex;
                            align-items:center;
                            justify-content:flex-start;
                        }
                        .menu{
                            display:none;
                        }
                        .logo{
                            margin: .5rem;
                        }

                        ul{
                            list-style: none;
                            display:flex;
                            justify-content: flex-end;
                            align-items:center;
                            cursor-events:none;
                        }

                        a {
                            color: var(--accent-color);
                            text-decoration: none;
                            margin:.5rem;
                            font-size:1rem;
                        }

                        a.active {
                            color:red;
                        }

                        main {
                            margin-top:2rem;
                            position:relative;
                            display:grid;
                            grid-template-columns: ${state.view == "list" ? "1fr" : "1fr 1fr 1fr 1fr"} ;

                        }

                        .top-btn{
                            width:30px;
                            height:30px;
                            border: none;
                            border-radius:50%;
                            background-color: white;
                            box-shadow: 1px 1px 10px;
                            position: fixed;
                            bottom:0;
                            right:0;
                            color: gray;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        }

                        .top-btn.hidden{
                            display:none;
                        }

                        footer{
                            align-self:center;
                        }

                        @media only screen  and (max-width:1210px){
                            main{
                                grid-template-columns: ${state.view == "list" ? "1fr" : "1fr 1fr 1fr"} 
                            }
                        }

                        @media only screen  and (max-width:900px){
                            main{
                                grid-template-columns: ${state.view == "list" ? "1fr" : "1fr 1fr"} 
                            }
                        }
                     

                        @media only screen and (max-width:700px){
                            .menu{
                                display:inline-block;
                            }
                            .header-links{
                                position:fixed;
                                width:100vw;
                                height:100vh;
                                background-color:rgba(0,0,0,0);
                                transform:translateX(-110%);
                                top:0;
                                opacity:0;
                                z-index:100;
                                transition:
                                transform .5s ease,
                                background-color .3s .3s ease;
                                

                                
                            }

                            .header-links.active{
                                transform:translateX(0%);
                                background-color:rgba(0,0,0,.7);
                                opacity:1;
                            }

                            ul {
                                width:30%;
                                min-width: 200px;
                                flex-direction:column;
                                justify-content: flex-start;
                                align-items:flex-start;
                                background-color: var(--primary-color);
                                color: var(--accent-color);
                                height:100%;
                                margin-top:0;
                                padding-top:3rem;
                            }

                            li{
                                margin: 1rem;
                            }

                            li:first-child::before{
                                content:"Favorite Fonts";
                                position:absolute;
                                top: 1rem;
                                
                            }

                           
                        }

                        @media only screen and (max-width: 600px){
                            main{
                                grid-template-columns: 1fr; 
                            }
                        }
 
                    `}
                </style>
            
            </div>
        
        )
    }
    
}

Index.getInitialProps = async function(){
    const res = await axios.get(process.env.apiUrl)
    const fonts = res.data;
    
    return ({fonts})
    
}