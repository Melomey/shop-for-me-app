import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Login(props) {
  return (
    <>
      <section className="py-26 bg-[url('/src/assets/orange-bg.jpg')] h-screen bg-cover">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <a className="inline-block mx-auto mb-6" href="#">
                <img src={logo} alt="Logo" className="text-black w-48 font-bold text-2xl mt-10"/>
              </a>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
            </div>
            <form action="">
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
                <input id="email" className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder bg-white shadow border-2 border-orangeOne rounded" type="email" placeholder="email" name="email"/>
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="password">Password</label>
                <input id="password" className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder bg-white shadow border-2 border-orangeOne rounded" type="password" placeholder="**********" name="password"/>
              </div>
              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                  <label htmlFor="remember">
                    <input id="remember" type="checkbox"/>
                    <span className="ml-1 font-extrabold">Remember me</span>
                  </label>
                </div>
                <div className="w-full lg:w-auto px-4">
                  <a className="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a>
                </div>
              </div>
              <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-orangeOne hover:bg-deepGreen border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
              <p className="text-center font-extrabold">Don&rsquo;t have an account? <a className="text-orangeOne hover:text-deepGreen" href="#">Sign up</a></p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
