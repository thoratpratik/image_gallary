import React, { Component } from 'react';
import ImgHolder from './imgholder';
import './App.css';

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state={
            search:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e =>{
        this.setState({
            search: e.target.value
        })
    }

  render() {
    return (
     <div>
         <center>
            <h1 align="center" style={{color:"red"}}> Search Your pics  </h1>
            <input  type="text" className="inputbox" onChange={this.handleChange} />
         </center>
        <ImgHolder search={this.state.search} />
     </div>


    );
  }
}

export default Searchbar;
