import React, { Component } from 'react';
import axios from 'axios';
//import Searchbar from './searchbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
class ImgHolder extends Component {
constructor(props){
    super(props)
    this.state ={
        search : "",
        imgdata:[],
        description_img:[]

    }
}

componentWillReceiveProps(nextprops){
      this.setState({ search: nextprops.search })

      const url =`https://api.unsplash.com/search/photos?query=${nextprops.search}&client_id=NrPC2Yt-b34khJw-zBu1z4vJMwbobmrsQndspnhzvYw`
      axios.get(url)
       .then(res => {
         const persons = res.data;
         //console.log(persons.results[1]);
         //console.log(persons.results[1].alt_description)
         let data = persons.results;
         let imgdata = data.map((x)=>{
          return  x;
         })
         this.setState({
           imgdata:imgdata
         })
        console.log(imgdata);
 
          let description_img = data.map((x)=>{
          return x.alt_description
         })
         this.setState({
           description_img:description_img
         })
        // console.log(description_img);
 
       })
      
  
}
 
render() {

  
 
  const imgitem = this.state.imgdata.map((number,index) =>{
        return (
          <center>
          <div className="card primary" style={{"width": "18rem"}}>
            <img className="img-thumbnail" src={number.urls.small} alt="Card image cap" key={index}/>
              <div class="card-body color-primary">
                
                <h6 class="card-text" >{ number.description || "No Desciption Provided"}</h6>
                
            </div>
          </div>
          </center>
        )
      });



      


    return (
     <div>
       
      <div>{imgitem}</div>
      <div>{}</div>
      
      

       
     </div>

    );
  }
}

export default ImgHolder;
