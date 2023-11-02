import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../../Context/AuthProvider";
import { FaGooglePlusG,FaSquareFacebook } from "react-icons/fa6";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {user,loginUser,googleLoginUser}=useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

const handleLogin = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);
  loginUser(email,password)
  .then( userCredential => {
      // Signed in 
      const loggedUser = userCredential.user;
      console.log(loggedUser)
      navigate(from, { replace: true });
      // Swal.fire('Login Succesful')
      
      // ...
    })
    .catch( error => {
      console.log(error)
    });
  }


  const handleGoogleLogin = ()=>{
    googleLoginUser()
    .then( userCredential => {
        // Signed in 
        const loggedUser = userCredential.user;
        console.log(loggedUser)
        navigate(from, { replace: true });
        // ...
      })
      .catch( error => {
        console.log(error)
      });
}

//captcha start
  useEffect(() => {
    loadCaptchaEnginge(4);
}, [])

const handleValidateCaptcha = (e) => {
  const user_captcha_value = e.target.value;
  if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
  }
  else {
      setDisabled(true)
  }
}
//captcha end
return (
        <div>

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full  lg:mx-36 lg:my-36 max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div  className="form-control">
        <LoadCanvasTemplate />
        <input  onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div >
        <div className="form-control mt-3">
        <button className="btn" onClick={handleGoogleLogin}><FaGooglePlusG></FaGooglePlusG></button>
        </div>
        
      </form>
      <p className="text-center text-lg
      "><small>New Here? <Link to="/signup"><span></span></Link> </small></p>
    </div>
  </div>
</div>
 
</section>    
        </div>
    );
};

export default Login;