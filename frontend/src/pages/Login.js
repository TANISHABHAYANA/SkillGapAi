import {useState} from 'react';

import axios from 'axios';

function Login(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password
                }
            );
            const token = res.data.token;
            const userId = res.data.userId;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            alert("Login successful!");
            window.location.href = "/test";
        }
        catch(error){
                if (error.response) {   
                    alert(error.response.data.message);
                } else {
                    alert("Server error. Please check backend.");
                }
        }
    };
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='email'
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/><br/>
                <input type='password'
                placeholder='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/><br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}
export default Login;