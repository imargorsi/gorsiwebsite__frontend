function AuthForm({ isLogin }) {
  return (
    <div className="form-container">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="form-input"
        placeholder="Enter your Email"
      />

      {!isLogin && (
        <>
          <label htmlFor="fullName" className="form-label">
            Your Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="form-input"
            placeholder="Enter your Full Name"
          />
        </>
      )}

      <label htmlFor="password" className="form-label">
        Password
      </label>

      <input
        type="password"
        id="password"
        className="form-input"
        placeholder="Enter your Password"
      />

      {!isLogin && (
        <>
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Your Password
          </label>

          <input
            type="password"
            id="confirmPassword"
            className="form-input"
            placeholder="Enter Your Password Again"
          />
        </>
      )}

      {isLogin && <p className="forgot-password paragraph">Forgot Password?</p>}
      <button className="btn loginbtn">{isLogin ? "Login" : "Register"}</button>
    </div>
  );
}

export default AuthForm;
