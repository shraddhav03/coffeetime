
import './App.css';
import { Login } from './pages/Auth/Login'
import { SignUp } from './pages/Auth/SignUp';
import { LandingPage } from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <SignUp/> */}
      <LandingPage/>
    </div>
  );
}

export default App;
