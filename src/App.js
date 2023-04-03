import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Applist from './Applist'; 

class App extends React.Component{ 

  constructor(props){ 
    super(props);
    this.state={Counter1 : 0}
    this.state = {Subject:'and Examples'}
    this.changeHandler = this.changeHandler.bind(this); 
    this.changeHandler2 = this.changeHandler2.bind(this); 
    this.state={cond:true} 
  } 
  
  componentWillMount(){ 
  
  console.log("component will mount"); 
    this.setState({Subject:"sunday"}); 
    this.setState({Counter1 : 55}); 
  } 
  
  componentDidMount(){ 
    this.setState({Counter1:this.state.Counter1 + 1}); 
    console.log("component did mdount"); 
    console.log(this.state.Counter1); 
  } 
  
  shouldComponentUpdate(prevProps,prevState){ 
    console.log(prevState.Counter1); 
    console.log(this.state.Subject); 
    
    return true; 
  } 
  
  componentDidUpdate(prevProps,prevState){ 
    console.log("componentddupdate"); 
  //this.setState({Counter1:this.state.Counter1 + 1}); 
  } 
  
   
  
  changeHandler(e){ 
    e.preventDefault();  
    this.setState({Subject:"Wednesday"}); 
    //this.setState({Counter1:5}) 
    // console.log(e.target.value); 
    console.log(this.refs.text.value + this.refs.textarea1.value); 
    this.state.cond?this.setState({cond:false}):this.setState({cond:true}); 
  } 
  
  changeHandler2(e){ 
    e.preventDefault();  
    this.setState({Subject:"lifting state up"}); 
  } 
  
  render(){ 
    //let cond =false; 
    return (
    <> 
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" /> 

        <a 
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer" 
        >a</a>
          Learn React {this.props.Day} using classes {this.state.Subject}<br/><br/> 
          Account Name : <input type="text" onChange={this.changeHandler} ref ="text"/> <br/> 
          Address <input type="textarea" ref ="textarea1"  rows="4" cols="50"/><br/> 
          <button type="button" onClick={this.changeHandler}>{this.props.buttontext}</button> 
      </header>
    </div> 
  <br/> 
  <div>
    <Applist props1={this.state.cond} props2={this.changeHandler2} />
  </div> 
  </> 
  );}} 
  
  export default App; 