import { Link } from "react-router-dom"
import logo from "../../assets/logo-black.png"
import "../../css/admin.css"
import { useForm } from "react-hook-form"

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const loginAdmin = (data) => {
           alert(JSON.stringify(data))
    }
  return (
    <div className="login-wrapper">
                 <div className="login-content">
                             <Link to={'/'} className="logo">
                                         <img src={logo} alt="" />
                             </Link>

                             <h2>Welcome Back Amigo</h2>
                             <p>Enter your email and password to access your account</p>

                             <div className="form-content">
                                         <form onSubmit={handleSubmit(loginAdmin)}>
                                                     <div className="form-row">
                                                             <label htmlFor="email">Email Address</label>
                                                             <input type="email" {...register('email', { required: 'Please fill this input'})} className="form-control" placeholder="janedoe@email.com"/>
                                                             <span className="error">{errors.email && errors.email.message}</span>
                                                     </div>
                                                     <div className="form-row">
                                                                <label htmlFor="password">Password</label>
                                                                <input type="password" {...register('password', { required: 'Please fill this input'})} className="form-control" placeholder="Enter your password" />
                                                                <span className="error">{errors.password && errors.password.message}</span>
                                                     </div>
                                                     <div className="form-btn">
                                                                <button type="submit">Login</button>
                                                     </div>
                                         </form>
                             </div>
                 </div>
    </div>
  )
}

export default Login