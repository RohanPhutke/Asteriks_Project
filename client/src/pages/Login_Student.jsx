import React,{useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import loginBg from "./login-bg.png";
import styles from "../styles/Loginstyle.module.scss"
const Login_Student = () => {

 
    const [inputs,setInputs] = useState({
        email :"",
        password : ""
    })

    const [err,setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e)=> {
        setInputs(prev => ({...prev,[e.target.name] : e.target.value}))
        console.log(inputs);
    }
    const handleSubmit = async e =>{
        e.preventDefault();
        try{
         await axios.post("/auth/loginstudent",inputs)
            navigate("/");
        }catch(err){
            setError(err.response.data);
        }
  
    }


    return (
        //             </form> </div>
        <div className="auth">
           <div class="login">
           <img src= {loginBg} alt="login image" className="login__img" />

         <form action="" class="login__form">
            <h1 class="login__title">Student Login</h1>

            <div class="login__content">
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email" required class="login__input" id="login-email" name = "email" onChange={handleChange} placeholder=" "/>
                     <label for="login-email" class="login__label" >Email</label>
                  </div>
               </div>

               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" name="password" onChange={handleChange} placeholder=" "/>
                     <label for="login-pass" class="login__label" >Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-group">
                  <input type="checkbox" class="login__check-input" id="login-check"/>
                  <label for="login-check" class="login__check-label">Remember me</label>
               </div>

               <a href="#" class="login__forgot">Forgot Password?</a>
            </div>

           
 <button onClick={handleSubmit} className="login__button">Login</button>

            <a href="/loginadmin" class="login_admin" >Login as admin</a>
            {err && <p className="errorTag">{err}</p>}

         </form>
      </div>
      
        </div>
    )
}

export default Login_Student