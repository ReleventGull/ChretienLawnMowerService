import { useState } from "react"
import { adminLogin } from "../Components/api"
const Login = () => {
  const [userName, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await adminLogin({username: userName, password: password})
        console.log(response)
        if(response.error) {
          setError(response.message)
        }else if(response.status == 200) {
          localStorage.setItem("CLSToken", response.token)
        }
    }
    return (
        <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Admin Panel</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <p style={{color: 'red'}}>{error}</p>
            </div>
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
        </div>
      </div>
    )
}

export default Login