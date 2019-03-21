import React, { Component } from "react";
import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Link from "react-router-dom/Link";


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name1: 'Bienvenido',
            name2: 'Weather App',
            check: false,
        }
    }
    
    
    changeMessage =(event)=>{
        if(this.state.check === false){
            this.setState({check: true});
        }else{
            this.setState({check: false});
        }
    }


    render(){
        const Sa =()=>{return(
        <div>
        <h1>{this.state.name1}</h1> 
        <h1>{this.state.name2}</h1>
        </div>
        )
        }
        
        const Sb =()=> {
            return(
            <div>
            <h1>{this.state.name2}</h1>
            <h1>{this.state.name1}</h1> 
            </div> 
        )
        }
        return(
            <div>
                    <div>
                        {this.state.check?
                            Sa():
                            Sb()
                        }
                    </div>
                <form>

                    <div>
                        <Button color="primary" variant="contained" onClick={this.changeMessage.bind(this)}>Intercalar</Button>
                        <br/>
                    </div>

                    <div>
                            <Link to="/weather/March/20">Weather for March 20</Link>
                            <br/>
                            <Link to="/weather/March/21">Weather for March 21</Link>
                            <br/>
                            <Link to="/weather/March/22">Weather for March 22</Link>
                            <br/>
                            <Link to="/weather/March/23">Weather for March 23</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Home;