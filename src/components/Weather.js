import React, { Component } from "react";
import { Button } from "@material-ui/core";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    items: state.items
});
  
const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
    weatherItem: (m,d) => dispatch(ACTIONS.weatherItem(m,d))
});

class Weather extends Component {
    
    render(){
        
            return(
                <div>
                <h1>{this.props.match.params.month}</h1>
                <h1>{this.props.match.params.day}</h1>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Weather);