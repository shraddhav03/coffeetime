import './Login.css'

export const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <h1>Login</h1>
            <form>
                <label>Email Address</label><input className="inputtxt" type="text" placeholder="shrver@neog.com"></input>
                <label>Password</label><input className="inputtxt" type="text" placeholder="Password"></input>
                <div className="divchbox">
                <input type="checkbox" className="inputchbox"></input>
                <label >Remember Me</label>
                </div>
                <a href="#">Forgot Your Password?</a>
                <button>Login</button>
                <a href="#">Create New Account</a>
            </form>
        </div>
    </div>
  )
}
