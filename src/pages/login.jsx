import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here, such as making an API call
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="h-screen bg-[#FFF1DA] flex justify-center items-center w-full">
      <form onSubmit={handleSubmit} className="max-w-sm w-full">
        <div className="bg-white px-10 py-8 rounded-xl w-full shadow-xl">
          <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>
          <hr />
          <div className="space-y-4">
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <input type="checkbox" id="rememberMeCheckbox" name="rememberMe" className="mr-2" />
              <span className="text-xs font-semibold">Remember me?</span>
            </p>
          </div>
          <Link to='/UserProfile'>
          <button type="submit" className="mt-6 w-full shadow-xl bg-[#F2AA4C] hover:bg-[#e2b56d] hover:text-black text-black py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
          </Link>
          <hr />
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span className="ml-2">You don't have an account? <Link to="/register" className="text-xs ml-2 text-blue-500 font-semibold">Register now &rarr;</Link></span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
