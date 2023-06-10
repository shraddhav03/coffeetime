import './SignUp.css'

export const SignUp = () => {
  return (
    <div className='SignUp'>
         <div className="card">
            <h1>SignUp</h1>
            <form>
            <label>Full Name</label><input className="inputtxt" type="text" placeholder="Shraddha Verma"></input>
                <label>UserName</label><input className="inputtxt" type="text" placeholder="shraddhaverma"></input>
                
                <label>Email Address</label><input className="inputtxt" type="text" placeholder="shrver@neog.com"></input>
                <label>Password</label><input className="inputtxt" type="text" placeholder="********"></input>
                <label>Confirm Password</label><input className="inputtxt" type="text" placeholder="********"></input>
               
                <div className="divchbox">
                <input type="checkbox" className="inputchbox"></input>
                <label >I accept all terms and conditions</label>
                </div>
                {/* <a href="#">Forgot Your Password?</a> */}
                <button>Create New Account</button>
                {/* <a href="#">Create New Account</a> */}
            </form>
        </div>
    </div>
  )
}
