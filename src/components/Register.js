import Image from '@material-tailwind/react/Image';
import ProfilePicture from 'assets/img/servici.png';
import BgPicture from 'assets/img/1095.webp';
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import React, {Component} from 'react';
import axios from "axios";

const styling = {
    backgroundImage: `url('${BgPicture}')`,
    backgroundposition: 'center',
    backgroundSize: 'cover',
}
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: "",
        email: "",
        phone:"",
        password:"",
        
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault(); 
        const {name, email, phone, password, } = this.state
        if( name && email && phone && password){
            axios.post("http://localhost:8000/adminregister", this.state)
            .then( res => {
                alert(res.data.message);
            })
        } else {
            alert("password not match")
        }

    }
    render(){
    return(
        <div className='h-screen'  style={styling}>
            <div class=" min-h-screen flex flex-col"  >
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <Image src={ProfilePicture} className="w-32" />
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Register</h1>
                <form  onSubmit={this.handleSubmit} >
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="names"
                        onChange={ (e) => this.setState({ name: e.target.value })} 
                        placeholder="Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={ (e) => this.setState({ email: e.target.value })} 
                        placeholder="Email" />
                        
                    <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="number"
                        onChange={ (e) => this.setState({ phone: e.target.value })} 
                        placeholder="Number" />
                        
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={ (e) => this.setState({ password: e.target.value })} 
                        placeholder="Password" />
                        

                  <Button type="submit" ripple={true} class="w-full text-center py-3 rounded bg-sky-500 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Add </Button>

            </form>
                </div>

                <div class="text-grey-dark mt-6">
                     have an account? 
                    <NavLink class="no-underline border-b border-blue text-blue" to="/login">login</NavLink>
                </div>
            </div>
        </div>
        </div>
    );
};
};