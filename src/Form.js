import './App.css';
import React from 'react';
import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class Form extends React.Component{

    state = { name:"", email:"", users:[] }

    constructor(props){
        super(props);
        this.changehandler1 = this.changehandler1.bind(this);
        this.submit = this.submit.bind(this);
        this.getusers = this.getusers.bind(this);
    }

    getusers(e){
        axios.get(`http://localhost:8080/students/`)
        .then(res => {
            console.log(res.data);

        this.setState({users: res.data});
            console.log('state'+this.state.users);
            console.log(res);
        })
    }

    changehandler1(e){
        if (e.target.name === "name"){
            console.log(e.target.value);
        this.setState({name :e.target.value});
        }
        if (e.target.name === "email"){
            this.setState({email :e.target.value});
            console.log(this.state);
        }
        if (e.target.name === "password"){
            console.log(e.target.value);
            this.setState({password :e.target.value});
        }
    }

    deleteStudent(e){        
        try {
            axios.post("http://localhost:8080/students/delete/" + e).then((response) => {
                console.log(e + 'Sent to server');   
                console.log(response.status, response.data);
                this.getusers();
            });
        } catch (error) {
            console.log(error);
        }
    }

    async submit(e){
        e.preventDefault();
        console.log(this.state);

        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        var headers = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };

        // Axios post request to send data to the server
        axios.post("http://localhost:8080/students/create", userData, headers).then((response) => {
            console.log(userData + 'Sent to server');   
            console.log(response.status, response.data);
            this.getusers();
        });
    }

    // rest api exprss js from here
    // and pass this state to the node js

    render(){
        return(
            <div class="md:flex">
                {this.state.users.map((a, index) => (
                    <p class="mt-2"><b>[{index}] ─ {a.name} ({a.email})</b><br></br><button class="bg-red-500 hover:bg-red-700 rounded-full" onClick={()=>this.deleteStudent(a._id)}>Delete</button></p>
                ))}
                    
                <form class="container mx-auto" onSubmit={this.submit}>
                    Name : <input type="text" class="rounded" name="name" value={this.state.name} onChange={this.changehandler1}/><br/>
                    Email : <input type="email" class="rounded" name="email" value={this.state.email} onChange={this.changehandler1}/><br/>
                    Password : <input type="password" class="rounded" name="password" value={this.state.password} onChange={this.changehandler1}/><br/>

                    <input type="submit" value="Submit" />      
                </form>

                <button class="bg-sky-500 hover:bg-sky-700 rounded-full" onClick = {this.getusers}>Show users </button>
            </div>
        );
    }
}

export default Form;
