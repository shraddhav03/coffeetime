import "./LandingPage.css"

export const LandingPage = () => {
  return (
    <div className='landingpage'>
         <div className="card">
           <div className="flex-child right">
            <h1>CoffeeTime</h1>
            <div className="inner-flex">
              <p>Place to connect with your friends in your leisure time</p>
            </div>
          </div>
           <div className="flex-child left">
            <h1>Login</h1>
            <form>
                <label>Email Address</label><input className="inputtxt" type="text" placeholder="shrver@neog.com"></input>
                <label>Password</label><input className="inputtxt" type="text" placeholder="Password"></input>
                <div className="divchbox">
                <input type="checkbox" className="inputchbox"></input>
                <label >Remember Me</label>
                </div>
                {/* <a href="#">Forgot Your Password?</a> */}
                <button>Login</button>
                {/* <a href="#">Create New Account</a> */}
            </form>
           </div>
        </div>
    </div>
  )
}


