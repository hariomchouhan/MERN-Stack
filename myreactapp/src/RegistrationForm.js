import { useState } from "react";

export function RegistrationForm() {
    const [formData, setFormData]=useState({});
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    return(
        <>
            <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="Enter name" onChange={handleChange}/>
                    <br /><br />
                    <input name="password" type="password" placeholder="Enter password" onChange={handleChange} />
                    <br /><br />
                    <input name="phone" type="text" placeholder="Enter phone" onChange={handleChange} />
                    <br /><br />
                    <input name="email" type="email" placeholder="Enter email" onChange={handleChange} />
                    <br /><br />
                    <input type="submit" value="Sign Up" />
                </form>
        </>
    );
}