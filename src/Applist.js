import React from 'react'; 
import './App.css'; 

class Applist extends React.Component{ 
    constructor(props){ 
    } 

   render(){ 
    // console.log("testtest"+this.props.props2); 
    let listoffruits = ["apple","orange","Banana"]; 
    let finallist = listoffruits.map((a,b)=>{console.log(a); console.log(b); return<ul> <li>{a}</li></ul>;});   

    return(
    <>
    <div>List of fruits</div> 
    <div> 
        {this.props.props1?finallist:"Cannot show list"} 
        <button onClick={this.props.props2}>Click to  change parent state</button> 
    </div>
    </>
    ); 
   } 
} 

export default Applist; 