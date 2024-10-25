import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
});
const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
            email: credentials.email,
            password: credentials.password,

        })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
        alert("Enter valid credentials");
    }
    if(json.success){
        localStorage.setItem("token coming in front end", json.authtoken);
        console.log(localStorage.getItem("token coming"));
         
      navigate("/");
    }
    else{
        alert("User created successfully");
    }
    
};

const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
};

  return (
    <>
      <div className='container'>
                <form onSubmit={handleSubmit}>
                    

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new  user?</Link>
                </form>
            </div>  
    </>
  )
}
