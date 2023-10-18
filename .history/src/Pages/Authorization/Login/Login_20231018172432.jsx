import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div>

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
      <form className="card-body mx- ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center"><small>New Here? <Link to="/">Create an account</Link> </small></p>
    </div>
  </div>
</div>
 
</section>    
        </div>
    );
};

export default Login;