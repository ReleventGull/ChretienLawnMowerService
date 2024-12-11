import { useState } from "react"

const Login = () => {
  const [userName, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
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
              <p></p>
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
              <p></p>
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