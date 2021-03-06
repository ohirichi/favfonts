

export default function Navbar(props){

   function onChangeHandler(e){     
        let updObj = {};
       if(e.target.name ){
            updObj[e.target.name] = e.target.dataset.value || e.target.value;
       }
       else if (e.target.dataset.name){
           updObj[e.target.dataset.name] = e.target.dataset.value || e.target.value;
       }
       else throw Error("Error in onChange Handler")
       props.onInputChange(updObj);
    }

    function favsFilterHandler(){
        let updObj ={
            favsOnly:!props.state.favsOnly
        }
        props.onInputChange(updObj);
    }

    function resetHandler(){
        let updObj = {
            search:"",
            type:"",
            fontSize:20,
        }
        props.onInputChange(updObj);
    }
    return (
        <div className="nav-container">
            <input id="search" name="search" type="text" placeholder="Search fonts" value={props.state.search} onChange={onChangeHandler} />
            <input id="type" name="type" type="text" placeholder="Type something" value={props.state.type} onChange={onChangeHandler} />
            <select id="font-size" name="fontSize" value={props.state.fontSize} onChange={onChangeHandler} >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="35">35</option>
                <option value="60">60</option>
            </select>
            <div className="theme-container">
                <label className="theme-choice-container">
                    <input type="radio" name ="theme" id="light" value="light" defaultChecked onClick={onChangeHandler} />
                    <span className="custom-radio"></span>
                </label>
                <label className="theme-choice-container">
                    <input type="radio" name ="theme" id="dark" value="dark" onClick={onChangeHandler}/>
                    <span className="custom-radio"></span>
                </label>
            </div>
            <div className="view-container">
                <i className={props.state.view == "list" ? "material-icons hidden" : "material-icons" } data-name="view" data-value="list" onClick={onChangeHandler}>list</i>
                <i className={props.state.view == "grid" ? "material-icons hidden" : "material-icons" } data-name="view" data-value="grid" onClick={onChangeHandler}>view_module</i>
            </div>
            <i className={props.state.favsOnly ? "material-icons favorites selected" : "material-icons favorites"} onClick={favsFilterHandler}>favorite</i>
            <i className="material-icons" onClick={resetHandler}>refresh</i>
        

            <style jsx>
                {`
                    * {
                        box-sizing: border-box;
                    
                    }
                    .nav-container{
                        max-width:100vw;
                        border-radius:48px;
                        height:3rem;
                        border: 1px solid var(--accent-color);
                        display:flex;
                        padding: .5rem;
                        justify-content: space-evenly;
                        margin: .3rem;
                    }

                    .theme-container{
                        display:flex;
                        justify-content:center;
                    }

                    .theme-choice-container{
                        position:relative;
                        display:flex;
                        margin: .3rem;
                        height:100%;
                        width:50%;
                        justify-content:center;

                    }

                    input, select {
                        border: none;
                        background-color:var(--primary-color);
                        color:var(--accent-color);
                        padding: 2px;
                    }

                    input {
                        border-right: 1px solid var(--accent-color);
                    }

                    input::placeholder{
                        color:var(--accent-color);
                    }


                    input[type=radio]{
                        position:absolute;
                        margin:0;
                        opacity:0;
                        height:14px;
                        width:14px;
                        cursor:pointer;

                    }
                    
                    #search, #type{
                        flex-grow:1;
                        max-width:30%;
                    }
                    
                    i {
                        cursor:pointer;
                    }

                    i.hidden {
                      display:none;
                    }

                    
                    .custom-radio{
                        border-radius:50%;
                        height:14px;
                        width:14px;
                        border: 1px solid var(--accent-color);
                        

                    }

                    input:checked + .custom-radio{
                        background-color:var(--accent-color);
                    }

                    .favorites {
                        color: rgb(128,128,128);
                        opacity: 0.5;
                        cursor: pointer;
                    }

                    .favorites.selected{
                        color:var(--accent-color);
                        opacity:1;
                    }

                    @media only screen and (max-width: 650px){
                        #type, #fontSize, select, .theme-container, .view-container{
                            display:none;
                        }

                        #search{
                            max-width:80%;
                        }
                    }
                `}

            </style>
        </div>
    )
}