

export default function Navbar(props){

   function onChangeHandler(e){     
        let updObj = {};
       if(e.target.name ){
            updObj[e.target.name] = e.target.dataset.value || e.target.value;
       }
       else{
           updObj[e.target.dataset.name] = e.target.dataset.value;
       }
       props.onInputChange(updObj);
    }

    function resetHandler(){
        let updObj = {
            search:"",
            type:"",
            fontSize:10,
        }
        props.onInputChange(updObj);
    }

    return (
        <div className="nav-container">
            {/* 1. search area  2. text to display 3. font size selection 4. theme selection 5. list/grid view toggle 6. reset button*/}
            <input id="search" name="search" type="text" placeholder="Search fonts" value={props.state.search} onChange={onChangeHandler} />
            <input id="type" name="type" type="text" placeholder="Type something" value={props.state.type} onChange={onChangeHandler} />
            <select id="font-size" name="fontSize" value={props.state.fontSize} onChange={onChangeHandler} >
                <option value="10">10</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="40">40</option>
            </select>
            <div className="theme-container">
                <label className="theme-choice-container">
                    <input type="radio" name ="theme" id="light" data-value="light" defaultChecked onClick={onChangeHandler} />
                    <span className="custom-radio"></span>
                </label>
                <label className="theme-choice-container">
                    <input type="radio" name ="theme" id="dark" data-value="dark" onClick={onChangeHandler}/>
                    <span className="custom-radio"></span>
                </label>
            </div>
            <div className="view-container">
                {/* To Do: Add in onClick Handler */}
                <i className={props.state.view == "list" ? "material-icons hidden" : "material-icons" } data-name="view" data-value="list" onClick={onChangeHandler}>list</i>
                <i className={props.state.view == "grid" ? "material-icons hidden" : "material-icons" } data-name="view" data-value="grid" onClick={onChangeHandler}>view_module</i>

            </div>
            {/* To Do: Add in onClick Handler */}
            <i className="material-icons" onClick={resetHandler} >refresh</i>
        

            <style>
                {`
                    * {
                        box-sizing: border-box;
                    
                    }
                    .nav-container{
                        max-width:100vw;
                        border-radius:48px;
                        height:2.5rem;
                        border: 1px solid black;
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
                    }

                    input {
                        border-right: 1px solid black;
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
                    

                    i.hidden {
                      display:none;
                    }

                    
                    .custom-radio{
                        border-radius:50%;
                        height:14px;
                        width:14px;
                        border: 1px solid black;
                        

                    }

                    input:checked + .custom-radio{
                        background-color:black;
                    }
                `}

            </style>
        </div>
    )
}